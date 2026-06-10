import { CtaFooter } from "@/components/sections/cta-footer";
import SplitText from "@/components/ui/SplitText";

export const metadata = {
  title: "Resources — LearnFlow",
  description: "Downloadable guides, study templates, and extra learning material.",
};

export default function ResourcesPage() {
  return (
    <div className="relative bg-bg-0 min-h-screen flex flex-col">
      {/* Premium Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="content-wrap relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 inline-block uppercase tracking-widest">
            Downloads & Guides
          </span>
          <SplitText text="Learning Resources" tag="h1" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="Extra materials to accelerate your progress. Download cheat sheets, templates, and frameworks used by top learners." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 lg:py-28 flex-1 bg-bg-1">
        <div className="content-wrap max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Feynman Technique Template",
                type: "PDF Template",
                color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                desc: "A printable framework for breaking down complex topics using Richard Feynman's famous learning method."
              },
              {
                title: "Prompt Engineering Guide",
                type: "E-Book",
                color: "text-accent bg-accent/10 border-accent/20",
                desc: "Learn how to talk to the LearnFlow AI tutor to get the absolute best explanations and examples."
              },
              {
                title: "Daily Habit Tracker",
                type: "Notion Template",
                color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                desc: "Duplicate this Notion template to track your daily learning blocks outside of the platform."
              },
              {
                title: "Spaced Repetition Cheatsheet",
                type: "PDF Guide",
                color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                desc: "The science behind our review algorithm and how memory consolidation works in the brain."
              },
              {
                title: "Focus Mode Soundtrack",
                type: "Audio Playlist",
                color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
                desc: "A curated 2-hour playlist of binaural beats and ambient sounds designed for deep work."
              },
              {
                title: "Goal Setting Framework",
                type: "Worksheet",
                color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                desc: "Define your learning goals with precision using the SMART framework adapted for technical skills."
              }
            ].map((resource, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-1 border border-white/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 group cursor-pointer">
                <span className={`w-fit text-xs font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${resource.color}`}>
                  {resource.type}
                </span>
                <SplitText text={resource.title} tag="h2" className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors" />
                <SplitText text={resource.desc} className="text-text-secondary text-sm leading-relaxed mb-4" />
                <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-bold text-text-muted group-hover:text-text-primary transition-colors">
                  Download Resource
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}
