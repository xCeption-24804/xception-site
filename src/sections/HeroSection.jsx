import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { teamName, teamTagline, stats } from "../data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent-soft/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.p
              className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent/90"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {teamTagline}
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gradient">Engineering</span> <br /> the Future of Robotics
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {teamName} is an FTC team  <span className="text-gradient">#24804</span> from NIS ScM Astana-Nura building competitive robots, growing engineering talent, and expanding access to robotics across Kazakhstan. Our team combines technical ambition with real community impact through competitions, mentorship, outreach, and STEM initiatives.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <Button href="#sponsors">Partner with us</Button>
              <Button href="#robot" variant="secondary">
                See the robot
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="glass-panel relative overflow-hidden rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glow-line mb-8" />
            <ul className="space-y-8">
              {stats.map((s, i) => (
                <motion.li
                  key={s.label}
                  className="flex flex-col border-b border-white/10 pb-8 last:border-0 last:pb-0"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                >
                  <span className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</span>
                  <span className="mt-1 text-sm text-white/60">{s.label}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 text-right text-xs text-white/40" aria-hidden>
              <span className="opacity-70">xCeption</span> · 🐼
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
