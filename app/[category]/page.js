
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabaseClient";

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

export async function generateMetadata({ params }) {
    const { category } = params;
    const formattedCategory = category
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    // Fetch category-specific blog count for dynamic description
    const { count } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true })
        .eq("status", "published")
        .eq("category", category);

    const categoryDescriptions = {
        business_stories: "Explore inspiring business stories, case studies, and real-world examples from successful entrepreneurs. Learn from their challenges and victories.",
        financial_tips: "Discover practical financial tips, money management strategies, and investment advice to help you make smarter financial decisions for your business.",
        leadership: "Master leadership skills with proven strategies, management techniques, and insights from industry leaders to build and inspire high-performing teams.",
        entrepreneurship: "Navigate your entrepreneurial journey with startup guides, business strategies, and actionable advice from experienced founders.",
        productivity: "Boost your productivity with time management tips, efficiency tools, and proven methods to accomplish more in less time.",
        personal_growth: "Invest in yourself with personal development insights, career growth strategies, and mindset shifts for long-term success.",
    };

    const description = categoryDescriptions[category] || 
        `Discover ${count || 'valuable'} articles about ${formattedCategory.toLowerCase()} — practical tips and expert advice for business professionals and entrepreneurs.`;

    return {
        title: `${formattedCategory} — Vepar Stories`,
        description: description,
        keywords: [
            formattedCategory,
            "Vepar Stories",
            "Business tips",
            "Finance advice",
            "Marketing strategies",
            "Entrepreneurship guide",
            "Professional development",
        ],
        authors: [{ name: "Vepar Stories Team" }],
        creator: "Vepar Stories",
        publisher: "Vepar Stories",
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: `${BASE_URL}/${category}`,
        },
        openGraph: {
            title: `${formattedCategory} — Vepar Stories`,
            description: description,
            url: `${BASE_URL}/${category}`,
            siteName: "Vepar Stories",
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: `${BASE_URL}/og-${category}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: `${formattedCategory} - Vepar Stories`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${formattedCategory} — Vepar Stories`,
            description: description,
            creator: "@veparstories",
            images: [`${BASE_URL}/og-${category}.jpg`],
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
    };
};

export default async function BlogPage({ params }) {
    const { category } = params;
    // Fetch published blogs from Supabase
    const { data: blogs, error } = await supabase
        .from("blogs")
        .select("title,slug,cover_image,content,published_at,is_featured,views")
        .eq("status", "published")
        .eq("category", category)
        .order("published_at", { ascending: false })
        .limit(8);

    if (error) {
        return <div className="max-w-4xl mx-auto px-6 py-8">Error loading blogs.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Business & Finance Tips</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Practical posts to help you run and grow your business.</p>
            <ul className="space-y-5 sm:space-y-6">
                {blogs?.map((p, idx) => (
                    <li key={p.slug} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden">
                        <Link href={`/${category}/${p.slug}`} className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 items-start group">
                            <div className="w-full h-40 sm:w-32 sm:h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 relative">
                                <Image
                                    src={p.cover_image}
                                    alt={p.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 128px"
                                    className="object-cover"
                                    priority={idx < 2}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {p.title}
                                </h2>
                                <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed line-clamp-2">
                                    {/* Show first 2 lines of content as excerpt (strip HTML) */}
                                    {p.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
                                </p>
                                <div className="text-sm text-gray-500 mt-3 flex items-center gap-2 flex-wrap">
                                    <span>{new Date(p.published_at).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{p.is_featured ? "Featured" : "Blog"}</span>
                                    <span>•</span>
                                    <span>{p.views} views</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}