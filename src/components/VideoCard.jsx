import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoCard({ video, highlighted = false, index = 0 }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !video.previewSrc) return;
    if (hover) {
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
    } else {
      el.pause();
      try {
        el.currentTime = 0;
      } catch {
        /* seek unsupported */
      }
    }
  }, [hover, video.previewSrc]);

  return (
    <motion.a
      href={video.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-black/30 ${
        highlighted
          ? "ring-1 ring-accent/35 shadow-[0_0_48px_-12px_rgb(94_231_255/0.45)] md:col-span-2"
          : ""
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
      whileHover={{ y: -3 }}
    >
      <div className={`relative ${highlighted ? "aspect-video md:aspect-[21/9]" : "aspect-video"}`}>
        {video.previewSrc ? (
          <video
            ref={ref}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            src={video.previewSrc}
            poster={video.poster}
            muted
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <img
            src={video.poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/35 to-transparent" />
        {highlighted && (
          <span className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Featured
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-accent/85">{video.subtitle}</p>
          <h3 className="mt-1 font-display text-lg font-bold text-white md:text-xl">{video.title}</h3>
          <p className="mt-2 text-sm text-white/65 underline decoration-accent/40 underline-offset-4 transition-colors group-hover:text-white group-hover:decoration-accent">
            Watch →
          </p>
        </div>
      </div>
    </motion.a>
  );
}
