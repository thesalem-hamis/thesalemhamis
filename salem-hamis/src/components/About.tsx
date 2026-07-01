import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiTypescript, 
  SiTailwindcss 
} from "react-icons/si";

/* ── Framer variants ── */
const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.1 + i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const paragraphGlow = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lines: { text: string; muted: boolean }[][] = [
  [{ text: "I'm Salem Hamis.", muted: false }],
  [{ text: "I", muted: false }, { text: "build", muted: false }, { text: "websites", muted: false }],
  [{ text: "that", muted: false}, { text: "turn", muted: false }, { text: "visitors", muted: false }],
  [{ text: "into", muted: false }, { text: "customers.", muted: false }],
];

/* ── Tech stack items with proper icons ── */
const stack = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind", icon: SiTailwindcss },
];

/* ── Orbit ring ── */
function OrbitRing() {
  const count = stack.length;
  const radius = 130;
  const cx = 160;
  const cy = 160;
  const size = cx * 2;

  return (
    <div
      className="relative hidden lg:flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* faint dashed orbit track */}
      <div
        className="absolute rounded-full"
        style={{
          width: radius * 2,
          height: radius * 2,
          border: "1px dashed rgba(255,255,255,0.12)",
          top: cy - radius,
          left: cx - radius,
        }}
      />

      {/* centre dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "rgba(255,255,255,0.18)",
          top: cy - 3,
          left: cx - 3,
        }}
      />

      {/* orbiting pills */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {stack.map((item, i) => {
          const Icon = item.icon;
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const x = cx + radius * Math.cos(angle) - 44;
          const y = cy + radius * Math.sin(angle) - 18;
          return (
            <motion.div
              key={item.label}
              className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                left: x,
                top: y,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.13)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                fontFamily: "'Geist','Inter',system-ui,sans-serif",
                whiteSpace: "nowrap",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ── Mobile horizontal scroll strip ── */
function StackStrip() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1.1}
      className="flex lg:hidden flex-wrap gap-2 mt-10"
    >
      {stack.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.13)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "'Geist','Inter',system-ui,sans-serif",
            }}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </div>
        );
      })}
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.3], [16, 4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 1], [0.92, 1, 1.02]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section
      ref={ref}
      id="about"
      className="section-dark py-36 md:py-52 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, #0a0a0a 100%)",
        }}
      />

      {/* bottom blur */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: "180px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
        }}
      />

      <motion.div
        style={{ y, scale, filter: blurFilter, opacity }}
        className="container-edit relative w-full z-[2]"
      >
        {/* two-column layout on desktop */}
        <div className="flex items-center justify-between gap-12">
          {/* ── Left: all the text ── */}
          <div className="flex-1 min-w-0">
            {/* headline */}
            <h2
              className="font-display leading-[0.93] tracking-[-0.03em] mb-10 max-w-6xl"
              style={{ fontSize: "clamp(2.8rem, 8.5vw, 6.5rem)" }}
            >
              {lines.map((ln, li) => {
                const globalIdx = lines.slice(0, li).reduce((a, l) => a + l.length, 0);
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
                          className={`inline-block font-black ${
                            w.muted ? "text-white/20" : "text-white/60"
                          }`}
                          style={{ transformOrigin: "center bottom" }}
                        >
                          {w.text}
                        </motion.span>
                      ))}
                    </span>
                  </span>
                );
              })}
            </h2>

            {/* sub copy */}
            <motion.p
              variants={paragraphGlow}
              initial="hidden"
              animate="visible"
              className="max-w-md text-[15px] md:text-base leading-relaxed"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Conversion-focused frontend development and design. No fluff — just
              fast, sharp, purposeful websites that make your brand impossible to
              ignore.
            </motion.p>

            {/* mobile stack strip */}
            <StackStrip />

            {/* divider + cta */}
            <div
              className="mt-12 pt-10 flex items-center gap-8 flex-wrap"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#work"
                  className="group flex items-center justify-center gap-2.5
                    bg-white text-black border border-white/20
                    font-medium text-[15px] tracking-[-0.01em]
                    px-6 py-3.5 rounded-2xl
                    hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Geist', 'Inter', system-ui, sans-serif" }}
                >
                  <span>Let's work together</span>
                  <svg
                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-45deg]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* ── Right: orbit ring (desktop only) ── */}
          <OrbitRing />
        </div>
      </motion.div>
    </section>
  );
}


