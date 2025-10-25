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
  const [hasScrolled, setHasScrolled] = useState(false); // controls shadow on sticky nav
  const [showTopBar, setShowTopBar] = useState(true); // controls visibility of top logo/date section

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
      setCurrentTime(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Smooth, flicker-free scroll handling using rAF + hysteresis
    const HIDE_AFTER = 120; // hide top bar after scrolling past this
    const SHOW_BEFORE = 40; // show top bar only when near top again

    let lastY = 0;
    let ticking = false;

    const updateOnScroll = () => {
      // Shadow for the sticky nav
      setHasScrolled(lastY > 10);

      // Hysteresis: avoid rapid toggling around a single threshold
      setShowTopBar(prev => {
        if (prev) {
          // currently visible; only hide when clearly past HIDE_AFTER
          if (lastY > HIDE_AFTER) return false;
          return prev;
        } else {
          // currently hidden; only show again when clearly above top
          if (lastY < SHOW_BEFORE) return true;
          return prev;
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      lastY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    };

    // Initialize with current position and attach listener
    lastY = typeof window !== 'undefined' ? window.scrollY || 0 : 0;
    updateOnScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''
      }`}>
      <div className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
        showTopBar ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
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
                    className="cursor-pointer text-[14px] text-gray-600 font-medium transition-colors hover:text-gray-900"
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

