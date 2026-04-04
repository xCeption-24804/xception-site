import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const variants = {
  primary:
    "border border-accent/40 bg-accent/15 text-white shadow-glow-sm hover:border-accent/60 hover:bg-accent/25 hover:shadow-glow",
  secondary:
    "border border-white/25 bg-transparent text-white hover:border-accent/50 hover:bg-white/5 hover:text-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  to,
  type = "button",
  ...motionProps
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-[box-shadow,background-color,border-color,color,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const combined = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={combined}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combined}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
