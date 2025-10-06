import { getPostBySlug } from "../../../lib/posts";

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div className="py-8">Post not found</div>;
  }

  return (
    <article className="py-8">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{post.date} • {post.category}</div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
    </article>
  );
}
