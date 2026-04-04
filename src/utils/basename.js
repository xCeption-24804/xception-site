/** Vite `base` is exposed as `import.meta.env.BASE_URL` (usually `/` or `./` or `/repo/`). */
export function getRouterBasename() {
  const base = import.meta.env.BASE_URL ?? "/";
  if (base === "/" || base === "./") return undefined;
  const trimmed = base.replace(/\/$/, "");
  return trimmed || undefined;
}
