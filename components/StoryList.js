// StoryList.js
import StoryCard from "./StoryCard";

export default function StoryList({ stories }) {
  return (
    <ul className="space-y-6">
      {stories.map((story) => (
        <li key={story.slug}>
          <StoryCard story={story} />
        </li>
      ))}
    </ul>
  );
}
