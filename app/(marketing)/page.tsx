import Image from "next/image";
import {
  RiAlertLine,
  RiRouteLine,
  RiHistoryLine,
  RiGroupLine,
  RiCpuLine,
  RiGitBranchLine,
  RiBrainLine,
  RiSparklingLine
} from "react-icons/ri";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";

const PROBLEMS = [
  {
    title: "Overwhelming Content",
    text: "Students waste hours trying to figure out what to learn next.",
    icon: RiAlertLine
  },
  {
    title: "No Clear Learning Path",
    text: "Most platforms throw random lessons without structure or guidance.",
    icon: RiRouteLine
  },
  {
    title: "Poor Retention",
    text: "Learners forget what they study because there is no reinforcement system.",
    icon: RiHistoryLine
  },
  {
    title: "No Personalization",
    text: "Everyone gets the same content, regardless of skill level or goals.",
    icon: RiGroupLine
  }
];

const SOLUTIONS = [
  {
    title: "AI Learning Paths",
    text: "Automatically generates a step-by-step learning roadmap tailored to your goals.",
    icon: RiCpuLine
  },
  {
    title: "Structured Progress System",
    text: "Every topic is organized into clear, logical learning sequences.",
    icon: RiGitBranchLine
  },
  {
    title: "Smart Reinforcement",
    text: "Revisits weak areas using spaced repetition and adaptive practice.",
    icon: RiBrainLine
  },
  {
    title: "Personalized Experience",
    text: "Adjusts difficulty and content based on your performance in real time.",
    icon: RiSparklingLine
  }
];

