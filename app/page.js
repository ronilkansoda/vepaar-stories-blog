import StoryHero from "../components/StoryHero";
import StorySidebar from "../components/StorySidebar";
import FeaturedSection from "../components/FeaturedSection";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

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
      // Get first 6 standard posts to feed both sidebars
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
                  <img src={`${story.image}`} alt={`thumb${idx + 2}`} className="w-full h-24 md:h-28 object-cover rounded mb-2" />
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
                <img
                  src={`${story.image}`}
                  alt={story.title}
                  className="w-36 h-24 object-cover rounded-md"
                />
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
                <img
                  src={`${story.image}`}
                  alt={story.title}
                  className="w-36 h-24 object-cover rounded-md"
                />
                <div className="sidebar-subheading">{story.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}