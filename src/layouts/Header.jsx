import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../components/Logo";
import { navLinks, teamName } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-[var(--spacing-section-x)] pt-4">
        <div className="glass-panel flex items-center justify-between gap-4 px-4 py-3 md:px-5">
          <a href="#" className="flex items-center gap-3 text-white transition-opacity hover:opacity-90">
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight">{teamName}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-4 rounded-full bg-white"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-white"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute left-0 top-3 h-0.5 w-4 rounded-full bg-white"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              className="glass-panel mt-2 overflow-hidden md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
