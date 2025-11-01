import StoryHero from "./StoryHero";
import StorySidebar from "./StorySidebar";

export default function FeaturedSection({ hero = [], sidebar = [], flip = false }) {
  // Keep identical stacking on mobile. Flip columns only on desktop.
  if (!hero?.length && !sidebar?.length) return null;

  if (flip) {
    return (
      <main className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 mt-6 md:mt-10 items-start">
        <div className="order-1 lg:col-start-2 lg:row-start-1">
          <StoryHero story={hero} />
        </div>
        <div className="order-2 lg:col-start-1 lg:row-start-1">
          <StorySidebar items={sidebar} />
        </div>
      </main>
    );
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 mt-6 md:mt-8 items-start">
      <div className="order-1">
        <StoryHero story={hero} />
      </div>
      <div className="order-2">
        <StorySidebar items={sidebar} />
      </div>
    </main>
  );
}
