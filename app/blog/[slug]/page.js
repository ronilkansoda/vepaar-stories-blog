import { getPostBySlug } from "../../../lib/posts";

export default async function PostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return <div className="py-8">Post not found</div>;
  }

  return (
    <article className="blog-post-container bg-white">
      <div className="blog-post-header">
        <div className="member-badge">
          <span className="star-icon">⭐</span>
          <span>Member-only story</span>
        </div>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="author-section">
          <div className="author-info">
            <div className="author-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Author" />
            </div>
            <div className="author-details">
              <div className="author-name">Abhinav</div>
              <button className="follow-btn">Follow</button>
            </div>
          </div>

          <div className="post-meta">
            <span className="read-time">3 min read</span>
            <span className="post-date">{post.date}</span>
          </div>
        </div>

        <div className="social-actions">
          <div className="left-actions">
            <button className="action-btn">
              <span className="heart-icon">❤️</span>
              <span>6.7K</span>
            </button>
            <button className="action-btn">
              <span className="comment-icon">💬</span>
              <span>188</span>
            </button>
          </div>

          <div className="right-actions">
            <button className="action-btn">📖</button>
            <button className="action-btn">🔖</button>
            <button className="action-btn">🔗</button>
            <button className="action-btn">⚡</button>
            <button className="action-btn">⋯</button>
          </div>
        </div>
      </div>

      <div className="blog-post-content">
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <div className="comments-header">
          <h3>Responses (188)</h3>
          <button className="comments-settings">⚙️</button>
        </div>

        <div className="write-comment">
          <div className="comment-avatar">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="You" />
          </div>
          <div className="comment-input">
            <input type="text" placeholder="What are your thoughts?" />
          </div>
        </div>

        <div className="comments-list">
          <div className="comment-item">
            <div className="comment-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Andrés" />
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">Andrés</span>
                <span className="comment-date">Jun 26</span>
                <button className="comment-menu">⋯</button>
              </div>
              <div className="comment-text">
                You are right in everything, what a pity that you used the cheapest trick in the headline. I almost didn't read it thinking it was clickbait. There are so many "dead technologies" in Medium that I am afraid we are living a zombie technocalipse.
              </div>
              <div className="comment-actions">
                <button className="comment-action">
                  <span>👏</span>
                  <span>14K</span>
                </button>
                <button className="comment-action">
                  <span>💬</span>
                  <span>13 replies</span>
                </button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>

          <div className="comment-item">
            <div className="comment-avatar">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Kibambe" />
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">Kibambe NTAMBWE</span>
                <span className="comment-date">Jun 24</span>
                <button className="comment-menu">⋯</button>
              </div>
              <div className="comment-text">
                Great insights on the evolution of technology. The Docker example really resonates with current industry trends.
              </div>
              <div className="comment-actions">
                <button className="comment-action">
                  <span>👏</span>
                  <span>2.1K</span>
                </button>
                <button className="comment-action">
                  <span>💬</span>
                  <span>5 replies</span>
                </button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Articles */}
      <div className="recommended-section">
        <h3>Recommended from Medium</h3>
        <div className="recommended-grid">
          <div className="recommended-item">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" alt="AI Bubble" />
            <div className="recommended-content">
              <div className="recommended-author">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" alt="Will Lockett" />
                <span>Will Lockett</span>
                <span className="verified">✓</span>
              </div>
              <h4>The AI Bubble Is About To Burst, But The Next Bubble Is Already...</h4>
              <p>Techbros are preparing their latest bandwagon.</p>
              <div className="recommended-meta">
                <span>⭐ Sep 15</span>
                <span>👏 12.9K</span>
                <span>💬 417</span>
                <button className="bookmark">🔖</button>
                <button className="more">⋯</button>
              </div>
            </div>
          </div>

          <div className="recommended-item">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop" alt="Chat GPT" />
            <div className="recommended-content">
              <div className="recommended-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" alt="Ossai" />
                <span>In Long. Sweet. Valuable. by Ossai Chinedum</span>
              </div>
              <h4>I'll Instantly Know You Used Chat Gpt If I See This</h4>
              <p>Trust me you're not as slick as you think</p>
              <div className="recommended-meta">
                <span>⭐ May 16</span>
                <span>👏 25K</span>
                <span>💬 1462</span>
                <button className="bookmark">🔖</button>
                <button className="more">⋯</button>
              </div>
            </div>
          </div>

          <div className="recommended-item">
            <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=200&fit=crop" alt="Morning Habits" />
            <div className="recommended-content">
              <div className="recommended-author">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=24&h=24&fit=crop&crop=face" alt="Utsuk" />
                <span>In Write A Catalyst by Utsuk Agarwal</span>
              </div>
              <h4>The 10 Morning Habits That Quietly Make You Unstoppable</h4>
              <p>Small changes that compound into extraordinary results</p>
              <div className="recommended-meta">
                <span>⭐ Aug 22</span>
                <span>👏 18.4K</span>
                <span>💬 892</span>
                <button className="bookmark">🔖</button>
                <button className="more">⋯</button>
              </div>
            </div>
          </div>

          <div className="recommended-item">
            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop" alt="Python Tool" />
            <div className="recommended-content">
              <div className="recommended-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" alt="Suleman" />
                <span>In Python in Plain English by Suleman Safdar</span>
              </div>
              <h4>The Python Tool I Built in a Weekend That Now Pays My Rent</h4>
              <p>From side project to sustainable income in 6 months</p>
              <div className="recommended-meta">
                <span>⭐ Jul 8</span>
                <span>👏 31.2K</span>
                <span>💬 1.8K</span>
                <button className="bookmark">🔖</button>
                <button className="more">⋯</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
