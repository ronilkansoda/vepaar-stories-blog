import { supabase } from "@/lib/supabaseClient";

export default async function RSS() {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

  // Fetch latest published blogs
  const { data: blogs } = await supabase
    .from("blogs")
    .select("title, slug, category, description, content, published_at, updated_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(50);

  const rssItems = (blogs || [])
    .map(
      (blog) => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${baseUrl}/${blog.category}/${blog.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${blog.category}/${blog.slug}</guid>
      <description><![CDATA[${blog.description || blog.content.replace(/<[^>]+>/g, "").slice(0, 200)}]]></description>
      <pubDate>${new Date(blog.published_at).toUTCString()}</pubDate>
      <category>${blog.category.replace(/_/g, " ")}</category>
    </item>`
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <title>Vepar Stories — Business &amp; Finance Tips</title>
    <link>${baseUrl}</link>
    <description>Practical business tips, financial advice, and entrepreneurship strategies for professionals and entrepreneurs.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Vepar Stories</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}

export async function GET() {
  return RSS();
}
