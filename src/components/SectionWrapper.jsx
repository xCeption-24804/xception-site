import { motion } from "framer-motion";
import { Container } from "./Container";

export function SectionWrapper({
  id,
  className = "",
  containerClassName = "",
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-[var(--spacing-section-y)] ${className}`}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || subtitle) && (
          <motion.header
            className="mb-10 max-w-2xl md:mb-14"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent/90">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{subtitle}</p>
            )}
          </motion.header>
        )}
        {children}
      </Container>
    </section>
  );
}
