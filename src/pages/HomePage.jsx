import { HeroSection } from "../sections/HeroSection";
import { TeamSection } from "../sections/TeamSection";
import { EventsSection } from "../sections/EventsSection";
import { MediaSection } from "../sections/MediaSection";
import { VideosSection } from "../sections/VideosSection";
import { OutreachSection } from "../sections/OutreachSection";
import { SponsorsSection } from "../sections/SponsorsSection";
import { ContactSection } from "../sections/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <EventsSection />
      <MediaSection />
      <VideosSection />
      <OutreachSection />
      <SponsorsSection />
      <ContactSection />
    </>
  );
}
