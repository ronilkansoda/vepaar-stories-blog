# SEO Quick Reference Guide

## 🎯 Most Important Tasks

### When Publishing New Articles:
1. ✅ Write compelling title (50-60 characters)
2. ✅ Write meta description (150-160 characters)
3. ✅ Use target keywords naturally
4. ✅ Add descriptive alt text to images
5. ✅ Set proper category
6. ✅ Add cover image (optimal: 1200x630px)
7. ✅ Fill in author information

### Weekly Tasks:
- Check Google Search Console for errors
- Monitor keyword rankings
- Review analytics for top-performing content
- Fix any broken links
- Update old content with fresh information

### Monthly Tasks:
- Analyze Core Web Vitals
- Review backlink profile
- Update internal linking strategy
- Check for duplicate content
- Audit site speed

---

## 📊 Key SEO Features Already Implemented

### ✅ Automatic Features (No Action Needed):
- **Sitemap**: Auto-updates at `/sitemap.xml`
- **RSS Feed**: Auto-updates at `/rss.xml`
- **Structured Data**: Automatically added to all pages
- **Image Optimization**: Next.js handles automatically
- **Canonical URLs**: Generated for every page
- **Meta Tags**: Pulled from database
- **Breadcrumbs**: Auto-generated on article pages

---

## 🔧 Common SEO Tasks

### Adding a New Blog Post (SEO Checklist):
```
✓ Title is descriptive and includes keywords
✓ Slug is clean and keyword-rich
✓ Description is 150-160 chars
✓ Category is appropriate
✓ Cover image is high quality
✓ Content is well-formatted with headings
✓ Internal links to related articles
✓ External links (if any) open in new tab
✓ Reading time is calculated
✓ Status set to "published"
```

### Optimizing an Existing Post:
1. Check current rankings in Search Console
2. Add missing keywords to content naturally
3. Update meta description if CTR is low
4. Add/update images with proper alt text
5. Add internal links to newer related content
6. Update publish date if significantly changed
7. Ensure mobile-friendliness

### Category Page Optimization:
- Each category has unique description ✅
- Categories show latest articles ✅
- Category names are SEO-friendly
- Consider: Add category descriptions/intros

---

## 🚨 Red Flags to Watch For

### Things That Will Hurt SEO:
- ❌ Duplicate content
- ❌ Thin content (< 300 words)
- ❌ Broken links
- ❌ Missing images
- ❌ Slow page load (> 3 seconds)
- ❌ Not mobile-friendly
- ❌ Missing meta descriptions
- ❌ Keyword stuffing
- ❌ 404 errors

### Monitor These:
- Bounce rate (should be < 70%)
- Average session duration (higher is better)
- Pages per session (aim for 2+)
- Core Web Vitals (all should be "Good")

---

## 📈 Growth Strategy

### Content Strategy:
1. **Keyword Research**: Target long-tail keywords
2. **Content Calendar**: Publish consistently (2-3x/week)
3. **Update Old Content**: Refresh every 6 months
4. **Pillar Content**: Create comprehensive guides
5. **Topic Clusters**: Link related articles together

### Link Building:
1. Internal linking: Link 3-5 related articles in each post
2. Guest posting: Write for other blogs in your niche
3. Resource pages: Create linkable content
4. Social sharing: Promote on all platforms
5. Partnerships: Collaborate with other sites

### Technical Optimization:
1. Monitor Core Web Vitals monthly
2. Optimize images (already done with Next.js) ✅
3. Minify CSS/JS (Next.js handles) ✅
4. Enable caching
5. Use CDN for static assets

---

## 🎨 Content Best Practices

### Title Optimization:
- Include primary keyword near the beginning
- Keep under 60 characters
- Make it compelling and clickable
- Use power words (Guide, Tips, How-to, etc.)
- Example: "10 Financial Tips for Startup Founders in 2025"

