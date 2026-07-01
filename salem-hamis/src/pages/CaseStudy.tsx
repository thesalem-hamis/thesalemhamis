import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject } from "@/data/Projects";

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

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project not found</h1>
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
      className="min-h-screen bg-background text-foreground"
    >
      {/* ── Nav bar ── */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to portfolio
        </button>

        {project.href !== "#" && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Live site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* ── Hero ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden"
      >
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-16">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3"
          >
            {project.industry} · {project.year}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-display text-white"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 300,
            }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-4 text-white/60 text-base md:text-lg max-w-xl"
          >
            {project.tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Tech stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="flex flex-wrap gap-2 mb-16"
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Overview */}
        <Section delay={0.4} label="Overview" body={project.overview} />

        {/* Challenge */}
        <Section delay={0.45} label="The Challenge" body={project.challenge} />

        {/* Solution */}
        <Section delay={0.5} label="The Solution" body={project.solution} />

        {/* Outcome */}
        <Section delay={0.55} label="The Outcome" body={project.outcome} />

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-20"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground/30" />
              Gallery
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mt-24 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm text-muted-foreground">Want something like this?</p>
            <p className="text-lg font-medium text-foreground mt-1">Let's build together.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </button>
            <a
              href="mailto:thesalemhamis@gmail.com?subject=Let's%20build%20something"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all duration-200"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Reusable section block ── */
function Section({ label, body, delay }: { label: string; body: string; delay: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
      initial="hidden"
      animate="visible"
      className="mb-14"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 flex items-center gap-3">
        <span className="w-8 h-px bg-foreground/30" />
        {label}
      </p>
      <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl">
        {body}
      </p>
    </motion.div>
  );
}


