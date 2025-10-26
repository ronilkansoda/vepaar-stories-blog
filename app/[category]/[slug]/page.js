import React from "react";
import { supabase } from "@/lib/supabaseClient";
// import UploadTester from "./UploadTester";

export default async function PostPage({ params }) {
    const { slug } = params;
    const { data, error } = await supabase
        .from("blogs")
        .select("title,content,cover_image,published_at,author_id,reading_time")
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
        <article className="max-w-3xl mx-auto px-1 py-6 sm:px-6 sm:py-12 font-serif">
            {/* <UploadTester /> */}
            <div className="mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-5xl font-normal leading-tight mb-4 sm:mb-8 text-gray-800">{data.title}</h1>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div>
                            <img src={`https://ogwaodgxdsnxjjkfmujm.supabase.co/storage/v1/object/public/profile_images/${author?.profile_image}`} alt={author?.name || "Author"} className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-base font-medium text-gray-800">{author?.name || "Unknown"}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>{data.reading_time} read</span>
                        <span>{new Date(data.published_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
            {/* Cover image if present */}
            {data.cover_image && (
                <div className="mb-10">
                    <img src={`${data.cover_image}`} alt={data.title} className="w-full h-80 object-cover rounded" />
                </div>
            )}
            <div className="text-xl leading-relaxed text-gray-800 mb-14  sm:mb-16">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </article>
    );
}