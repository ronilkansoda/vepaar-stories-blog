import Link from "next/link";

const categories = [
  { name: "Business Stories", slug: "business_stories" },
  { name: "Financial Tips", slug: "financial_tips" },
  { name: "Leadership", slug: "leadership" },
  { name: "Entrepreneurship", slug: "entrepreneurship" },
  { name: "Productivity", slug: "productivity" },
  { name: "Personal Growth", slug: "personal_growth" },
];

export default function Header() {
  const currentTime = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className={"sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 backdrop-blur-sm"}>
      <div className="bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 md:py-5 px-3 md:px-5">
          {/* Left side - Date/Time (hidden on mobile) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-gray-600 text-sm font-medium">
              {currentTime}
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="font-extrabold text-red-600 text-2xl md:text-4xl tracking-tighter no-underline hover:text-red-700 transition-colors">VEPAAR STORIES</Link>
          </div>

          {/* Right side - Actions (hidden on mobile, visible on laptops/desktops) */}
          <div className="hidden lg:flex items-center gap-2 md:gap-3">
            <button className="border border-gray-900 bg-white text-gray-900 py-1.5 px-2.5 md:py-2 md:px-3.5 rounded text-sm md:text-base cursor-pointer transition-all hover:bg-gray-900 hover:text-white">Sign In</button>
          </div>
        </div>
      </div>

      {/* Navigation - Responsive */}
      <nav className="bg-white border-t border-gray-300">
        <div className="md:py-3 px-3 md:px-5">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-7 p-0 m-0 justify-center text-base">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/${cat.slug}`}
                  className="cursor-pointer text-gray-600 font-medium transition-colors hover:text-gray-900"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Navigation - hidden per request */}
          <div className="hidden relative -mx-3 px-3" aria-hidden="true">
            {/* optional label */}
            <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1 px-1">Categories</div>
            {/* edge fade hints */}
            <div aria-hidden className="pointer-events-none absolute left-0 top-7 h-9 w-6 bg-gradient-to-r from-white to-transparent"></div>
            <div aria-hidden className="pointer-events-none absolute right-0 top-7 h-9 w-6 bg-gradient-to-l from-white to-transparent"></div>
            <ul className="flex list-none gap-2 p-0 m-0 text-sm whitespace-nowrap overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
              {categories.map((cat) => (
                <li key={cat.slug} className="flex-shrink-0 snap-start">
                  <Link
                    href={`/${cat.slug}`}
                    className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-[13px] text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

