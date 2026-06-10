import React from "react";
import SplitText from "@/components/ui/SplitText";

const STEPS = [
  {
    number: 1,
    title: "Step One — Set Your Goal",
    text: "Tell LearnFlow what you want to learn and your current skill level."
  },
  {
    number: 2,
    title: "Step Two — Get Your Learning Path",
    text: "AI instantly builds a structured roadmap tailored to your goals."
  },
  {
    number: 3,
    title: "Step Three — Learn and Improve",
    text: "Follow lessons, practice regularly, and track your progress in real time."
  }
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-1 border-t border-border/40 z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="content-wrap relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
            The Process
          </span>
          <SplitText text="How LearnFlow works" tag="h2" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="From goal to mastery in three simple steps — fully guided by AI." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Subtle horizontal connector line (desktop only, connecting badge centers) */}
          <div className="hidden md:block absolute left-[16.66%] right-[16.66%] top-[28px] h-[1px] bg-border/40 z-0 pointer-events-none" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {STEPS.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center gap-6 group z-10"
              >
                {/* Step number badge with section bg borders to cut the connector line cleanly */}
                <div className="w-14 h-14 rounded-full bg-accent text-bg-0 font-display text-xl font-bold flex items-center justify-center border-4 border-bg-1 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {step.number}
                </div>

                {/* Card container */}
                <div className="w-full p-6 sm:p-8 rounded-2xl bg-surface-1 border border-white/5 hover:border-accent/20 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(16,185,129,0.02)] transition-all duration-300 flex-1 flex flex-col justify-start">
                  <SplitText text={step.title} tag="h3" className="text-xl font-bold text-text-primary mb-3" />
                  <SplitText text={step.text} className="text-text-secondary text-sm sm:text-base leading-relaxed" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
