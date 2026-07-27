import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="
        section-dark
        relative
        overflow-hidden
        py-28
        md:py-40
        flex
        items-center
      "
    >

      {/* LIGHT BULB / SPOTLIGHT EFFECT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* main spotlight */}
        <div
          className="
            absolute
            left-1/2
            top-[18%]
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-white/[0.06]
            blur-[180px]
          "
        />

        {/* center glow */}
        <div
          className="
            absolute
            left-1/2
            top-[12%]
            -translate-x-1/2
            w-[240px]
            h-[240px]
            rounded-full
            bg-white/[0.12]
            blur-[90px]
          "
        />

        {/* subtle radial fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top center, rgba(255,255,255,0.08), transparent 45%)",
          }}
        />

        {/* soft grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at center, black 10%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 10%, transparent 80%)",
          }}
        />
      </div>

      <div className="container-edit relative z-10">

        <Reveal>
          <div
            className="
              max-w-5xl
              mx-auto
              text-center
              -mt-10
              md:-mt-16
            "
          >

            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_40px_rgba(255,255,255,0.06)]
                "
              >

                {/* icon glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-white/[0.04]
                    blur-xl
                  "
                />

                <Mail className="relative z-10 w-6 h-6 text-white/75" />
              </div>
            </motion.div>

            {/* HEADING */}
            <h2
              className="
                font-display
                text-white
                text-balance
              "
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.065em",
                fontWeight: 500,
              }}
            >
              Let's build something
              <br />
              people remember.
            </h2>

            {/* SUBTEXT */}
            <p
              className="
                mt-8
                max-w-2xl
                mx-auto
                text-white/50
              "
              style={{
                fontSize: "clamp(1rem, 2vw, 1.12rem)",
                lineHeight: 1.9,
                letterSpacing: "-0.02em",
              }}
            >
              {/* Modern websites. Clean experiences.
              <br />
              Designed to make your brand stand out and convert. */}
              A modern landing page, a full product experience,
              or a brand refresh. I build clean digital experiences
              designed to stand out and convert.
            </p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14"
            >
              <a
                href="mailto:thesalemhamis@gmail.com?subject=Let's%20build%20something"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5

                  bg-white/[0.06]
                  backdrop-blur-2xl

                  border
                  border-white/15

                  text-white
                  font-medium
                  text-[15px]
                  tracking-[-0.01em]

                  px-8
                  py-4
                  rounded-2xl

                  hover:bg-white/[0.09]
                  hover:border-white/25

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  active:scale-[0.98]

                  shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                "
                style={{
                  fontFamily: "var(--font-sans)",
                }}
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
        </Reveal>
      </div>
    </section>
  );
}
