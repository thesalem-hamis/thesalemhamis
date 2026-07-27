import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject } from "@/data/projects";
import { Nav } from "@/components/Nav";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProject(id ?? "");

  // Always scroll to top when page opens or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-white text-black pb-28"
    >
      <Nav />

      <main className="max-w-7xl mx-auto px-6 md:px-16">
        {/* ── Glass Back Button ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mt-28 md:mt-32 mb-12 inline-block"
        >
          <button
            onClick={() => navigate("/")}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2.5

              bg-black/[0.04]
              backdrop-blur-2xl

              border
              border-black/15

              text-black
              font-medium
              text-[15px]
              tracking-[-0.01em]

              px-6
              py-3
              rounded-2xl

              hover:bg-black/[0.08]
              hover:border-black/25

              transition-all
              duration-300

              hover:scale-[1.02]
              active:scale-[0.98]

              shadow-sm
            "
            style={{ fontFamily: 'var(--font-sans, "Geist", sans-serif)' }}
          >
            <svg
              className="
                w-4
                h-4
                transition-all
                duration-300
                group-hover:-translate-x-1
                group-hover:-translate-y-0.5
                group-hover:rotate-[-45deg]
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            <span>Back</span>
          </button>
        </motion.div>

        {/* ── Centered Hero Header Section ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-8"
            style={{
              fontFamily: 'var(--font-display, "Geist", "Inter", sans-serif)',
            }}
          >
            {project.title}
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-black font-medium max-w-3xl mb-12">
            {project.overview}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200 text-xs text-center w-full max-w-3xl justify-center">
            <div>
              <span className="block text-slate-500 mb-1 font-medium">
                Client
              </span>
              <span className="font-semibold text-black">
                {project.client || project.title}
              </span>
            </div>

            <div>
              <span className="block text-slate-500 mb-1 font-medium">
                Website
              </span>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline truncate block hover:opacity-75"
                >
                  {project.href.replace(/^https?:\/\//, "")}
                </a>
              ) : (
                <span className="font-semibold text-black">N/A</span>
              )}
            </div>

            <div>
              <span className="block text-slate-500 mb-1 font-medium">
                Delivery Time
              </span>
              <span className="font-semibold text-black">
                {project.timeframe || project.duration || "4 Weeks"}
              </span>
            </div>

            <div>
              <span className="block text-slate-500 mb-1 font-medium">
                Year
              </span>
              <span className="font-semibold text-black">{project.year}</span>
            </div>
          </div>
        </motion.div>

        {/* ── Main Hero Media Container — Video/Image inside Mockup Frame ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="relative max-w-6xl mx-auto mb-28 md:mb-36"
        >
          {/* Outer Glass & Glow Frame */}
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-4 bg-[#0a0a0a] border border-black/10 shadow-2xl overflow-hidden">
            
            {/* Top Browser Window Header Bar */}
            <div className="flex items-center justify-between px-3 md:px-4 py-2 mb-2 border-b border-white/10 bg-[#121212] rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="hidden sm:block text-[11px] font-mono text-white/40 tracking-wide truncate max-w-[240px]">
                {project.href || `${project.id}.demo`}
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>
            </div>

            {/* Video / Image Display Area */}
            <div className="relative overflow-hidden rounded-xl bg-black">
              {project.heroVideo ? (
                <video
                  src={project.heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-lg max-h-[82vh] object-contain mx-auto"
                />
              ) : (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-auto block rounded-lg max-h-[82vh] object-contain mx-auto"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Problem Statement Section ── */}
        <SectionBlock label="Problem">
          <p className="text-base md:text-lg leading-relaxed text-black font-medium">
            {project.challenge}
          </p>
        </SectionBlock>

        {/* ── Additional Gallery Images ── */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="my-28 md:my-36"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-sm"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Outcome Section ── */}
        <SectionBlock label="Outcome">
          <p className="text-base md:text-lg leading-relaxed text-black font-medium whitespace-pre-line">
            {project.outcome}
          </p>
        </SectionBlock>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-32 md:mt-44 pt-12 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm font-medium text-slate-600">
              Want something like this?
            </p>
            <p className="text-xl font-bold text-black mt-1">
              Let's build together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* 1. View All Projects Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="w-full sm:w-auto"
            >
              <button
                onClick={() => navigate("/")}
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto 
                  bg-black/90 backdrop-blur-md border border-black/20 
                  text-white font-medium text-[15px] tracking-[-0.01em] 
                  px-8 py-4 rounded-2xl
                  hover:bg-black hover:border-black/30 
                  transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                  shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'var(--font-sans, "Geist", sans-serif)' }}
              >
                <span>All projects</span>
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
            </motion.div>

            {/* 2. Get In Touch Button */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full sm:w-auto"
            >
              <a
                href="mailto:thesalemhamis@gmail.com?subject=Let's%20build%20something"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  w-full
                  sm:w-auto

                  bg-black/[0.04]
                  backdrop-blur-2xl

                  border
                  border-black/15

                  text-black
                  font-medium
                  text-[15px]
                  tracking-[-0.01em]

                  px-8
                  py-4
                  rounded-2xl

                  hover:bg-black/[0.08]
                  hover:border-black/25

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  active:scale-[0.98]

                  shadow-sm
                "
                style={{ fontFamily: 'var(--font-sans, "Geist", sans-serif)' }}
              >
                <span>thesalemhamis@gmail.com</span>
                <svg
                  className="
                    w-4
                    h-4
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-0.5
                    group-hover:rotate-[-45deg]
                  "
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
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

/* ── Section Block Wrapper (Sentence Case Headings) ── */
function SectionBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.3}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 my-28 md:my-36"
    >
      <div className="md:col-span-5">
        <h2 className="text-sm font-semibold text-slate-500 tracking-wide">
          {label}
        </h2>
      </div>
      <div className="md:col-span-7">{children}</div>
    </motion.div>
  );
}