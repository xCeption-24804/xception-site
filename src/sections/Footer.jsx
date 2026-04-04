import { Container } from "../components/Container";
import { navLinks, teamName } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">{teamName}</p>
          <p className="mt-1 max-w-sm text-sm text-white/55">
            #24804 | Astana
            <span className="ml-2 opacity-40" aria-hidden>
              🐼
            </span>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-white/40">© {year} {teamName}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
