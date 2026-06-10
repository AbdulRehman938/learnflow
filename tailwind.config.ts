import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./store/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Base Dark Layers ───────────────────────────────────────────
        "bg-0":      "#070A0F",
        "bg-1":      "#0B1220",
        "surface-1": "#111827",
        "surface-2": "#1F2937",
        "surface-3": "#273244",

        // ─── Text System ────────────────────────────────────────────────
        "text-primary":   "#F9FAFB",
        "text-secondary": "#D1D5DB",
        "text-muted":     "#9CA3AF",
        "text-faint":     "#6B7280",

        // ─── Accent (Emerald Identity) ───────────────────────────────────
        accent: {
          DEFAULT: "#10B981",
          dark:    "#059669",
          light:   "#34D399",
          // accent-soft is intentionally a CSS variable (rgba) – see globals.css
        },

        // ─── State / Semantic Colors ─────────────────────────────────────
        success: "#10B981",
        warning: "#F59E0B",
        error:   "#EF4444",
        info:    "#3B82F6",

        // ─── Border & UI Structure ───────────────────────────────────────
        // These are rgba — defined as CSS custom properties in globals.css
        // and referenced here so `border-border`, `border-border-strong`,
        // `divide-divider`, and `bg-hover` all work as Tailwind classes.
        border:        "rgba(255,255,255,0.08)",
        "border-strong": "rgba(255,255,255,0.15)",
        divider:       "rgba(255,255,255,0.05)",
        hover:         "rgba(255,255,255,0.06)",
        "accent-soft": "rgba(16,185,129,0.15)",
      },

      // ─── Box Shadows ──────────────────────────────────────────────────
      boxShadow: {
        sm:   "0 2px 8px rgba(0,0,0,0.2)",
        md:   "0 8px 24px rgba(0,0,0,0.3)",
        glow: "0 0 20px rgba(16,185,129,0.25)",
      },

      // ─── Typography ───────────────────────────────────────────────────
      fontFamily: {
        // Usage: font-sans   → Inter (primary / body)
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        // Usage: font-display → Space Grotesk (secondary / headings)
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
