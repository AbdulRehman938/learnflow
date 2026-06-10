import { CtaFooter } from "@/components/sections/cta-footer";
import SplitText from "@/components/ui/SplitText";

export const metadata = {
  title: "Privacy Policy — LearnFlow",
  description: "How LearnFlow collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative bg-bg-0 min-h-screen flex flex-col">
      {/* Premium Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="content-wrap relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
            Legal Information
          </span>
          <SplitText text="Privacy Policy" tag="h1" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="We believe your data belongs to you. Here is exactly how we use it to improve your learning experience." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
          <p className="text-text-muted text-sm font-medium pt-4">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 lg:py-28 flex-1">
        <div className="content-wrap max-w-3xl mx-auto">
          <div className="space-y-16">
            {[
              {
                title: "1. Information We Collect",
                body: "When you use LearnFlow, we collect the minimal amount of information necessary to power your AI learning paths. This includes your account details (name, email), your learning preferences, and your real-time progress data (quiz scores, lesson completion, time spent)."
              },
              {
                title: "2. How We Use Your Data",
                body: "Your data is strictly used to personalise the LearnFlow engine. The AI tutor uses your past performance to adjust future lesson difficulty, generate targeted practice questions, and schedule spaced-repetition reviews. We never sell your personal data to advertisers or third-party brokers."
              },
              {
                title: "3. Data Storage & Security",
                body: "All personal information and learning progress is encrypted in transit using TLS 1.3 and at rest using AES-256. Our infrastructure is hosted on secure, SOC2 compliant cloud environments. Access to production data is strictly limited to authorized engineers for maintenance purposes only."
              },
              {
                title: "4. Cookies & Tracking",
                body: "LearnFlow uses essential cookies to maintain your login session and secure your account. We do not use cross-site tracking cookies or aggressive retargeting pixels. You can browse our landing pages completely anonymously."
              },
              {
                title: "5. Your Rights & Control",
                body: "You maintain full ownership of your data. You can export your entire learning history, modify your personal details, or permanently delete your account directly from your user dashboard at any time. Account deletion is irreversible and removes all traces of your data from our active servers."
              },
              {
                title: "6. Changes to this Policy",
                body: "We may update this policy occasionally as we introduce new AI features. When we make significant changes, we will notify you via email or through an in-app alert before the changes take effect."
              }
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <SplitText text={section.title} tag="h2" className="text-2xl font-bold text-text-primary font-display tracking-tight" />
                <SplitText text={section.body} className="text-text-secondary text-base lg:text-lg leading-relaxed" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}
