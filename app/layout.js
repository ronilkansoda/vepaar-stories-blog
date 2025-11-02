import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import Quill Snow theme globally to satisfy Next.js global CSS rules
import "react-quill-new/dist/quill.snow.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import Quill Snow theme globally to satisfy Next.js global CSS rules
import "react-quill-new/dist/quill.snow.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Normalize base URL from environment
const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

export const metadata = {
  title: {
    default: "Vepar Stories — Stories about Business & Finance Tips",
    template: "%s | Vepar Stories",
  },
  description:
    "Short, practical business and financial tips to help entrepreneurs and professionals.",
  metadataBase: new URL(BASE_URL),
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  // Organization JSON-LD structured data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vepar Stories",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Business & Finance Tips for Entrepreneurs — Practical advice and insights to grow your business.",
    sameAs: [
      "https://twitter.com/veparstories",
      "https://www.linkedin.com/company/veparstories",
      "https://www.facebook.com/veparstories",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: `contact@${BASE_URL.replace(/^https?:\/\//, "")}`,
    },
  };

  // Website JSON-LD
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vepar Stories",
    url: BASE_URL,
    description: "Business & Finance Tips for Entrepreneurs",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Vepar Stories RSS Feed"
          href={`${BASE_URL}/rss.xml`}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="max-w-5xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
