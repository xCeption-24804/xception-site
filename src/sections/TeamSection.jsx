import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { PandaMark } from "../components/PandaMark";
import { mission, teamStory, achievements, teamValues, members } from "../data/team";

export function TeamSection() {
  return (
    <SectionWrapper
      id="team"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <PandaMark />
          Team
        </span>
      }
      title={
        <span className="inline-flex flex-wrap items-center gap-2">
          ABOUT US
          <PandaMark className="text-[0.5em] opacity-30" />
        </span>
      }
      subtitle='"Machines may be made of steel and silicon, but the soul of robotics is in the creativity of its creators."'
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          className="glass-panel rounded-2xl p-[var(--spacing-card-pad)]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-white">
            <PandaMark className="opacity-35" />
            Mission
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/70">{mission}</p>
        </motion.div>
        <motion.div
          className="glass-panel rounded-2xl p-[var(--spacing-card-pad)]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-white">
            <PandaMark className="opacity-35" />
            Our story
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/70">{teamStory}</p>
        </motion.div>
      </div>

      <motion.div
        className="glass-panel mt-10 rounded-2xl p-[var(--spacing-card-pad)] md:mt-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-white">
          <PandaMark className="opacity-35" />
          Achievements
        </h3>
        <ul className="mt-6 space-y-4">
          {achievements.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-14 md:mt-16">
        <motion.h3
          className="mb-8 inline-flex items-center gap-2 font-display text-2xl font-bold text-white md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <PandaMark />
          Our values
        </motion.h3>
        <Grid cols={3} gap="md">
          {teamValues.map((v, i) => (
            <Card key={v.title} delay={i * 0.06}>
              <h4 className="font-display text-lg font-semibold text-white">{v.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{v.body}</p>
            </Card>
          ))}
        </Grid>
      </div>

      <motion.div
        className="glass-panel mt-14 flex flex-col items-center gap-5 rounded-2xl p-[var(--spacing-card-pad)] text-center md:mt-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h3 className="inline-flex items-center gap-2 font-display text-xl font-semibold text-white md:text-2xl">
          <PandaMark />
          Members
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
          {members.length} students across programming, engineering, drive, design, and PR.
        </p>
        <Button to="/members">View full roster</Button>
      </motion.div>
    </SectionWrapper>
  );
}