export default function MarketingHomePage() {
  return (
    <div className="relative min-h-screen bg-bg-0 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-accent/10 blur-[150px] rounded-full opacity-60"></div>
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accent-light/5 blur-[120px] rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-0 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen lg:min-h-[750px] lg:h-[calc(100vh-4rem)] lg:max-h-[900px] pt-0 pb-12 z-10">
        <div className="content-wrap flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 py-12 pt-10">
            
            {/* LEFT SIDE — CONTENT (Span 5 columns) */}
            <div className="flex flex-col items-start text-left lg:col-span-5 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full uppercase tracking-widest mb-10 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                AI-Powered Learning System
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-text-primary mb-8 leading-[1.1] tracking-tighter font-extrabold">
                Learn smarter.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-accent-light to-accent">
                  Not harder.
                </span>
              </h1>
              
              <p className="text-text-secondary text-lg sm:text-xl lg:text-2xl max-w-lg mb-12 leading-relaxed font-medium">
                LearnFlow builds adaptive learning paths, tracks your progress, and helps you master skills faster using AI-driven guidance.
              </p>
              
              <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-5">
                <a
                  href="/signup"
                  className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-lg bg-accent text-bg-0 hover:bg-accent-light hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                >
                  Get Started Free
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="/features"
                  className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-lg text-text-secondary border-2 border-border hover:text-text-primary hover:border-border-strong hover:bg-surface-2 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Explore Features
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-text-muted font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full border-2 border-bg-0 bg-surface-3 shadow-sm overflow-hidden"
                      style={{ zIndex: 10 - i }}
                    >
                      <Image
                        src={`/students/${i}.jpg`}
                        alt={`Student ${i}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ))}
                </div>
                <p>Join 10,000+ students already learning</p>
              </div>
            </div>

            {/* RIGHT SIDE — VISUAL MOCKUP (Span 7 columns, bleeding off right edge) */}
            <div className="relative w-full lg:col-span-7 lg:-mr-32 xl:-mr-48 mt-10 lg:mt-0">
              {/* Massive background glow for the mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 blur-[100px] rounded-full z-0"></div>
              
              {/* Main Dashboard Window */}
              <div className="relative z-10 bg-[#0A0F1A]/90 backdrop-blur-2xl border border-border rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transform perspective-1000 lg:rotate-y-[-5deg] lg:rotate-x-[2deg] transition-transform duration-700 hover:rotate-0">
                
                {/* macOS style Window Header */}
                <div className="h-14 bg-surface-1/50 border-b border-border flex items-center justify-between px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="px-4 py-1.5 rounded-md bg-surface-2/50 border border-border/50 text-xs text-text-muted font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    app.learnflow.io
                  </div>
                  <div className="w-16"></div> {/* Spacer for symmetry */}
                </div>
                
                {/* Mockup Internal Layout */}
                <div className="flex h-[480px] sm:h-[520px] lg:h-[550px]">
                  {/* Fake Sidebar */}
                  <div className="w-48 lg:w-56 bg-surface-1/30 border-r border-border p-5 flex flex-col gap-4 hidden md:flex">
                    <div className="h-10 bg-surface-3/50 rounded-md w-full mb-6"></div>
                    <div className="h-8 bg-surface-2 rounded-md w-3/4"></div>
                    <div className="h-8 bg-surface-2 rounded-md w-5/6"></div>
                    <div className="h-8 bg-surface-2 rounded-md w-4/5"></div>
                    <div className="mt-auto h-12 bg-accent/10 border border-accent/20 rounded-lg w-full flex items-center justify-center text-sm text-accent font-bold shadow-glow">
                      Pro Member
                    </div>
                  </div>

                  {/* Main Mockup Content Area */}
                  <div className="flex-1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 bg-gradient-to-br from-transparent to-surface-1/20 min-w-0">
                    <div className="flex justify-between items-end gap-4">
                      <div className="min-w-0">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2 truncate">Learning Dashboard</h2>
                        <p className="text-sm sm:text-base text-text-muted truncate">Welcome back! You're on a 5-day streak.</p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-accent to-blue-500 p-[2px] shadow-lg shrink-0">
                        <div className="w-full h-full bg-surface-1 rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Progress Card */}
                      <div className="bg-surface-2/80 border border-border rounded-xl p-5 sm:p-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full group-hover:bg-accent/20 transition-all"></div>
                        <div className="flex justify-between items-center text-sm sm:text-base font-bold mb-5 gap-2">
                          <span className="text-text-secondary whitespace-nowrap">Progress: 68%</span>
                          <span className="text-accent bg-accent/10 px-2 py-1 rounded-md text-xs border border-accent/20 whitespace-nowrap">Keep it up!</span>
                        </div>
                        <div className="w-full h-3 bg-surface-3 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full w-[68%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                        </div>
                      </div>

                      {/* Active Course Card */}
                      <div className="bg-surface-2/80 border border-border rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-center">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Active Course</span>
                        <span className="text-lg sm:text-xl font-extrabold text-text-primary truncate">Frontend Mastery</span>
                        <div className="mt-4 flex gap-1.5">
                          <div className="h-2 w-10 bg-accent rounded-full shadow-glow"></div>
                          <div className="h-2 w-10 bg-accent rounded-full shadow-glow"></div>
                          <div className="h-2 w-10 bg-surface-3 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* AI Panel Box */}
                    <div className="mt-auto bg-gradient-to-r from-surface-3/80 to-surface-2/50 border border-accent/30 rounded-xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                      <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        <div className="w-5 h-5 rounded-full bg-accent animate-ping absolute opacity-50"></div>
                        <div className="w-4 h-4 rounded-full bg-accent"></div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="text-base font-extrabold text-text-primary">Ask AI Tutor</p>
                        <p className="text-sm font-medium text-text-secondary mt-1 truncate">I can help you understand React Hooks...</p>
                      </div>
                      <div className="ml-auto px-4 py-2 bg-surface-1 rounded-lg border border-border text-sm font-bold text-text-muted shadow-inner hidden sm:block shrink-0">
                        Press ⌘K
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Trusted By Banner (Fills out the bottom of the viewport) */}
          <div className="w-full mt-auto pt-0 pb-8 border-t border-border/40">
            <p className="text-center text-xs font-bold text-text-muted/60 mb-8 uppercase tracking-[0.2em]">
              Trusted by innovative teams worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-40 grayscale">
              <div className="text-xl md:text-2xl font-bold font-display tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white"></div> Acme Corp
              </div>
              <div className="text-xl md:text-2xl font-bold font-display tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white"></div> Globex
              </div>
              <div className="text-xl md:text-2xl font-bold font-display tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 rotate-45 bg-white"></div> Soylent
              </div>
              <div className="text-xl md:text-2xl font-bold font-display tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 rounded-tl-xl rounded-br-xl bg-white"></div> Initech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="relative py-24 lg:py-32 bg-bg-1 border-t border-border/40 z-10 overflow-hidden">
        {/* Subtle decorative blurs */}
        <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 translate-x-1/2 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="content-wrap relative z-20">
          
          {/* Main Heading & Description */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Compare the Experience
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary font-extrabold tracking-tight">
              Why LearnFlow?
            </h2>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed">
              Traditional education platforms are designed for passive consumption. LearnFlow builds structured paths for active mastery. Here is how we fix it.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Desktop Vertical Divider Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/40 -translate-x-1/2 pointer-events-none z-0" />
            
            {/* LEFT SIDE — PROBLEMS */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-red-400/80 uppercase tracking-widest bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20 inline-block">
                  The Problem
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary font-extrabold tracking-tight">
                  Traditional learning is broken
                </h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {PROBLEMS.map((prob, index) => {
                  const Icon = prob.icon;
                  return (
                    <div key={index} className="relative pl-14">
                      {/* Vertical path line segment */}
                      {index < 3 && (
                        <div className="absolute left-[18px] top-10 bottom-[-24px] w-[1px] bg-border/40 z-0 pointer-events-none" />
                      )}
                      
                      {/* Icon Node */}
                      <div className="absolute left-0 top-[6px] p-2 rounded-lg bg-bg-1 border border-border/60 text-red-400 z-10 shrink-0 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-5 sm:p-6 rounded-xl bg-surface-1/20 border border-red-500/10 hover:border-red-500/25 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(239,68,68,0.03)] transition-all duration-300">
                        <h3 className="text-lg font-bold text-red-400 mb-2">
                          {prob.title}
                        </h3>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                          {prob.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE — SOLUTIONS */}
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block uppercase tracking-widest">
                  The Solution
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary font-extrabold tracking-tight">
                  LearnFlow fixes this
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {SOLUTIONS.map((sol, index) => {
                  const Icon = sol.icon;
                  return (
                    <div key={index} className="relative pl-14">
                      {/* Vertical path line segment */}
                      {index < 3 && (
                        <div className="absolute left-[18px] top-10 bottom-[-24px] w-[1px] bg-border/40 z-0 pointer-events-none" />
                      )}
                      
                      {/* Icon Node */}
                      <div className="absolute left-0 top-[6px] p-2 rounded-lg bg-bg-1 border border-border/60 text-accent z-10 shrink-0 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Card Content */}
                      <div className="p-5 sm:p-6 rounded-xl bg-surface-1/20 border border-accent/10 hover:border-accent/25 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)] transition-all duration-300">
                        <h3 className="text-lg font-bold text-accent mb-2">
                          {sol.title}
                        </h3>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                          {sol.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

        <FeaturesSection />
        <HowItWorksSection />
      </div>
    );
}
