
import Link from "next/link";

// Supabase client setup (server-side)
import { supabase } from "../../lib/supabaseClient";

export default async function BlogPage({ params }) {
    const { category } = params;
    // Fetch published blogs from Supabase
    const { data: blogs, error } = await supabase
        .from("blogs")
        .select("title,slug,cover_image,content,published_at,is_featured,views")
        .eq("status", "published")
        .eq("category", category)
        .order("published_at", { ascending: false });

    if (error) {
        return <div className="max-w-4xl mx-auto px-6 py-8">Error loading blogs.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Business & Finance Tips</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Practical posts to help you run and grow your business.</p>
            <ul className="space-y-5 sm:space-y-6">
                {blogs?.map((p) => (
                    <li key={p.slug} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden">
                        <Link href={`/${category}/${p.slug}`} className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 items-start group">
                            <div className="w-full h-40 sm:w-32 sm:h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                                <img
                                   src={`${p.cover_image}`}
                                    alt={p.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
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