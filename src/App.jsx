import { Header } from "./layouts/Header";
import { HeroSection } from "./sections/HeroSection";
import { TeamSection } from "./sections/TeamSection";
import { RobotSection } from "./sections/RobotSection";
import { EventsSection } from "./sections/EventsSection";
import { MediaSection } from "./sections/MediaSection";
import { VideosSection } from "./sections/VideosSection";
import { OutreachSection } from "./sections/OutreachSection";
import { SponsorsSection } from "./sections/SponsorsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <RobotSection />
        <EventsSection />
        <MediaSection />
        <VideosSection />
        <OutreachSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
