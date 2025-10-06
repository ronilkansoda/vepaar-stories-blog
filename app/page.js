import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Business & Financial Tips</h1>
        <p className="text-sm text-muted-foreground mt-2">Short, practical advice for entrepreneurs, founders and finance-aware professionals.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Latest</h2>
        <p className="mb-4">Read actionable guides and checklists to improve operations and personal/business finances.</p>
        <Link href="/blog" className="text-sm font-medium">Browse all posts →</Link>
      </section>

      <footer className="text-xs text-muted-foreground mt-12">Built with Next.js • Vepaar Stories</footer>
    </div>
  );
}
