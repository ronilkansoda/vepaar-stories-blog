# Vepar Stories Blog

A Next.js App Router blog powered by Supabase with comprehensive SEO (metadata, JSON-LD, sitemap, RSS, robots) and image optimization.

## Deploying to Production

1. Configure environment variables:
	- In production hosting (e.g., Vercel), set:
	  - NEXT_PUBLIC_BASE_URL=https://veparstories.com
	  - NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
	  - NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
	- Optionally create a `.env.production` locally (already added here as a template) and never commit secrets.

2. Verify SEO endpoints on your domain:
	- Robots: https://veparstories.com/robots.txt
	- Sitemap: https://veparstories.com/sitemap.xml
	- RSS: https://veparstories.com/rss.xml

3. Post-deploy checks:
	- View Source on a few pages and confirm canonical, OpenGraph, and Twitter tags use the veparstories.com domain.
	- Test structured data in Google Rich Results Test.
	- Submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Development

- Copy `.env.example` to `.env.local` and fill values for local development.
- Start the dev server and visit http://localhost:3000.

## Notes

- Base URL is normalized internally to avoid trailing slash issues.
- Dynamic routes exist for sitemap, robots, and RSS.
- Images are served via Next.js Image; ensure all external domains used by images are whitelisted in `next.config.mjs`.

For a full overview of the SEO work and how to use it, see `SEO_IMPLEMENTATION.md` and `IMPLEMENTATION_SUMMARY.md`.