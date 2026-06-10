import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  product: [
    { label: "Features",      href: "/#features" },
    { label: "How it works",  href: "/#how-it-works" },
    { label: "Pricing",       href: "/#pricing" },
    { label: "About",         href: "/#about" }
  ],
  resources: [
    { label: "Documentation", href: "/documentation" },
    { label: "Resources",     href: "/resources" },
    { label: "Privacy Policy",href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" }
  ]
};

export function CtaFooter() {
  return (
    <>
      {/* ─── Final CTA Block ──────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-bg-1 border-t border-border/40 z-10 overflow-hidden">
        {/* Ambient glow behind the CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[350px] bg-accent/10 blur-[160px] rounded-full" />
        </div>
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

        <div className="content-wrap relative z-20 flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Get Started
          </span>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary font-extrabold tracking-tight max-w-4xl leading-[1.1]">
            Start learning the smart way today
          </h2>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-xl">
            Join LearnFlow and build structured learning paths with AI guidance in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg bg-accent text-bg-0 hover:bg-accent-light hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300 text-center"
            >
              Get Started Free
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg text-text-secondary border-2 border-border hover:text-text-primary hover:border-border-strong hover:bg-surface-2 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer className="relative bg-bg-0 border-t border-border/40 z-10">
        <div className="content-wrap py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1 — Brand */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <span className="font-display text-2xl font-extrabold text-text-primary tracking-tight">
                LearnFlow
              </span>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                AI-powered learning system that builds structured paths and helps you learn faster.
              </p>
            </div>

            {/* Column 2 — Product */}
            <div className="flex flex-col gap-4">
              <p className="text-text-primary font-bold text-sm uppercase tracking-widest">
                Product
              </p>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.product.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Resources */}
            <div className="flex flex-col gap-4">
              <p className="text-text-primary font-bold text-sm uppercase tracking-widest">
                Resources
              </p>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.resources.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-text-primary font-bold text-sm uppercase tracking-widest">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:support@learnflow.app"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200 break-all"
                  >
                    support@learnflow.app
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/learnflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    Twitter / X: @learnflow
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/learnflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    GitHub: LearnFlow Repo
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom divider + copyright */}
          <div className="mt-14 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-faint text-xs">
              © {new Date().getFullYear()} LearnFlow. All rights reserved.
            </p>
            <p className="text-text-faint text-xs">
              Built with AI. Powered by progress.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
