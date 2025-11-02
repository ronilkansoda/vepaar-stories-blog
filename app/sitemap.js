import { supabase } from "@/lib/supabaseClient";

export default async function sitemap() {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

  // Fetch all published blog posts
  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, category, updated_at, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  // Generate blog post URLs
  const blogUrls = (blogs || []).map((blog) => ({
    url: `${baseUrl}/${blog.category}/${blog.slug}`,
    lastModified: blog.updated_at || blog.published_at,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Get unique categories
  const categories = [...new Set((blogs || []).map((blog) => blog.category))];

  // Generate category URLs
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  return [...staticPages, ...categoryUrls, ...blogUrls];
}
