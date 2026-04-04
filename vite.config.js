import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Use `./` so the built site works on GitHub Pages project sites (any repo name).
// Override with VITE_BASE_PATH if you use a custom domain at root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH ?? "./",
});
