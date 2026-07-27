//WHITE BACKGROUND HERO SECTION
import { motion } from "framer-motion";
import { useRef } from "react";
import avatarImage from "@/assets/salem-hamis(main).jpeg";

/* ── Flat large-square grid background ── */
function GridBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}

/* ── Avatar component with your image (slightly larger size) ── */
function Avatar() {
  return (
    <img 
      src={avatarImage} 
      alt="avatar" 
      className="w-full h-full object-cover"
    />
  );
}

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Animated paragraph variants with glow effect
const paragraphGlow = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.9, 
      delay: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  },
};

const paragraphTextGlow = {
  hidden: { color: "rgba(0,0,0,0.3)", textShadow: "0 0 0px rgba(0,0,0,0)" },
  visible: {
    color: "rgba(0,0,0,0.55)",
    textShadow: "0 0 8px rgba(0,0,0,0.08)",
    transition: { 
      duration: 1.2, 
      delay: 1.0,
      ease: "easeOut" as const 
    },
  },
};

/* headline lines — first word of each line is muted */
const lines: { text: string; muted: boolean }[][] = [
  [{ text: "Frontend", muted: true }, { text: "Developer", muted: false }],
  [{ text: "&", muted: true }, { text: "Designer,", muted: false }, { text: "Crafting", muted: false }],
  [{ text: "modern", muted: false }, { text: "digital", muted: false }],
  [{ text: "experiences.", muted: false }],
];

/* ── Hero ── */
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-28 pb-20 px-6 md:px-12 lg:px-20"
    >
      {/* Large flat grid */}
      <GridBg />

      {/* Subtle vignette so edges don't feel too harsh */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 50%, rgba(255,255,255,0.35) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto md:mx-0 w-full">

        {/* ── Avatar / availability badge (image slightly larger, name removed) ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/25 bg-white/90 backdrop-blur-sm pl-1.5 pr-3 py-1.5 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-black/15 flex-shrink-0">
            <Avatar />
          </div>
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inset-0 rounded-full bg-emerald-400/70 animate-ping" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
          </span>
        </motion.div>

        {/* ── Massive headline (Slightly reduced font size) ── */}
        <h1
          className="font-display leading-[0.93] tracking-[-0.03em] mb-10"
          style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
        >
          {lines.map((ln, li) => {
            let globalIdx = lines.slice(0, li).reduce((a, l) => a + l.length, 0);
            return (
              <span key={li} className="block overflow-hidden pb-[0.06em]">
                <span className="inline-flex flex-wrap gap-x-[0.22em]">
                  {ln.map((w, wi) => (
                    <motion.span
                      key={wi}
                      custom={globalIdx + wi}
                      variants={word}
                      initial="hidden"
                      animate="visible"
                      className={`inline-block font-black ${w.muted ? "text-black/25" : "text-black"}`}
                      style={{ transformOrigin: "center bottom" }}
                    >
                      {w.text}
                    </motion.span>
                  ))}
                </span>
              </span>
            );
          })}
        </h1>

        {/* ── Glassy Black CTA Button ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mb-10 w-full md:w-auto"
        >
          <a
            href="#contact"
            className="group flex md:inline-flex items-center justify-center gap-2.5 w-full md:w-auto 
              bg-black/85 backdrop-blur-md border border-white/20 
              text-white font-medium text-[15px] tracking-[-0.01em] 
              px-6 md:px-8 py-3.5 md:py-3.5 rounded-2xl md:rounded-2xl
              hover:bg-black/90 hover:border-white/30 
              transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
              shadow-lg hover:shadow-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span>Let's talk</span>
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
          </a>
        </motion.div>

        {/* ── Animated Sub copy with glow effect — using Inter for body text ── */}
        <motion.div
          variants={paragraphGlow}
          initial="hidden"
          animate="visible"
          className="max-w-md"
        >
          <motion.p
            variants={paragraphTextGlow}
            initial="hidden"
            animate="visible"
            className="text-[15px] md:text-base leading-relaxed"
            style={{ 
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              transition: "color 0.3s ease, text-shadow 0.3s ease"
            }}
          >
            I build modern, smart websites for businesses and brands 
            blending editorial design with precise frontend engineering.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}