import { SectionWrapper } from "../components/SectionWrapper";
import { PandaMark } from "../components/PandaMark";
import { VideoCard } from "../components/VideoCard";
import { videos } from "../data/videos";

export function VideosSection() {
  const highlighted = videos.filter((v) => v.highlighted);
  const rest = videos.filter((v) => !v.highlighted);

  return (
    <SectionWrapper
      id="videos"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <PandaMark />
          Video
        </span>
      }
      title="Videos about us."
      subtitle=""
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {highlighted.map((v, i) => (
          <VideoCard key={v.id} video={v} highlighted index={i} />
        ))}
        {rest.map((v, i) => (
          <VideoCard key={v.id} video={v} index={i + highlighted.length} />
        ))}
      </div>
    </SectionWrapper>
  );
}
