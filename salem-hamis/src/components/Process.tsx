import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding the brand, the audience, and what success looks like." },
  { num: "02", title: "Design Direction", desc: "Setting tone, type, and visual language through focused exploration." },
  { num: "03", title: "Development", desc: "Production-quality frontend builds, optimised for speed and clarity." },
  { num: "04", title: "Launch", desc: "Refined handoff, polish, performance, and post-launch support." },
];

export function Process() {
  return (
    <section className="bg-background text-foreground py-32 md:py-44">
      <div className="container-edit">
        <Reveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground/30" /> process
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-balance">
              {/* a calm, deliberate way of working. */}
              My process and method of working.
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-border">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-6 py-10 border-b border-border items-baseline">
                <div className="col-span-2 md:col-span-1 text-sm text-muted-foreground tabular-nums">{s.num}</div>
                <h3 className="col-span-10 md:col-span-5 font-display text-2xl md:text-4xl">{s.title}</h3>
                <p className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed md:pl-8 max-w-lg">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

