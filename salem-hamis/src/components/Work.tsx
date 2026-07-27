import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "./Reveal";
import { projects, Project } from "@/data/projects";

function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
        animation: "gridPulse 4s ease-in-out infinite",
      }}
    />
  );
}

export function Work() {
  return (
    <>
      <style>{`
        @keyframes gridPulse { 0%,100%{opacity:0.6;} 50%{opacity:1;} }
        @keyframes progressLoading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        .work-img { transition: transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .work-card:hover .work-img { transform: scale(1.02); }

        .work-card {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .work-card:hover {
          transform: translateY(-4px);
        }
        .animate-progress {
          animation: progressLoading 1.5s ease-in-out infinite;
        }
      `}</style>

      <section
        id="work"
        className="section-dark py-24 md:py-36 relative overflow-hidden"
      >
        <AnimatedGrid />

        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-white/[0.06] blur-3xl" />
        </div>

        {/* Outer Container */}
        <div className="container-edit relative max-w-6xl mx-auto px-8 md:px-12 my-6">
          {/* ── Heading ── */}
          <Reveal>
            <div className="flex flex-col gap-6 mb-16 md:mb-24">
              <div className="flex items-end justify-between flex-wrap gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5 flex items-center gap-3">
                    <span className="w-7 h-px bg-white/30" />
                    case studies
                  </p>
                  <h1
                    className="leading-[1.08] text-balance text-white"
                    style={{
                      fontFamily: "'Geist', var(--font-sans), sans-serif",
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      fontWeight: 280,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Thoughtful, Results Driven Work, Built to Perform.
                  </h1>
                </div>

                <p
                  className="text-white/46 leading-[1.72] max-w-[300px]"
                  style={{
                    fontFamily: "'Inter', var(--font-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "0.005em",
                  }}
                >
                  Every project ships with a clear business objective. Whether
                  that's conversion, retention, or scale. Good design and solid
                  engineering, no fluff.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Grid Container ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <BentoCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BentoCard({ project: p }: { project: Project }) {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if media was already cached upon mounting
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div
      className="work-card bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between cursor-pointer h-full"
      onClick={() => navigate(`/work/${p.id}`)}
    >
      <div>
        {/* Dotted Glass White Border Box — Dynamic Full Height Container */}
        <div
          className="relative overflow-hidden rounded-xl border border-dashed p-2.5 bg-[#0a0a0a] mb-6"
          style={{ borderColor: "rgba(255, 255, 255, 0.25)" }}
        >
          <div className="relative overflow-hidden rounded-lg bg-white/5 w-full min-h-[180px]">
            {/* ── Skeleton Loader & Progress Bar ── */}
            {!isLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-[#141414] animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-16 bg-white/10 rounded-full" />
                  <div className="h-2 w-8 bg-white/10 rounded-full" />
                </div>

                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/40 animate-progress rounded-full" />
                </div>
              </div>
            )}

            {/* ── Video or Fallback Image — Uncropped Full Content ── */}
            {p.heroVideo ? (
              <video
                ref={videoRef}
                src={p.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsLoaded(true)}
                className={`work-img w-full h-auto block rounded-md transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <img
                src={p.heroImage}
                alt={p.title}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`work-img w-full h-auto block rounded-md transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-white text-xl md:text-2xl font-medium tracking-tight mb-2.5"
          style={{
            fontFamily: "'Geist', var(--font-sans), sans-serif",
          }}
        >
          {p.title}
        </h3>

        {/* Description */}
        <p
          className="text-white/50 text-sm leading-relaxed mb-8"
          style={{
            fontFamily: "'Inter', var(--font-sans), sans-serif",
          }}
        >
          {p.tagline}
        </p>
      </div>

      {/* View Case Study Button */}
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/work/${p.id}`);
          }}
          className="group inline-flex items-center justify-center gap-2.5 
            bg-white backdrop-blur-md border border-white/40 
            text-[#1a1a1a] font-medium text-sm tracking-[-0.01em] 
            px-7 py-3 rounded-xl 
            hover:bg-white hover:border-white 
            transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] 
            shadow-md"
          style={{ fontFamily: "'Inter', var(--font-sans), sans-serif" }}
        >
          <span>View case study</span>
          <svg
            className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-45deg]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}