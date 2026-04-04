import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { PandaMark } from "../components/PandaMark";
import { events, getFeaturedEvent, getOtherEvents } from "../data/events";

const tagStyles = {
  Competition: "border-accent/35 bg-accent/10 text-accent",
  Outreach: "border-accent-soft/35 bg-accent-soft/10 text-accent-soft",
  Workshop: "border-violet-300/35 bg-violet-400/10 text-violet-200",
};

function EventTag({ tag }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tagStyles[tag]}`}
    >
      {tag}
    </span>
  );
}

export function EventsSection() {
  const featured = getFeaturedEvent(events);
  const rest = getOtherEvents(events);

  return (
    <SectionWrapper
      id="events"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <PandaMark />
          Events
        </span>
      }
      title="Where the program shows up—in competition and in the community."
      subtitle="A living calendar of builds, outreach, and workshops. The featured event anchors the season narrative; the grid captures momentum week to week."
    >
      <motion.article
        className="glass-panel relative overflow-hidden rounded-2xl md:flex"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative md:w-3/5">
          <img
            src={featured.image}
            alt=""
            className="aspect-video h-full w-full object-cover md:aspect-auto md:min-h-[320px]"
            loading="lazy"
          />
          <div className="absolute left-4 top-4">
            <EventTag tag={featured.tag} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center p-[var(--spacing-card-pad)]">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/85">Featured</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">{featured.title}</h3>
          <p className="mt-2 text-sm text-white/50">{featured.date}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{featured.description}</p>
        </div>
      </motion.article>

      <div className="relative mt-12 md:mt-16">
        <div
          className="pointer-events-none absolute left-[11px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/50 via-white/15 to-transparent md:block"
          aria-hidden
        />
        <ul className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
          {rest.map((ev, i) => (
            <motion.li
              key={ev.id}
              className="relative md:pl-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.42, delay: i * 0.05 }}
            >
              <span
                className="absolute left-0 top-8 hidden h-2 w-2 rounded-full border border-accent/60 bg-brand shadow-[0_0_12px_rgb(94_231_255/0.5)] md:block"
                aria-hidden
              />
              <div className="glass-panel overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <img src={ev.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-3 top-3">
                    <EventTag tag={ev.tag} />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-semibold text-white">{ev.title}</h4>
                  <p className="mt-1 text-xs text-white/50">{ev.date}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{ev.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
