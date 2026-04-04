import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { PandaMark } from "../components/PandaMark";
import { MemberCard } from "../components/MemberCard";
import { mission, teamStory, achievements, teamValues, members } from "../data/team";

const INITIAL_MEMBERS = 3;

export function TeamSection() {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const hasMoreMembers = members.length > INITIAL_MEMBERS;
  const visibleMembers = showAllMembers ? members : members.slice(0, INITIAL_MEMBERS);

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

      <div className="mt-14 md:mt-16">
        <motion.h3
          className="mb-8 inline-flex items-center gap-2 font-display text-2xl font-bold text-white md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <PandaMark />
          Members
        </motion.h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMembers.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} />
          ))}
        </div>
        {hasMoreMembers && (
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowAllMembers((v) => !v)}
              aria-expanded={showAllMembers}
            >
              {showAllMembers ? "Show fewer" : `Show all members (${members.length})`}
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
