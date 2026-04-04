import { motion } from "framer-motion";

export function Card({ className = "", children, delay = 0, ...props }) {
  return (
    <motion.article
      className={`glass-panel p-[var(--spacing-card-pad)] ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
