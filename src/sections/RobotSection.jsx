import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { robotHighlights } from "../data/site";

export function RobotSection() {
  return (
    <SectionWrapper
      id="robot"
      className="relative"
      eyebrow="Hardware & software"
      title="Robot systems designed for repeatability when it matters."
      subtitle="Every subsystem is built with match load, maintenance windows, and elimination pressure in mind."
    >
      <motion.div
        className="glass-panel mb-10 overflow-hidden rounded-2xl md:mb-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2">
          <div className="flex aspect-video items-center justify-center bg-black/30 md:aspect-auto md:min-h-[280px]">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80">Media slot</p>
              <p className="mt-2 text-sm text-white/50">Drop a season photo or reveal video here</p>
            </div>
          </div>
          <div className="flex flex-col justify-center border-t border-white/10 p-[var(--spacing-card-pad)] md:border-l md:border-t-0">
            <h3 className="font-display text-2xl font-bold text-white">Technical portfolio</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Judges and sponsors see the same story: CAD evolution, test logs, autonomous development
              notes, and a clear narrative from prototype to competition configuration.
            </p>
          </div>
        </div>
      </motion.div>

      <Grid cols={3} gap="md">
        {robotHighlights.map((r, i) => (
          <Card key={r.title} delay={i * 0.06}>
            <h3 className="font-display text-xl font-semibold text-white">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{r.body}</p>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
