"use client";

import { useEffect, useRef, useState } from "react";
import SplitText from "@/components/ui/SplitText";

const STATS = [
  { value: "10K+",  label: "Active Learners" },
  { value: "95%",   label: "Completion Rate" },
  { value: "3×",    label: "Faster Skill Growth" },
  { value: "AI",    label: "Powered Guidance" },
];

const INFO_CARDS = [
  {
    title: "Structured Learning",
    text: "Every topic is organized into clear and logical steps so you always know what to do next — no confusion, no guesswork.",
    gradient: "from-accent/20 to-accent/5",
    border: "border-accent/20 hover:border-accent/40"
  },
  {
    title: "AI Guidance",
    text: "Get instant explanations, worked examples, and adaptive feedback from your AI tutor whenever you are stuck — 24/7, on any topic.",
    gradient: "from-blue-500/15 to-blue-500/5",
    border: "border-blue-500/15 hover:border-blue-500/30"
  },
  {
    title: "Real Progress Tracking",
    text: "Track genuine understanding and skill improvement — not just lesson completion. See exactly how far you have come at every stage.",
    gradient: "from-purple-500/15 to-purple-500/5",
    border: "border-purple-500/15 hover:border-purple-500/30"
  }
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function WhatIsLearnflow() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-24 bg-bg-1 border-t border-border/40 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/6 blur-[130px] rounded-full pointer-events-none" />

      <div className="content-wrap relative z-10">

        {/* ── Top: Two-column header ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

          {/* LEFT — Title */}
          <div
            className={`space-y-5 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
              The Platform
            </span>
            <h2 className="font-display text-4xl lg:text-8xl text-text-primary font-extrabold tracking-tight leading-[1.1]">
              What is{" "}
              <span className="text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-br from-white via-accent-light to-accent">
                LearnFlow?
              </span>
            </h2>
          </div>

          {/* RIGHT — Description + mini list */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SplitText text="LearnFlow is an AI-powered learning system that helps you build structured learning paths, track progress, and improve skills through personalized guidance." textAlign="left" className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
            <ul className="space-y-3">
              {[
                "Adapts to your unique skill level and goals",
                "Eliminates the guesswork from self-learning",
                "Keeps you consistent with AI-driven accountability"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <SplitText text={point} tag="span" className="text-text-secondary text-base" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Stats row ──────────────────────────────────────────── */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-surface-1 border border-white/5"
            >
              <SplitText text={stat.value} tag="span" className="font-display text-3xl sm:text-4xl font-extrabold text-accent mb-1" />
              <SplitText text={stat.label} tag="span" className="text-text-muted text-xs sm:text-sm font-medium" />
            </div>
          ))}
        </div>

        {/* ── Info cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INFO_CARDS.map((card, i) => (
            <div
              key={i}
              className={`relative p-6 sm:p-8 rounded-2xl bg-surface-1 border ${card.border} hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden group flex flex-col gap-4 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${250 + i * 80}ms` }}
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.gradient}`} />
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 space-y-3">
                <SplitText text={card.title} tag="h3" className="text-xl font-bold text-text-primary" />
                <SplitText text={card.text} className="text-text-secondary text-sm sm:text-base leading-relaxed" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
