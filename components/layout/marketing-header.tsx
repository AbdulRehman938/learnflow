"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const NAV_LINKS = [
  { label: "Features",     href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Pricing",      href: "/#pricing" },
  { label: "About",        href: "/#about" },
] as const;

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Blurred Backdrop Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg-0/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg-1/50 backdrop-blur-xl border-b border-border">
        {/* Liquid Premium Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-20 -left-10 w-64 h-64 bg-accent/40 blur-[60px] rounded-full animate-pulse"></div>
          <div className="absolute top-[-50px] right-20 w-80 h-64 bg-emerald-500/30 blur-[70px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-xl"></div>
        </div>
        
        <div className="relative mx-auto flex h-full max-w-[110rem] items-center justify-between px-2 lg:px-8">

          {/* LEFT — Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logoFull.png"
              alt="LearnFlow"
              width={140}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* CENTER — Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "nav-animated text-sm font-medium py-1 transition-colors duration-150",
                  isActive(href) ? "text-accent" : "text-text-secondary hover:text-text-primary",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign in
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-md text-sm font-medium bg-accent text-bg-0 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile / Tablet — Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>

        {/* Mobile / Tablet — Menu panel */}
        <div
          className={`lg:hidden absolute top-16 left-0 right-0 border-t border-border bg-bg-1 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0 border-transparent"
          }`}
        >
          <div className="px-6 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "px-2 py-3 text-sm font-medium border-b border-divider last:border-0 transition-colors duration-150",
                  isActive(href) ? "text-accent" : "text-text-secondary hover:text-text-primary",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 text-sm font-medium text-center text-text-secondary hover:text-text-primary transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 rounded-md text-sm font-medium text-center bg-accent text-bg-0 hover:bg-accent-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
