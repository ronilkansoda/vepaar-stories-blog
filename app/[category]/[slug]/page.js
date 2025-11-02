import React from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";

const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");


export async function generateMetadata({ params }) {
    const { slug, category } = params;
    const { data, error } = await supabase
        .from("blogs")
        .select("title,description,category,cover_image,published_at,updated_at,author_id,reading_time")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error || !data) {
        return {
            title: "Post Not Found",
            description: "The requested post could not be found.",
        };
    }

    // Fetch author info
    let authorName = "Vepar Stories Team";
    if (data?.author_id) {
        const { data: authorData } = await supabase
            .from("authors")
            .select("name")
            .eq("id", data.author_id)
            .single();
        if (authorData) authorName = authorData.name;
    }

    const metaDescription = data.description 
        ? data.description.slice(0, 160) 
        : data.title.slice(0, 160);

    return {
        title: data.title,
        description: metaDescription,
        keywords: [
            data.title,
            "Vepar Stories",
            "Business tips",
            "Finance advice",
            "Startup guide",
            "Entrepreneurship",
            data.category.replace(/_/g, " "),
        ],
        authors: [{ name: authorName }],
        creator: authorName,
        publisher: "Vepar Stories",
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: `${BASE_URL}/${data.category}/${slug}`,
        },
        openGraph: {
            title: data.title,
            description: metaDescription,
            url: `${BASE_URL}/${data.category}/${slug}`,
            siteName: "Vepar Stories",
            locale: "en_US",
            type: "article",
            publishedTime: data.published_at,
            modifiedTime: data.updated_at || data.published_at,
            authors: [authorName],
            images: [
                {
                    url: data.cover_image || `${BASE_URL}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: metaDescription,
            creator: "@veparstories",
            images: [data.cover_image || `${BASE_URL}/og-image.jpg`],
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

export default async function PostPage({ params }) {
    const { slug, category } = params;
    const { data, error } = await supabase
        .from("blogs")
        .select("title,content,cover_image,published_at,author_id,reading_time,updated_at,description")
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

    // Fetch related articles from same category
    const { data: relatedArticles } = await supabase
        .from("blogs")
        .select("slug,title,cover_image,category,description,reading_time,published_at")
        .eq("category", category)
        .eq("status", "published")
        .neq("slug", slug)
        .limit(3);

    // JSON-LD Structured Data for Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description || data.title,
        image: data.cover_image || `${BASE_URL}/og-image.jpg`,
        datePublished: data.published_at,
        dateModified: data.updated_at || data.published_at,
        author: {
            "@type": "Person",
            name: author?.name || "Vepar Stories Team",
            image: author?.profile_image 
                ? `https://ogwaodgxdsnxjjkfmujm.supabase.co/storage/v1/object/public/profile_images/${author.profile_image}`
                : undefined,
        },
        publisher: {
            "@type": "Organization",
            name: "Vepar Stories",
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/${category}/${slug}`,
        },
    };

    // Breadcrumb JSON-LD
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
                item: `${BASE_URL}/${category}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: data.title,
                item: `${BASE_URL}/${category}/${slug}`,
            },
        ],
    };

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <article className="max-w-3xl mx-auto px-1 py-6 sm:px-6 sm:py-10 font-serif">
            {/* Breadcrumbs */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    {
                        label: category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
                        href: `/${category}`,
                    },
                    { label: data.title },
                ]}
            />
            <div className="mb-8 sm:mb-12">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-gray-900 font-roboto">{data.title}</h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-3 sm:gap-0 mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden">
                            <Image
                                src={`https://ogwaodgxdsnxjjkfmujm.supabase.co/storage/v1/object/public/profile_images/${author?.profile_image}`}
                                alt={author?.name || "Author"}
                                fill
                                sizes="40px"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-base font-medium text-gray-800">{author?.name || "Unknown"}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 text-gray-500 text-sm mt-1 sm:mt-0">
                        <span>{data.reading_time} read</span>
                        <span className="sm:hidden">•</span>
                        <span>{new Date(data.published_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
            {/* Cover image if present */}
            {data.cover_image && (
                <div className="mb-10 relative w-full h-80 rounded overflow-hidden">
                    <Image
                        src={data.cover_image}
                        alt={data.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            <div className="text-[16px] leading-relaxed text-gray-800 mb-14 sm:text-[18px] sm:mb-16">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>

            {/* Related Articles */}
            {relatedArticles && relatedArticles.length > 0 && (
                <RelatedArticles articles={relatedArticles} currentSlug={slug} />
            )}
        </article>
        </>
    );
}