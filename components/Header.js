"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const categories = [
  { name: "Business Stories", slug: "business_stories" },
  { name: "Financial Tips", slug: "financial_tips" },
  { name: "Leadership", slug: "leadership" },
  { name: "Entrepreneurship", slug: "entrepreneurship" },
  { name: "Productivity", slug: "productivity" },
  { name: "Personal Growth", slug: "personal_growth" },
];

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-gray-300">
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

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="border border-gray-900 bg-white text-gray-900 py-1.5 px-2.5 md:py-2 md:px-3.5 rounded text-sm md:text-base cursor-pointer transition-all hover:bg-gray-900 hover:text-white">Sign In</button>
          </div>
        </div>
      </div>

      {/* Navigation - Responsive */}
      <nav className="bg-white border-t border-gray-300">
        <div className="py-2 md:py-3 px-3 md:px-5">
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
          {/* Mobile Navigation - Scrollable  */}
          <div className="md:hidden overflow-x-auto">
            <ul className="flex list-none justify-center gap-4 p-0 m-0 text-sm whitespace-nowrap">
              {categories.map((cat) => (
                <li key={cat.slug} className="flex-shrink-0">
                  <Link
                    href={`/${cat.slug}`}
                    className="cursor-pointer text-gray-600 font-medium transition-colors hover:text-gray-900"
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

