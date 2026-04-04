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
      title="See the program in motion—tournament energy and a sponsor-ready story."
      subtitle="The sponsor pitch is featured prominently. Tournament clips use muted hover previews so the page feels alive without hijacking audio."
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
