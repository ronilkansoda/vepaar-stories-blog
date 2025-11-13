import StoryHero from "../components/StoryHero";
import StorySidebar from "../components/StorySidebar";
import FeaturedSection from "../components/FeaturedSection";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

export const metadata = {
  title: "Vepar Stories — Business & Finance Tips for Entrepreneurs",
  description: "Discover practical business tips, financial advice, and entrepreneurship strategies. Learn from real stories and expert insights to grow your business successfully.",
  keywords: [
    "business tips",
    "financial advice",
    "entrepreneurship",
    "startup guide",
    "business growth",
    "finance tips",
    "leadership",
    "productivity",
    "business stories",
    "Vepar Stories"
  ],
  authors: [{ name: "Vepar Stories Team" }],
  creator: "Vepar Stories",
  publisher: "Vepar Stories",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Vepar Stories — Business & Finance Tips for Entrepreneurs",
    description: "Discover practical business tips, financial advice, and entrepreneurship strategies. Learn from real stories and expert insights.",
    url: BASE_URL,
    siteName: "Vepar Stories",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vepar Stories - Business & Finance Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vepar Stories — Business & Finance Tips",
    description: "Practical business and financial tips for entrepreneurs and professionals.",
    creator: "@veparstories",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default async function Home() {
  let trendingStories = [];
  let bigFeatured = [];
  let sidebarStories = [];
  let bigFeatured2 = [];
  let sidebarStories2 = [];
  let moreStories = [];

  try {
    // Fetch all required blog groups on the server in parallel
    const [
      // trending + big blogs (content-heavy)
      { data: contentRich, error: contentRichError },
      // standard posts for both sidebars (first 6)
      { data: standardFirstSix, error: standardSixError },
      // more section (existing data source)
      { data: moreblogs, error: moreblogsError },
    ] = await Promise.all([
      // Fetch both big_blog and trending in one query, then split and slice
      supabase
        .from("blogs")
        .select("title,cover_image,content,category,slug,layout_type")
        .in("layout_type", ["big_blog", "trending"])
        .eq("status", "published")
        .order("published_at", { ascending: false }),
      supabase
        .from("blogs")
        .select("title,cover_image,category,slug")
        .eq("layout_type", "standard")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(6),
      supabase
        .from("blogs")
        .select("title,cover_image,category,slug")
        .eq("layout_type", "standard")
        .eq("status", "published"),
    ]);

    if (contentRichError) console.error("Supabase contentRich error:", contentRichError);
    if (standardSixError) console.error("Supabase standardSix error:", standardSixError);
    if (moreblogsError) console.error("Supabase more blogs error:", moreblogsError);

    const bigBlogs = (contentRich || []).filter((b) => b.layout_type === "big_blog")
      .slice(0, 2);
    const trending = (contentRich || []).filter((b) => b.layout_type === "trending")
      .slice(0, 3);

    trendingStories = (trending || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      caption: b.title,
      category: b.category,
      slug: b.slug,
    }));

    bigFeatured = (bigBlogs.slice(0, 1) || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      caption: b.title,
      category: b.category,
      slug: b.slug,
      content: b.content,
    }));

    bigFeatured2 = (bigBlogs.slice(1, 2) || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      caption: b.title,
      category: b.category,
      slug: b.slug,
      content: b.content,
    }));

    sidebarStories = (standardFirstSix?.slice(0, 3) || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      category: b.category,
      slug: b.slug,
    }));

    sidebarStories2 = (standardFirstSix?.slice(3, 6) || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      category: b.category,
      slug: b.slug,
    }));

    moreStories = (moreblogs || []).map((b) => ({
      title: b.title,
      image: b.cover_image,
      category: b.category,
      slug: b.slug,
    }));
  } catch (e) {
    console.error('Home SSR fetch failed:', e);
  }

  const leftStories = moreStories.slice(0, 4);
  const rightStories = moreStories.slice(4, 8);

  return (
    <div className="max-w-5xl mx-auto px-5 py-2 md:py-7">
      {/* Trending Section */}
      <section className="flex py-5 overflow-hidden ">
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="heading-1 text-gray-900 mb-3 sm:mb-0 sm:mr-6 flex-shrink-0">Trendings</div>
          <div className="flex gap-4 sm:gap-2 flex-1 overflow-x-auto sm:overflow-x-visible pb-2 snap-x snap-mandatory sm:snap-none webkit-overflow-scrolling-touch scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            {trendingStories.map((story, idx) => (
              <Link key={idx} href={`/${story.category}/${story.slug}`}>
                <div className="min-w-[180px] w-[180px] md:min-w-[200px] md:w-[200px] font-semibold relative flex-shrink-0 snap-start sm:static">
                  <div className="w-full h-24 md:h-28 relative rounded mb-2 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.caption}
                      fill
                      sizes="200px"
                      className="object-cover"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="subheading mt-1.5">{story.caption}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="my-8 sm:my-12 border-t border-gray-200"></div>

      {/* Main Content Grid */}
      <FeaturedSection hero={bigFeatured} sidebar={sidebarStories} />

      {/* Divider & Spacing */}
      {(bigFeatured2.length > 0 || sidebarStories2.length > 0) && (
        <div className="my-12 border-t border-gray-200"></div>
      )}

      {/* Flipped Main Content Grid (desktop only flips; mobile order stays same) */}
      {(bigFeatured2.length > 0 || sidebarStories2.length > 0) && (
        <FeaturedSection hero={bigFeatured2} sidebar={sidebarStories2} flip />
      )}

      {/* Section Two */}
      <section className="mt-8 pt-7">
        <h3 className="heading-1 my-0 mb-3 text-gray-900">More :</h3>

        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftStories.map((story, idx) => (
              <Link
                href={`/${story.category}/${story.slug}`}
                key={idx}
                className="flex gap-3.5 py-3 border-t border-gray-200 items-center"
              >
                <div className="w-36 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div className="sidebar-subheading">{story.title}</div>
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className="hidden md:block">
            {rightStories.map((story, idx) => (
              <Link
                href={`/${story.category}/${story.slug}`}
                key={idx}
                className="flex gap-3.5 py-3 border-t border-gray-200 items-center"
              >
                <div className="w-36 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div className="sidebar-subheading">{story.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}