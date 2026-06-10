import { CtaFooter } from "@/components/sections/cta-footer";
import SplitText from "@/components/ui/SplitText";

export const metadata = {
  title: "Documentation — LearnFlow",
  description: "Learn how to set up your account, build your first learning path, and use the AI tutor.",
};

export default function DocumentationPage() {
  return (
    <div className="relative bg-bg-0 min-h-screen flex flex-col">
      {/* Premium Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="content-wrap relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block uppercase tracking-widest">
            Help Center & Docs
          </span>
          <SplitText text="Documentation" tag="h1" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="Everything you need to set up your account, build your first learning path, and master the AI tutor." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 lg:py-28 flex-1 bg-bg-1">
        <div className="content-wrap max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Getting Started",
                tag: "Basics",
                icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning bolt
                items: ["Creating your account", "Setting your first learning goal", "Understanding the dashboard layout"]
              },
              {
                title: "The AI Tutor",
                tag: "Core Feature",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", // Lightbulb
                items: ["How to ask effective questions", "Using the 'Explain Like I'm 5' mode", "Requesting coding examples"]
              },
              {
                title: "Spaced Repetition",
                tag: "Advanced",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", // Clock
                items: ["How the algorithm schedules reviews", "Manual vs Automatic revision blocks", "Reviewing weak concepts"]
              },
              {
                title: "Account & Billing",
                tag: "Admin",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", // Credit Card
                items: ["Upgrading to Pro", "Managing team seats", "Exporting your progress data"]
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl bg-surface-1 border border-white/5 hover:border-border-strong hover:shadow-lg transition-all flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-bg-0 border border-border flex items-center justify-center text-text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-text-muted bg-bg-0 px-3 py-1 rounded-full uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>
                <SplitText text={card.title} tag="h2" className="text-2xl font-bold text-text-primary font-display" />
                <ul className="space-y-3 mt-auto">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <SplitText text={item} tag="span" className="text-text-secondary hover:text-accent cursor-pointer transition-colors text-base" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}
