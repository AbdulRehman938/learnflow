import localFont from "next/font/local";

/**
 * Inter – primary / body font (variable font, covers 100–900)
 * Exposed as: font-sans  (Tailwind) / --font-sans  (CSS)
 */
export const inter = localFont({
  src: [
    {
      path: "./Inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "./Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

/**
 * Space Grotesk – secondary / display / heading font (variable font, 300–700)
 * Exposed as: font-display  (Tailwind) / --font-display  (CSS)
 */
export const spaceGrotesk = localFont({
  src: [
    {
      path: "./Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
