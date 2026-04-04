import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RobotSection } from "../sections/RobotSection";
import { Button } from "../components/Button";

export function HardwarePage() {
  return (
    <div className="pt-24">
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-section-x)] pb-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <Button to="/" variant="secondary">
            ← Back to home
          </Button>
          <p className="text-sm text-white/55">
            People behind the build:{" "}
            <Link to="/members" className="font-medium text-accent underline-offset-4 hover:underline">
              Members
            </Link>
          </p>
        </motion.div>
      </div>
      <RobotSection />
    </div>
  );
}
