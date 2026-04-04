/**
 * Preview clips use short CC0 samples for reliable hover autoplay in demos.
 * Replace `previewSrc` with your own MP4s or posters + YouTube links.
 */
import video1Poster from "../assets/video1_poster.png";
import video1Preview from "../assets/video1_preview.mp4";
import video2Poster from "../assets/video2_poster.png"
import video2Preview from "../assets/video2_preview.mp4";
import video3Poster from "../assets/video3_poster.png";

export const videos = [
  {
    id: "v-pitch",
    title: "Sponsor pitch",
    subtitle: "Sponsorhip",
    href: "https://www.youtube.com/watch?v=l6To89OsOD4",
    poster: video1Poster,
    previewSrc: video1Preview,
    highlighted: true,
  },
  {
    id: "v1",
    title: "Trailer | FTC Team 24804 - xCeption | DECODE",
    subtitle: "TRAILER",
    href: "https://www.youtube.com/watch?v=73KSPIuYwII",
    poster: video2Poster,
    previewSrc: video2Preview,
  },
  {
    id: "v2",
    title: "CENTRAL ASIA FIRST CHAMPIONSHIP 2026",
    subtitle: "Tournament",
    href: "https://www.youtube.com/watch?v=wbAPxGO-cYY",
    poster: video3Poster,
  },
];
