import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { contact } from "../data/site";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let’s build the next chapter together."
      subtitle="Reach out for sponsorship conversations, collaboration, or media inquiries. We respond quickly and professionally."
    >
      <motion.div
        className="glass-panel max-w-xl rounded-2xl p-[var(--spacing-card-pad)]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-sm font-medium text-white/50">Primary</p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-1 inline-block font-display text-2xl font-semibold text-accent transition-colors hover:text-white"
        >
          {contact.email}
        </a>
        <div className="glow-line my-8" />
        <p className="text-sm font-medium text-white/50">Social</p>
        <ul className="mt-3 flex flex-wrap gap-4">
          {contact.social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/75 underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
}
