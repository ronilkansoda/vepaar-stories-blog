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
        .limit(4);

      if (trendingError) console.error("Supabase trending error:", trendingError);
      if (sidebarError) console.error("Supabase sidebar error:", sidebarError);
      if (bigFeaturedError) console.error("Supabase big featured error:", bigFeaturedError);

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
    };
    fetchBlogs();
  }, []);

  // Data for Section Two
  const coverStory = {
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop",
    overline: "COVER STORY",
    title: "The New Silk Sheets: What's Fueling India's Luxury Hotel Boom?",
    excerpt: "A look at how hospitality brands are investing in experience-led differentiation to capture high-value guests."
  };
  const miniStories = [
    {
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop",
      title: "Prestige Estates shares in focus today after subsidiary gets GST notice in Mumbai"
    },
    {
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop",
      title: "At $4,000 an ounce, gold is on fire: What should Indian buyers do now?"
    },
    {
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop",
      title: "IndusInd Bank, Bank of Baroda, Kotak Mahindra Bank: Nomura shares targets post Q2 updates"
    }
  ];
  const belowListStories1 = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop",
      title: "TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop",
      title: "TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop",
      title: "TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview"
    },
    {
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80&auto=format&fit=crop",
      title: "Reliance Power, Reliance Infra shares in focus after SEBI show cause notices; firms reply"
    }
  ];
  const belowListStories2 = [
    {
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop",
      title: "'Tell me which country should we join': Jaishankar says India never aligned with any power"
    },
    {
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop",
      title: "'Tell me which country should we join': Jaishankar says India never aligned with any power"
    },
    {
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop",
      title: "'Tell me which country should we join': Jaishankar says India never aligned with any power"
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop",
      title: "'You pay cow tax on liquor, tolls, cement': Investment banker breaks down a ₹3,000 cr bill"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 py-7">
      {/* Top Picks Section */}
      <section className="flex py-5 overflow-hidden border-b border-gray-300">
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="heading-3 text-gray-900 mb-3 sm:mb-0 sm:mr-6 flex-shrink-0">Trandings</div>
          <div className="flex gap-4 sm:gap-6 flex-1 overflow-x-auto sm:overflow-x-visible pb-2 snap-x snap-mandatory sm:snap-none webkit-overflow-scrolling-touch scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            {trendingStories.map((story, idx) => (
              <Link key={idx} href={`/${story.category}/${story.slug}`}>
                <div className="min-w-[180px] w-[180px] md:min-w-[200px] md:w-[200px] font-semibold relative flex-shrink-0 snap-start sm:static">
                  <img src={story.image} alt={`thumb${idx + 2}`} className="w-full h-24 md:h-28 object-cover rounded mb-2" />
                  <div className="font-semibold mt-1.5 leading-tight text-gray-900 caption">{story.caption}</div>
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
      <section className="mt-12 border-t border-gray-200 pt-7 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start max-w-6xl mx-auto">
          <div>
            <img src={coverStory.image} alt="cover" className="w-full h-56 object-cover rounded-md" />
            <div className="overline mt-3">{coverStory.overline}</div>
            <h2 className="heading-2 my-2 text-gray-900">{coverStory.title}</h2>
            <p className="text-gray-600 body">{coverStory.excerpt}</p>
          </div>

          <div>
            {miniStories.map((story, idx) => (
              <div key={idx} className="flex gap-3 py-3 border-t border-gray-200">
                <img src={story.image} alt={`mini${idx + 1}`} className="w-28 h-18 object-cover rounded" />
                <div className="font-semibold text-gray-900 body">{story.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Below List */}
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {belowListStories1.map((story, idx) => (
              <div key={idx} className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
                <img src={story.image} alt={`list${idx + 1}`} className="w-36 h-24 object-cover rounded-md" />
                <div className="font-semibold text-gray-900 body">{story.title}</div>
              </div>
            ))}
          </div>

          <div>
            {belowListStories2.map((story, idx) => (
              <div key={idx} className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
                <img src={story.image} alt={`list${idx + 5}`} className="w-36 h-24 object-cover rounded-md" />
                <div className="font-semibold text-gray-900 body">{story.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer is now global in layout.js */}
    </div>
  );
}