/** Subtle mascot accent for headings—keep low contrast so it stays professional. */
export function PandaMark({ className = "" }) {
  return (
    <span
      className={`inline-block translate-y-[-0.05em] text-[0.7em] opacity-[0.38] grayscale ${className}`}
      aria-hidden
    >
      🐼
    </span>
  );
}
