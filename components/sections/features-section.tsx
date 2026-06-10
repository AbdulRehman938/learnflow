import React from "react";
import SplitText from "@/components/ui/SplitText";

const FEATURES = [
  {
    title: "AI Learning Assistant",
    text: "Ask anything and get instant explanations, examples, and guidance.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Personalized Learning Paths",
    text: "Automatically builds a structured roadmap based on your goals and skill level.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Progress Tracking System",
    text: "Tracks your learning progress in real time with clear visual insights.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Smart Revision Engine",
    text: "Reinforces weak topics using spaced repetition and adaptive review cycles.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
      </svg>
    )
  },
  {
    title: "Interactive Practice Mode",
    text: "Practice with real-world questions designed to test understanding.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Focus Learning Mode",
    text: "Removes distractions and helps you stay consistent with deep learning sessions.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-0 border-t border-border/40 z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="content-wrap relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
            Core Platform
          </span>
          <SplitText text="Everything you need to learn faster" tag="h2" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="LearnFlow combines AI, structure, and personalization to create a complete learning system designed for real progress." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 lg:gap-8">
          {FEATURES.map((feat, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-surface-1 border border-white/5 hover:border-accent/20 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(16,185,129,0.02)] transition-all duration-300 flex flex-col items-start gap-5 group"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/15 transition-colors duration-300">
                {feat.icon}
              </div>
              
              {/* Card Text Content */}
              <div className="space-y-2">
                <SplitText text={feat.title} tag="h3" className="text-xl font-bold text-text-primary" />
                <SplitText text={feat.text} className="text-text-secondary text-sm sm:text-base leading-relaxed" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
