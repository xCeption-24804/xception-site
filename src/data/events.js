/** @typedef {'Competition' | 'Outreach' | 'Workshop'} EventTag */

/** @type {{ id: string; title: string; date: string; description: string; image: string; tag: EventTag; featured?: boolean }[]} */
export const events = [
  {
    id: "e1",
    title: "Regional Championship Weekend",
    date: "March 2026",
    description:
      "Full-pit execution: autonomous tuning between matches, scout sync, and alliance selection prep with clean data.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=675&fit=crop",
    tag: "Competition",
    featured: true,
  },
  {
    id: "e2",
    title: "STEM Night Demo",
    date: "February 2026",
    description:
      "Interactive robot demo, CAD walkthrough station, and student Q&A with a focus on accessible explanations.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
    tag: "Outreach",
  },
  {
    id: "e3",
    title: "CAD Workshop Series",
    date: "January 2026",
    description:
      "Three-part workshop: sketches to assemblies, design intent, and exporting for manufacture.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
    tag: "Workshop",
  },
  {
    id: "e4",
    title: "League Meet · Qualifier Block",
    date: "December 2025",
    description:
      "Cycle consistency improvements, pit checklist hardening, and post-match video review.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    tag: "Competition",
  },
  {
    id: "e5",
    title: "Mentor & Rookie Onboarding Lab",
    date: "November 2025",
    description:
      "Structured onboarding: safety, tools, Git workflow, and a first-week build task with review.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    tag: "Workshop",
  },
];

export function getFeaturedEvent(list) {
  return list.find((e) => e.featured) ?? list[0];
}

export function getOtherEvents(list) {
  const featured = getFeaturedEvent(list);
  return list.filter((e) => e.id !== featured.id);
}
