import React from "react";
import { supabase } from "@/lib/supabaseClient";

export default async function PostPage({ params }) {
    const { slug } = await params;
    const { data, error } = await supabase
        .from("blogs")
        .select("title,content,cover_image,published_at,author_id")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error || !data) {
        return <div className="py-8">Post not found</div>;
    }

    // Fetch author details
    let author = null;
    if (data?.author_id) {
        const { data: authorData } = await supabase
            .from("authors")
            .select("name,profile_image")
            .eq("id", data.author_id)
            .single();
        author = authorData || null;
    }

    return (
        <article className="max-w-3xl mx-auto px-6 py-12 font-serif bg-white">
            <div className="mb-12">
                <h1 className="text-5xl font-normal leading-tight mb-8 text-gray-800">{data.title}</h1>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div>
                            <img src={author?.profile_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"} alt={author?.name || "Author"} className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-base font-medium text-gray-800">{author?.name || "Unknown"}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>3 min read</span>
                        <span>{new Date(data.published_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
            {/* Cover image if present */}
            {data.cover_image && (
                <div className="mb-10">
                    <img src={data.cover_image} alt={data.title} className="w-full h-80 object-cover rounded" />
                </div>
            )}
            <div className="text-xl leading-relaxed text-gray-800 mb-16">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            {/* Recommended Articles (unchanged) */}
            <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-medium m-0 mb-8 text-gray-800">Recommended from Vepaar Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* ...existing code for recommended articles... */}
                    <div className="flex flex-col gap-4">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" alt="AI Bubble" className="w-full h-50 object-cover rounded" />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" alt="Will Lockett" className="w-5 h-5 rounded-full object-cover" />
                                <span>Will Lockett</span>
                                <span className="text-green-600">✓</span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-800 m-0 leading-snug">The AI Bubble Is About To Burst, But The Next Bubble Is Already...</h4>
                            <p className="text-sm text-gray-500 m-0 leading-snug">Techbros are preparing their latest bandwagon.</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>⭐ Sep 15</span>
                                <span>👏 12.9K</span>
                                <span>💬 417</span>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">🔖</button>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">⋯</button>
                            </div>
                        </div>
                    </div>
                    {/* ...existing code for other recommended articles... */}
                    <div className="flex flex-col gap-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop" alt="Chat GPT" className="w-full h-50 object-cover rounded" />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" alt="Ossai" className="w-5 h-5 rounded-full object-cover" />
                                <span>In Long. Sweet. Valuable. by Ossai Chinedum</span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-800 m-0 leading-snug">I'll Instantly Know You Used Chat Gpt If I See This</h4>
                            <p className="text-sm text-gray-500 m-0 leading-snug">Trust me you're not as slick as you think</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>⭐ May 16</span>
                                <span>👏 25K</span>
                                <span>💬 1462</span>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">🔖</button>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">⋯</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=200&fit=crop" alt="Morning Habits" className="w-full h-50 object-cover rounded" />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=24&h=24&fit=crop&crop=face" alt="Utsuk" className="w-5 h-5 rounded-full object-cover" />
                                <span>In Write A Catalyst by Utsuk Agarwal</span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-800 m-0 leading-snug">The 10 Morning Habits That Quietly Make You Unstoppable</h4>
                            <p className="text-sm text-gray-500 m-0 leading-snug">Small changes that compound into extraordinary results</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>⭐ Aug 22</span>
                                <span>👏 18.4K</span>
                                <span>💬 892</span>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">🔖</button>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">⋯</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop" alt="Python Tool" className="w-full h-50 object-cover rounded" />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" alt="Suleman" className="w-5 h-5 rounded-full object-cover" />
                                <span>In Python in Plain English by Suleman Safdar</span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-800 m-0 leading-snug">The Python Tool I Built in a Weekend That Now Pays My Rent</h4>
                            <p className="text-sm text-gray-500 m-0 leading-snug">From side project to sustainable income in 6 months</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>⭐ Jul 8</span>
                                <span>👏 31.2K</span>
                                <span>💬 1.8K</span>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">🔖</button>
                                <button className="border-none cursor-pointer text-gray-500 p-1 rounded-full transition-all hover:bg-gray-100">⋯</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}