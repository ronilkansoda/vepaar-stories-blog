// StoryCard.js
import Link from "next/link";
import Image from "next/image";

export default function StoryCard({ story }) {
  return (
    <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden">
      <Link href={`/${story.category}/story/${story.slug}`} className="flex gap-5 p-5 items-start group">
        <div className="w-32 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 relative">
          <Image
            src={`https://ogwaodgxdsnxjjkfmujm.supabase.co/storage/v1/object/public/cover_images/${story.image}`}
            alt={story.title}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
            {story.title}
          </h2>
          <p className="text-base text-gray-700 mt-2 leading-relaxed line-clamp-2">{story.excerpt}</p>
          <div className="text-sm text-gray-500 mt-3 flex items-center gap-2">
            <span>{story.date}</span>
            <span>•</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">{story.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
