import { CtaFooter } from "@/components/sections/cta-footer";
import SplitText from "@/components/ui/SplitText";

export const metadata = {
  title: "Terms of Service — LearnFlow",
  description: "The terms and conditions governing your use of the LearnFlow platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative bg-bg-0 min-h-screen flex flex-col">
      {/* Premium Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="content-wrap relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
            Legal Information
          </span>
          <SplitText text="Terms of Service" tag="h1" className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight" />
          <SplitText text="The rules and guidelines for using the LearnFlow platform and its AI tools." className="text-text-secondary text-lg sm:text-xl leading-relaxed" />
          <p className="text-text-muted text-sm font-medium pt-4">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 lg:py-28 flex-1">
        <div className="content-wrap max-w-3xl mx-auto">
          <div className="space-y-16">
            {[
              {
                title: "1. Acceptance of Terms",
                body: "By registering for and using LearnFlow, you agree to comply with and be legally bound by these Terms of Service. If you do not agree to these terms, you may not access or use the platform."
              },
              {
                title: "2. Fair Use & AI Systems",
                body: "LearnFlow provides access to AI-powered learning assistants. You agree not to abuse, spam, reverse-engineer, or attempt to extract the underlying models or system prompts. Accounts exhibiting automated scraping or excessively high request volumes may be suspended."
              },
              {
                title: "3. User Accounts & Security",
                body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation."
              },
              {
                title: "4. Subscription & Billing",
                body: "Pro and Team plans are billed in advance on a recurring basis. By providing payment information, you authorize us to charge your method on file. You may cancel your subscription at any time; your access will remain active until the end of your current billing period. We offer a strict 7-day money-back guarantee for initial upgrades."
              },
              {
                title: "5. Intellectual Property",
                body: "All structural designs, learning path algorithms, interface elements, and branding are the exclusive property of LearnFlow. While you own your personal progress data, you may not copy or redistribute the platform's proprietary learning methodologies."
              },
              {
                title: "6. Limitation of Liability",
                body: "While LearnFlow uses advanced AI to guide your learning, we do not guarantee specific academic outcomes, job placements, or exam results. The platform is provided 'as is' without warranties of any kind. To the maximum extent permitted by law, LearnFlow shall not be liable for any indirect or consequential damages."
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
