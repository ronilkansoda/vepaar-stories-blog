export const posts = [
  {
    slug: "5-smart-business-habits",
    title: "5 Smart Business Habits for Long-Term Growth",
    date: "2025-10-07",
    category: "Business",
    excerpt:
      "Build resilient routines that scale: customer focus, regular financial reviews, delegation, data-informed decisions, and continuous learning.",
    content: `
## 5 Smart Business Habits for Long-Term Growth

1. Keep customer feedback front and center.
2. Review finances monthly — cash is king.
3. Delegate non-core tasks and document processes.
4. Use data to validate assumptions, not to replace judgement.
5. Invest in learning — for you and your team.
`
  },
  {
    slug: "simple-financial-checklist",
    title: "A Simple Financial Checklist for Entrepreneurs",
    date: "2025-10-07",
    category: "Finance",
    excerpt:
      "A straightforward checklist to keep your finances healthy: budget, emergency fund, tax planning, debt strategy, and investing basics.",
    content: `
## A Simple Financial Checklist for Entrepreneurs

- Create a monthly budget and track it.
- Build an emergency fund covering 3-6 months of expenses.
- Plan for taxes and separate tax savings.
- Prioritize high-interest debt repayment.
- Start automated investing — set it and review annually.
`
  }
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
