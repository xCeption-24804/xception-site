import sparkMind from '../assets/sparkmind.jpg'
import ladies from '../assets/ladies.jpg'
import sixGraders from '../assets/6graders.png'

/** @typedef {'Competition' | 'Outreach' | 'Workshop'} EventTag */

/** @type {{ id: string; title: string; date: string; description: string; image: string; tag: EventTag; featured?: boolean }[]} */
export const events = [
  {
    id: "e1",
    title: "FIRST® Championship",
    date: "April 29 - May 2, 2026",
    description:
      "The 2026 FIRST Championship is the culminating global robotics event of the 2025–2026 season,  at the George R. Brown Convention Center in Houston, Texas. It brings together top student teams from around the world to compete and celebrate STEM innovation.",
    image: "https://community.firstinspires.org/hubfs/blog/frc/2026-first-championship-updates.jpg",
    tag: "Competition",
    featured: true,
  },
  {
    id: "e2",
    title: "2026 Kazakhstan Central Asia Championship",
    date: "February 2026",
    description:
      "The Central Asia Championship was the premier regional robotics competition for students (grades 7–12), held as the centerpiece of the Alem Tech Fest in Astana",
    image: "https://www.nis.edu.kz/storage/news_gallery/01KHJXXJAWEW8GV8AGHHE72A3R.webp",
    tag: "Competition",
  },
  {
    id: "e3",
    title: "SPARKMIND HACKATON",
    date: "January 2026",
    description:
      "Three-part workshop: sketches to assemblies, design intent, and exporting for manufacture.",
    image: sparkMind,
    tag: "Workshop",
  },
  {
    id: "e4",
    title: "LADIES FIRST REGIONAL 2026",
    date: "January 2026",
    description:
      "First Winning Aliance Captain. We have qualified for the Central Asia Championship.",
    image: ladies,
    tag: "Competition",
  },
  {
    id: "e5",
    title: " Excursions for 6th graders",
    date: "February 2026",
    description:
      "Hosted a lab tour for 6th-grade students to showcase our development cycle. We demonstrated robot design, assembly, and testing processes to spark interest in engineering and recruit future innovators.",
    image: sixGraders,
    tag: "Inspire",
  },
];

export function getFeaturedEvent(list) {
  return list.find((e) => e.featured) ?? list[0];
}

export function getOtherEvents(list) {
  const featured = getFeaturedEvent(list);
  return list.filter((e) => e.id !== featured.id);
}
