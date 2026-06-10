import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/fonts";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learnflow",
  description: "An advanced adaptive learning management platform.",
  icons: {
    icon: "/logoHalf.png",
    shortcut: "/logoHalf.png",
    apple: "/logoHalf.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body suppressHydrationWarning>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
