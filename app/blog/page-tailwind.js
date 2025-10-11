import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Business & Finance Tips</h1>
      <p className="text-lg text-gray-600 mb-8">Practical posts to help you run and grow your business.</p>
      <ul className="space-y-8">
        {posts.map((p) => (
          <li key={p.slug} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
            <Link href={`/blog/${p.slug}`} className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {p.title}
            </Link>
            <p className="text-base text-gray-700 mt-3 leading-relaxed">{p.excerpt}</p>
            <div className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <span>{p.date}</span>
              <span>•</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">{p.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}