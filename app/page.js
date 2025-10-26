"use client";
import React, { useEffect, useState } from "react";
import StoryHero from "../components/StoryHero";
import StorySidebar from "../components/StorySidebar";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();
  // Data for Top Picks Section
  const [trendingStories, setTrendingStories] = useState([]);
  const [bigFeatured, setBigFeatured] = useState([]);
  const [sidebarStories, setSidebarStories] = useState([]);
  const [moreStories, setMoreStories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      // Trending: 3 blogs
      const { data: trending, error: trendingError } = await supabase
        .from("blogs")
        .select("title,cover_image,content,category,slug")
        .eq("layout_type", "trending")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(3);

      const { data: bigFeatured, error: bigFeaturedError } = await supabase
        .from("blogs")
        .select("title,cover_image,content,category,slug")
        .eq("layout_type", "big_blog")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(1);

      // Sidebar: 4 blogs
      const { data: sidebar, error: sidebarError } = await supabase
        .from("blogs")
        .select("title,cover_image,category,slug")
        .eq("layout_type", "standard")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(3);

      const { data: moreblogs, error: moreblogsError } = await supabase
        .from("blogs")
        .select("title,cover_image,category,slug")
        .eq("layout_type", "standard")
        .eq("status", "published");

      if (trendingError) console.error("Supabase trending error:", trendingError);
      if (sidebarError) console.error("Supabase sidebar error:", sidebarError);
      if (bigFeaturedError) console.error("Supabase big featured error:", bigFeaturedError);
      if (moreblogsError) console.error("Supabase more blogs error:", moreblogsError);

      setTrendingStories(
        (trending || []).map(b => ({
          title: b.title,
          image: b.cover_image,
          caption: b.title,
          category: b.category,
          slug: b.slug
        }))
      );
      setBigFeatured(
        (bigFeatured || []).map(b => ({
          title: b.title,
          image: b.cover_image,
          caption: b.title,
          category: b.category,
          slug: b.slug
        }))
      );
      setSidebarStories(
        (sidebar || []).map(b => ({
          title: b.title,
          image: b.cover_image,
          category: b.category,
          slug: b.slug
        }))
      );
      setMoreStories(
        (moreblogs || []).map(b => ({
          title: b.title,
          image: b.cover_image,
          category: b.category,
          slug: b.slug
        }))
      );
    };
    fetchBlogs();
  }, []);

  const leftStories = moreStories.slice(0, 4);
  const rightStories = moreStories.slice(4, 8);

  return (
    <div className="max-w-5xl mx-auto px-5 py-7">
      {/* Trending Section */}
      <section className="flex py-5 overflow-hidden border-b border-gray-300">
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="heading-1 text-gray-900 mb-3 sm:mb-0 sm:mr-6 flex-shrink-0">Trandings</div>
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

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 mt-6 md:mt-8 items-start">
        <div className="order-1">
          <StoryHero story={bigFeatured} />
        </div>
        <StorySidebar items={sidebarStories} />
      </main>

      {/* Section Two */}
      <section className="mt-8 pt-7">
        <h3 className="heading-1 my-0 mb-3 text-gray-900">More :</h3>

        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftStories.map((story, idx) => (
              <Link
                href={`/story/${story.slug}`}
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
          <div>
            {rightStories.map((story, idx) => (
              <Link
                href={`/story/${story.slug}`}
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