### Meta Description:
- Include primary keyword
- Make it actionable
- Use 150-160 characters
- Include a call-to-action
- Example: "Learn 10 proven financial tips that helped 100+ startup founders grow their businesses. Get expert advice on budgeting, fundraising, and more."

### Content Structure:
```
1. Compelling headline (H1)
2. Introduction (200-300 words)
3. Table of contents (if > 1500 words)
4. Main content with H2/H3 headings
5. Conclusion with CTA
6. Related articles (auto-added) ✅
```

### Heading Hierarchy:
- H1: Only one per page (article title) ✅
- H2: Main sections
- H3: Subsections
- Don't skip levels (H1 → H3)

---

## 🔍 Tools & Resources

### Free SEO Tools:
1. **Google Search Console** - Essential for monitoring
2. **Google Analytics** - Track user behavior
3. **PageSpeed Insights** - Check speed scores
4. **Google Rich Results Test** - Validate structured data
5. **Ahrefs Webmaster Tools** - Free backlink checker

### Paid Tools (Recommended):
1. **Ahrefs** ($99/mo) - Best for keyword research
2. **SEMrush** ($119/mo) - All-in-one SEO tool
3. **Surfer SEO** ($59/mo) - Content optimization

### Browser Extensions:
1. SEO Meta in 1 Click
2. MozBar
3. Lighthouse (built into Chrome DevTools)
4. Detailed SEO Extension

---

## 📱 Mobile SEO Checklist

✅ Responsive design (Tailwind handles this)
✅ Fast mobile load time
✅ Touch-friendly buttons/links
✅ Readable text without zooming
✅ No horizontal scrolling
✅ Mobile-optimized images

---

## 🎯 Quick Win Checklist

### Before Launching New Content:
- [ ] Title is compelling and keyword-rich
- [ ] Meta description is written
- [ ] URL slug is clean
- [ ] Images have alt text
- [ ] Content is > 500 words
- [ ] 3-5 internal links added
- [ ] Headings use proper hierarchy
- [ ] Mobile preview looks good
- [ ] Spell check completed
- [ ] Call-to-action included

### After Publishing:
- [ ] Submit URL to Google Search Console
- [ ] Share on social media
- [ ] Add to email newsletter
- [ ] Monitor initial performance (24-48 hours)
- [ ] Check for indexing in Google (site:yoururl.com)

---

## 💡 Pro Tips

1. **Long-form content ranks better**: Aim for 1500+ words for pillar content
2. **Update dates matter**: Refresh content = better rankings
3. **Featured images**: Use 1200x630px for best social sharing
4. **Internal linking**: Link 3-5 related articles in each post
5. **User intent**: Write for humans first, search engines second
6. **E-A-T**: Demonstrate Expertise, Authority, Trust
7. **Schema markup**: Already implemented, validates regularly ✅
8. **Site speed**: Every second counts (< 3 sec ideal)
9. **Mobile-first**: Google indexes mobile version first
10. **Consistency**: Publish regularly, don't go dark for weeks

---

## 🆘 Troubleshooting

### "My page isn't ranking"
1. Check if indexed (site:yoururl.com in Google)
2. Wait 2-4 weeks for new content
3. Build backlinks to the page
4. Optimize on-page SEO
5. Check for technical errors

### "Traffic is dropping"
1. Check Search Console for errors
2. Look for algorithm updates
3. Analyze competitor changes
4. Review Core Web Vitals
5. Check for broken links

### "Images not loading"
1. Verify Supabase connection
2. Check image URLs in database
3. Ensure public access on storage
4. Clear Next.js cache: `rm -rf .next`

---

## 📞 Need Help?

### Resources:
- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog

### When to Hire an SEO Expert:
- Traffic plateau after 6 months
- Algorithm penalty (traffic drops 50%+)
- Technical SEO issues beyond your expertise
- Competitive analysis and strategy
- Link building campaigns

---

**Remember**: SEO is a marathon, not a sprint. Results take 3-6 months. Stay consistent! 🚀
