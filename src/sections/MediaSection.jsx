import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { PandaMark } from "../components/PandaMark";
import { mediaItems } from "../data/media";

const tabs = [
  { id: "all", label: "All" },
  { id: "media", label: "Media" },
  { id: "social", label: "Social" },
];

export function MediaSection() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return mediaItems;
    return mediaItems.filter((m) => m.kind === filter);
  }, [filter]);

  return (
    <SectionWrapper
      id="media"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <PandaMark />
          Credibility
        </span>
      }
      title="Media is one of the ways we scale our impact beyond competitions."
      subtitle="We use content not only to document our journey, but to promote robotics, share resources, attract attention to STEM, and create value for future students and partners."
    >
      <div
        className="mb-10 flex flex-wrap gap-2 border-b border-white/10 pb-4"
        role="tablist"
        aria-label="Filter media"
      >
        {tabs.map((t) => {
          const active = filter === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "text-white" : "text-white/55 hover:text-white/85"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="media-tab"
                  className="absolute inset-0 rounded-full border border-accent/35 bg-accent/10 shadow-[0_0_24px_-6px_rgb(94_231_255/0.45)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, delay: i * 0.03 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group glass-panel block h-full rounded-2xl p-5 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-10px_rgb(94_231_255/0.35)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      item.kind === "media"
                        ? "border border-white/15 bg-white/5 text-white/70"
                        : "border border-accent/25 bg-accent/10 text-accent"
                    }`}
                  >
                    {item.kind === "media" ? "Media" : "Social"}
                  </span>
                  {item.date && <span className="text-xs text-white/40">{item.date}</span>}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/55">{item.source}</p>
                <p className="mt-4 text-sm font-medium text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-all group-hover:decoration-accent group-hover:text-white">
                  Open link →
                </p>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </SectionWrapper>
  );
}
