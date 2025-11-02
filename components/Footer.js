import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12">

        {/* Brand Section - Full Width on All Screens */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="block mb-4">
            <h3 className="heading-hero tracking-tight text-gray-900">
              VEPAR STORIES
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            Your source for inspiring business stories, financial tips, and entrepreneurial insights to help you grow and succeed.
          </p>
        </div>

        {/* Links Grid - 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

          {/* Categories */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">Categories</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
              <li>
                <Link href="/business_stories" className="hover:text-gray-900 transition-colors">
                  Business Stories
                </Link>
              </li>
              <li>
                <Link href="/financial_tips" className="hover:text-gray-900 transition-colors">
                  Financial Tips
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-gray-900 transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/entrepreneurship" className="hover:text-gray-900 transition-colors">
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link href="/productivity" className="hover:text-gray-900 transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/personal_growth" className="hover:text-gray-900 transition-colors">
                  Personal Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
              <li>
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter/Social - Hidden on Mobile, Shows on Desktop as 3rd Column */}
          <div className="hidden lg:block col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest business insights and success stories delivered to your inbox.
            </p>
            <div className="flex gap-3 text-gray-600">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>&copy; {year} Vepar Stories. All rights reserved.</p>
            <p className="text-xs">
              Made with ❤️ for entrepreneurs and business leaders
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
