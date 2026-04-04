import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../components/SectionWrapper";
import { PandaMark } from "../components/PandaMark";
import { MemberCard } from "../components/MemberCard";
import { Button } from "../components/Button";
import { members } from "../data/team";

export function MembersPage() {
  return (
    <div className="pt-24 pb-[var(--spacing-section-y)]">
      <SectionWrapper
        id="members"
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <PandaMark />
            Roster
          </span>
        }
        title={
          <span className="inline-flex flex-wrap items-center gap-2">
            Members
            <PandaMark className="text-[0.5em] opacity-30" />
          </span>
        }
        subtitle="The students designing, building, driving, and telling our story—each with a clear role and real ownership."
      >
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Button to="/" variant="secondary">
            ← Back to home
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Want the full program story?{" "}
          <Link to="/#team" className="font-medium text-accent underline-offset-4 hover:underline">
            Read about the team
          </Link>
          {" · "}
          <Link to="/robot" className="font-medium text-accent underline-offset-4 hover:underline">
            Hardware &amp; software
          </Link>
        </p>
      </SectionWrapper>
    </div>
  );
}
