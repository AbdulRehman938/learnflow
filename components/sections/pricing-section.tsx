import React from "react";
import SplitText from "@/components/ui/SplitText";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: null,
    description: "Perfect for getting started with basic learning features.",
    features: [
      "AI Learning Assistant (limited access)",
      "Basic learning paths",
      "Progress tracking",
      "Limited practice sessions"
    ],
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlighted: false,
    ctaStyle: "outline" as const
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Best for serious learners who want structured progress and full AI power.",
    features: [
      "Full AI Learning Assistant",
      "Advanced personalized learning paths",
      "Smart revision system",
      "Unlimited practice sessions",
      "Deep progress analytics"
    ],
    cta: "Upgrade to Pro",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
    ctaStyle: "filled" as const
  },
  {
    name: "Team",
    price: "$19",
    period: "/month",
    description: "For teams, classrooms, and organizations.",
    features: [
      "Everything in Pro",
      "Team learning dashboard",
      "Shared progress tracking",
      "Admin controls",
      "Collaboration tools"
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlighted: false,
    ctaStyle: "outline" as const
  }
];

export function PricingSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-0 border-t border-border/40 z-10 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="content-wrap relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
            Pricing
          </span>
          <SplitText text="Simple pricing for everyone" tag="h2" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="Start free, upgrade when you need more power. No hidden costs, no surprises." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-[2px] ${
                plan.highlighted
                  ? "bg-surface-1 border-accent/40 shadow-[0_0_40px_rgba(16,185,129,0.12)] scale-[1.02] md:scale-[1.04]"
                  : "bg-surface-1 border-white/5 hover:border-accent/15 hover:shadow-[0_8px_30px_rgba(16,185,129,0.04)]"
              }`}
            >
              {/* Pro badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-bg-0 text-xs font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-bg-0 opacity-70" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 sm:p-8 flex flex-col flex-1 gap-6">

                {/* Plan name & price */}
                <div className="space-y-3">
                  <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlighted ? "text-accent" : "text-text-muted"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold text-text-primary leading-none font-display">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-text-muted text-base font-medium mb-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <SplitText text={plan.description} className="text-text-secondary text-sm leading-relaxed" />
                </div>

                {/* Divider */}
                <div className={`h-[1px] ${plan.highlighted ? "bg-accent/20" : "bg-border/50"}`} />

                {/* Feature list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Checkmark */}
                      <svg
                        className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-text-muted"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <SplitText text={feature} tag="span" className="text-text-secondary text-sm leading-relaxed" />
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`mt-auto w-full py-3.5 rounded-xl text-center font-bold text-base transition-all duration-300 ${
                    plan.ctaStyle === "filled"
                      ? "bg-accent text-bg-0 hover:bg-accent-light hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:-translate-y-px"
                      : "border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-surface-2"
                  }`}
                >
                  {plan.cta}
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Trust Note */}
        <SplitText text="You can cancel anytime. No hidden fees. Upgrade or downgrade whenever you want." className="text-center text-text-muted text-sm mt-12 leading-relaxed" />

      </div>
    </section>
  );
}
