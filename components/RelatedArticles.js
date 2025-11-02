import Link from "next/link";
import Image from "next/image";

export default function RelatedArticles({ articles, currentSlug }) {
  // Filter out current article
  const relatedArticles = articles.filter(article => article.slug !== currentSlug).slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.category}/${article.slug}`}
            className="group"
          >
            <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {article.description || article.title}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{article.reading_time}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.published_at).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
