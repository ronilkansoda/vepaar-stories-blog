import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-black/[.06] dark:border-white/[.08] py-4 mb-6">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Vepaar Stories
        </Link>
        <nav className="flex gap-4">
          <Link href="/blog" className="text-sm">
            Blog
          </Link>
          <a
            href="#contact"
            className="text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
