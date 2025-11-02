// StoryHero.js
import Link from "next/link";
import Image from "next/image";

export default function StoryHero({ story }) {
  return (
    <div className="mb-8">
      {story.map((item, idx) => (
        <Link key={idx} href={`/${item.category}/${item.slug}`}>
          <div className="w-full rounded-md overflow-hidden mb-5 bg-gray-100 aspect-[16/9] relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover"
              priority={idx === 0}
            />
          </div>
          <div className="eyebrow mb-2 text-gray-700">{item.category
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}</div>
          <h1 className="heading-2 my-0 mb-4 text-gray-900">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
}
