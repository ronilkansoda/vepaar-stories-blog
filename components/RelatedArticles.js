import Link from "next/link";
import Image from "next/image";

export default function RelatedArticles({ articles, currentSlug }) {
  // Filter out current article
  const relatedArticles = articles.filter(article => article.slug !== currentSlug).slice(0, 4);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-gray-300 font-roboto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Posts:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.category}/${article.slug}`}
            className="group block"
          >
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-gray-900  transition-colors line-clamp-2 mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
