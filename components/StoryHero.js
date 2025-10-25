// StoryHero.js
import Link from "next/link";
export default function StoryHero({ story }) {
  return (
    <div className="mb-8">
      {story.map((item, idx) => (
        <Link key={idx} href={`/${item.category}/${item.slug}`}>
          <img
           src={`https://ogwaodgxdsnxjjkfmujm.supabase.co/storage/v1/object/public/cover_images/${item.image}`}
            alt={item.title}
            className="w-full h-74 object-cover rounded-md mb-5"
          />
          <div className="eyebrow mb-2 text-gray-700">{item.category}</div>
          <h1 className="heading-2 my-0 mb-4 text-gray-900">{item.title}</h1>
          <p className="text-gray-600 body-lg mb-5">{item.content}</p>
          {/* <div className="font-bold text-gray-900">{story.author || "Author"}</div> */}
        </Link>
      ))}
    </div>
  );
}
