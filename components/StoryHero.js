// StoryHero.js
import Link from "next/link";
export default function StoryHero({ story }) {
  return (
    <div className="mb-8">
      {story.map((item, idx) => (
        <Link key={idx} href={`/${item.category}/${item.slug}`}>
          <div className="w-full rounded-md overflow-hidden mb-5 bg-gray-100 aspect-[16/9]">
            <img
              src={`${item.image}`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="eyebrow mb-2 text-gray-700">{item.category}</div>
          <h1 className="heading-2 my-0 mb-4 text-gray-900">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
}
