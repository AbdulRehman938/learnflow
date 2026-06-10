export default function MarketingHomePage() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        
        {/* Glowing Orbs (Mesh Gradient Effect) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-accent/15 blur-[150px] rounded-full pointer-events-none opacity-60"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        {/* Dark Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none"></div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center z-10">
        <div className="content-wrap text-center">
          <p className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent-soft border border-accent/20 rounded-full uppercase tracking-widest mb-6 shadow-sm">
            Adaptive Learning Platform
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight">
            Learn Smarter,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Not Harder
            </span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            LearnFlow adapts to your pace, tracks your progress, and connects
            you with expert tutors — all in one premium platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-3.5 rounded-md font-semibold bg-accent text-bg-0 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
            >
              Get Started Free
            </a>
            <a
              href="/features"
              className="px-8 py-3.5 rounded-md font-semibold text-text-secondary border border-border hover:text-text-primary hover:border-border-strong hover:bg-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              See Features →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
