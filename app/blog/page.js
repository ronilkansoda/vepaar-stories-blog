import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold mb-4">Business & Finance Tips</h1>
      <p className="text-sm text-muted-foreground mb-6">Practical posts to help you run and grow your business.</p>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="border p-4 rounded">
            <Link href={`/blog/${p.slug}`} className="text-xl font-medium">
              {p.title}
            </Link>
            <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
            <div className="text-xs text-gray-500 mt-2">{p.date} • {p.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
