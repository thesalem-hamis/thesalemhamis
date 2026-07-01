import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  { num: "01", title: "Website Design", desc: "Editorial, brand-driven interfaces that balance personality with clarity." },
  { num: "02", title: "Frontend Development", desc: "Production-grade React, Next.js, and TypeScript builds — fast, accessible, maintainable." },
  { num: "03", title: "Website Redesign", desc: "Modernize aging websites with refined systems, performance, and visual confidence." },
  { num: "04", title: "SEO-Friendly Structure", desc: "Semantic markup, performance budgets, and metadata that ship results, not theory." },
  { num: "05", title: "Modern Business Websites", desc: "Conversion-focused experiences tailored to hospitality, real estate, and local brands." },
];

export function Services() {
  return (
    <section id="services" className="bg-background text-foreground py-32 md:py-44 relative overflow-hidden">
      {/* subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-foreground/[0.025] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-edit grid grid-cols-12 gap-8 relative z-10">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground/30" /> services
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] text-balance">
              Design, Frontend, and Modern Web experiences.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-sm leading-relaxed">
              A focused practice working with founders and teams who care about
              how the product looks, feels, and performs.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-6">
          <div className="border-t border-border">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.05}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid grid-cols-12 gap-6 items-baseline py-10 border-b border-border hover:bg-foreground/[0.02] transition-colors"
                >
                  <div className="col-span-2 text-sm text-muted-foreground tabular-nums">{s.num}</div>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-3xl md:text-4xl group-hover:translate-x-1 transition-transform duration-500">
                      {s.title}
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-muted-foreground text-sm leading-relaxed md:pl-4">
                    {s.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


