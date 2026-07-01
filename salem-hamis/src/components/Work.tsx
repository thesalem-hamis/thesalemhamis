// import { Reveal } from "./Reveal";
// import hospitality from "@/assets/work-hospitality.jpg";
// import realestate from "@/assets/work-realestate.jpg";
// import course from "@/assets/work-course.jpg";
// import restaurant from "@/assets/work-restaurant.jpg";

// const projects = [
//   {
//     title: "Maison Reserve",
//     desc: "Luxury reservation platform for hotels, restaurants, and lounges.",
//     industry: "Hospitality",
//     stack: "Next.js · Framer Motion",
//     image: hospitality,
//     href: "#",
//   },
//   {
//     title: "Northline Estates",
//     desc: "Modern property showcase with premium branding and listings.",
//     industry: "Real Estate",
//     stack: "Next.js · GSAP · Mapbox",
//     image: realestate,
//     href: "#",
//   },
//   {
//     title: "Studio Method",
//     desc: "Minimal conversion-focused educational landing page.",
//     industry: "Education",
//     stack: "React · Tailwind · Stripe",
//     image: course,
//     href: "#",
//   },
//   {
//     title: "Nori Restaurant",
//     desc: "Clean reservation-focused experience for a modern kitchen.",
//     industry: "Restaurant",
//     stack: "Next.js · Resend · OpenTable",
//     image: restaurant,
//     href: "#",
//   },
// ];

// function AnimatedGrid() {
//   return (
//     <div
//       className="absolute inset-0 pointer-events-none"
//       aria-hidden
//       style={{
//         backgroundImage: `
//           linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
//         `,
//         backgroundSize: "72px 72px",
//         animation: "gridPulse 4s ease-in-out infinite",
//       }}
//     />
//   );
// }

// function ArrowUpRight() {
//   return (
//     <svg
//       width={10}
//       height={10}
//       viewBox="0 0 12 12"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//     >
//       <line x1="2" y1="10" x2="10" y2="2" />
//       <polyline points="4,2 10,2 10,8" />
//     </svg>
//   );
// }

// export function Work() {
//   return (
//     <>
//       <style>{`
//         @keyframes gridPulse { 0%,100%{opacity:0.6;} 50%{opacity:1;} }

//         .work-arrow { transition: background 0.22s, transform 0.35s cubic-bezier(0.22,1,0.36,1); }
//         .work-btn:hover .work-arrow { background: rgba(0,0,0,0.18) !important; transform: translate(3px,-3px); }

//         .work-img { transition: transform 1.1s cubic-bezier(0.22,1,0.36,1); }
//         .work-card:hover .work-img { transform: scale(1.05); }

//         .work-card {
//           transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
//           background: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.22) 100%);
//           box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 0 0 2px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2);
//         }
//         .work-card:hover { 
//           transform: translateY(-4px);
//           background: linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.28) 100%);
//           box-shadow: 0 0 0 1.5px rgba(255,255,255,0.5), 0 0 0 3px rgba(255,255,255,0.15), 0 12px 40px rgba(0,0,0,0.3);
//         }
//       `}</style>

//       <section
//         id="work"
//         className="section-dark py-24 md:py-36 relative overflow-hidden"
//       >
//         <AnimatedGrid />

//         <div className="absolute inset-0 pointer-events-none" aria-hidden>
//           <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-white/[0.08] blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-white/[0.06] blur-3xl" />
//         </div>

//         <div className="container-edit relative">

//           {/* ── Heading ── */}
//           <Reveal>
//             <div className="flex flex-col gap-6 mb-14 md:mb-20">
//               <div className="flex items-end justify-between flex-wrap gap-6">
//                 <div>
//                   <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5 flex items-center gap-3">
//                     <span className="w-7 h-px bg-white/30" />
//                     case studies
//                   </p>
//                   <h1
//                     className="leading-[1.08] text-balance text-white"
//                     style={{
//                       fontFamily: "'Inter', system-ui, sans-serif",
//                       fontSize: "clamp(2.5rem, 6vw, 4.5rem) ",
//                       fontWeight: 280,
//                       letterSpacing: "-0.04em",
//                     }}
//                   >
//                     Thoughtful, Results Driven Work, Built to Perform.
//                   </h1>
//                 </div>

//                 <p
//                   className="text-white/46 leading-[1.72] max-w-[300px]"
//                   style={{
//                     fontFamily: "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
//                     fontSize: 14,
//                     fontWeight: 400,
//                     letterSpacing: "0.005em",
//                   }}
//                 >
//                   Every project ships with a clear business objective. Whether
//                   that's conversion, retention, or scale. Good design and solid
//                   engineering, no fluff.
//                 </p>
//               </div>
//             </div>
//           </Reveal>

//           {/* ── Bento grid ── */}
//           <div className="hidden md:grid md:grid-cols-12 gap-3 md:auto-rows-fr">
//             {/* Row 1 — wide left */}
//             <Reveal delay={0.05} className="md:col-span-7">
//               <BentoCard project={projects[0]} />
//             </Reveal>
//             <Reveal delay={0.1} className="md:col-span-5">
//               <BentoCard project={projects[1]} />
//             </Reveal>

//             {/* Row 2 — wide right (diagonal mirror) */}
//             <Reveal delay={0.05} className="md:col-span-5">
//               <BentoCard project={projects[2]} />
//             </Reveal>
//             <Reveal delay={0.1} className="md:col-span-7">
//               <BentoCard project={projects[3]} />
//             </Reveal>
//           </div>

//           {/* Mobile — single column */}
//           <div className="flex flex-col gap-3 md:hidden">
//             {projects.map((p, i) => (
//               <Reveal key={p.title} delay={i * 0.05}>
//                 <BentoCard project={p} />
//               </Reveal>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// function BentoCard({ project: p }: { project: (typeof projects)[0] }) {
//   return (
//     <div className="work-card h-full rounded-2xl p-px">
//       <div className="flex flex-col h-full rounded-[15px] overflow-hidden bg-[#0a0a0a]">

//         {/* Image - fixed equal height for all cards */}
//         <div className="relative overflow-hidden h-[220px] md:h-[260px] flex-shrink-0">
//           <img
//             src={p.image}
//             alt={p.title}
//             loading="lazy"
//             className="work-img w-full h-full object-cover opacity-90"
//           />
//           {/* Top shimmer edge */}
//           <div
//             className="absolute inset-x-0 top-0 h-px pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//             }}
//           />
//           {/* Bottom subtle fade */}
//           <div
//             className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"
//           />
//         </div>

//         {/* Text + button */}
//         <div
//           className="flex flex-col gap-1.5 p-5 md:p-6 flex-1"
//           style={{ background: "#000" }}
//         >
//           <div
//             className="flex items-center gap-2 text-white/32 mb-1"
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontSize: 9,
//               letterSpacing: "0.22em",
//               textTransform: "uppercase",
//             }}
//           >
//             <span>{p.industry}</span>
//             <span className="text-white/13">/</span>
//             <span>{p.stack}</span>
//           </div>

//           <h3
//             className="text-white leading-tight"
//             style={{
//               fontFamily: "'Inter', system-ui, sans-serif",
//               fontSize: "clamp(1rem, 1.7vw, 1.25rem)",
//               fontWeight: 400,
//               letterSpacing: "-0.03em",
//             }}
//           >
//             {p.title}
//           </h3>

//           <p
//             className="text-white/42 leading-relaxed"
//             style={{
//               fontFamily: "'Geist', 'Inter', sans-serif",
//               fontSize: 12,
//               fontWeight: 400,
//             }}
//           >
//             {p.desc}
//           </p>

//           <a
//             href={p.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex md:inline-flex items-center justify-center gap-2.5 w-[65%] sm:w-fit 
//               bg-white/88 backdrop-blur-md border border-white/40 
//               text-[#1a1a1a] font-medium text-[13px] tracking-[-0.01em] 
//               px-6 md:px-7 py-3 rounded-xl md:rounded-xl
//               hover:bg-white/95 hover:border-white/60 
//               transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
//               shadow-lg hover:shadow-xl mt-2"
//             style={{ fontFamily: "'Inter', sans-serif" }}

//             //THE GLASSY BUTTON FEEL
//           // href={p.href}
//           // target="_blank"
//           // rel="noopener noreferrer"
//           // className="group inline-flex items-center justify-center gap-2.5
//           //   w-fit min-w-[160px]
//           //   relative overflow-hidden

//           //   bg-white/[0.16]
//           //   backdrop-blur-2xl
//           //   border border-white/[0.22]

//           //   text-white
//           //   font-medium text-[13px]
//           //   tracking-[-0.01em]

//           //   px-5 py-2.5
//           //   rounded-xl

//           //   transition-all duration-500
//           //   hover:scale-[1.03]
//           //   active:scale-[0.98]

//           //   hover:bg-white/[0.22]
//           //   hover:border-white/[0.30]

//           //   shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_20px_rgba(255,255,255,0.08),0_8px_40px_rgba(255,255,255,0.10)]
//           //   hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_30px_rgba(255,255,255,0.16),0_12px_50px_rgba(255,255,255,0.14)]
//           // "
//           >
//             <span>View site</span>
//             <svg 
//               className="w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-45deg]" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               strokeWidth="2.5"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 d="M13 7l5 5m0 0l-5 5m5-5H6" 
//               />
//             </svg>
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { Reveal } from "./Reveal";
import hospitality from "@/assets/work-hospitality.jpg";
import realestate from "@/assets/work-realestate.jpg";
import course from "@/assets/work-course.jpg";
import restaurant from "@/assets/work-restaurant.jpg";

const projects = [
  {
    id: "maison-reserve",
    title: "Maison Reserve",
    desc: "Luxury reservation platform for hotels, restaurants, and lounges.",
    industry: "Hospitality",
    stack: "Next.js · Framer Motion",
    image: hospitality,
  },
  {
    id: "northline-estates",
    title: "Northline Estates",
    desc: "Modern property showcase with premium branding and listings.",
    industry: "Real Estate",
    stack: "Next.js · GSAP · Mapbox",
    image: realestate,
  },
  {
    id: "studio-method",
    title: "Studio Method",
    desc: "Minimal conversion-focused educational landing page.",
    industry: "Education",
    stack: "React · Tailwind · Stripe",
    image: course,
  },
  {
    id: "nori-restaurant",
    title: "Nori Restaurant",
    desc: "Clean reservation-focused experience for a modern kitchen.",
    industry: "Restaurant",
    stack: "Next.js · Resend · OpenTable",
    image: restaurant,
  },
];

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

        .work-img { transition: transform 1.1s cubic-bezier(0.22,1,0.36,1); }
        .work-card:hover .work-img { transform: scale(1.05); }

        .work-card {
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
          background: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.22) 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 0 0 2px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2);
        }
        .work-card:hover {
          transform: translateY(-4px);
          background: linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.28) 100%);
          box-shadow: 0 0 0 1.5px rgba(255,255,255,0.5), 0 0 0 3px rgba(255,255,255,0.15), 0 12px 40px rgba(0,0,0,0.3);
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

        <div className="container-edit relative">

          {/* ── Heading ── */}
          <Reveal>
            <div className="flex flex-col gap-6 mb-14 md:mb-20">
              <div className="flex items-end justify-between flex-wrap gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5 flex items-center gap-3">
                    <span className="w-7 h-px bg-white/30" />
                    case studies
                  </p>
                  <h1
                    className="leading-[1.08] text-balance text-white"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
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
                    fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
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

          {/* ── Bento grid — desktop ── */}
          <div className="hidden md:grid md:grid-cols-12 gap-3 md:auto-rows-fr">
            <Reveal delay={0.05} className="md:col-span-7">
              <BentoCard project={projects[0]} />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <BentoCard project={projects[1]} />
            </Reveal>
            <Reveal delay={0.05} className="md:col-span-5">
              <BentoCard project={projects[2]} />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              <BentoCard project={projects[3]} />
            </Reveal>
          </div>

          {/* ── Single column — mobile ── */}
          <div className="flex flex-col gap-3 md:hidden">
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

function BentoCard({ project: p }: { project: (typeof projects)[0] }) {
  const navigate = useNavigate();

  return (
    <div
      className="work-card h-full rounded-2xl p-px cursor-pointer"
      onClick={() => navigate(`/work/${p.id}`)}
    >
      <div className="flex flex-col h-full rounded-[15px] overflow-hidden bg-[#0a0a0a]">

        {/* Image */}
        <div className="relative overflow-hidden h-[220px] md:h-[260px] flex-shrink-0">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="work-img w-full h-full object-cover opacity-90"
          />
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Text + button */}
        <div
          className="flex flex-col gap-1.5 p-5 md:p-6 flex-1"
          style={{ background: "#000" }}
        >
          <div
            className="flex items-center gap-2 text-white/32 mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span>{p.industry}</span>
            <span className="text-white/13">/</span>
            <span>{p.stack}</span>
          </div>

          <h3
            className="text-white leading-tight"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(1rem, 1.7vw, 1.25rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            {p.title}
          </h3>

          <p
            className="text-white/42 leading-relaxed"
            style={{
              fontFamily: "'Geist', 'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            {p.desc}
          </p>

          {/* Button — stops propagation so only button click navigates, not double-fire */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/work/${p.id}`);
            }}
            className="group flex md:inline-flex items-center justify-center gap-2.5 w-[65%] sm:w-fit
              bg-white/88 backdrop-blur-md border border-white/40
              text-[#1a1a1a] font-medium text-[13px] tracking-[-0.01em]
              px-6 md:px-7 py-3 rounded-xl
              hover:bg-white/95 hover:border-white/60
              transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
              shadow-lg hover:shadow-xl mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>View case study</span>
            <svg
              className="w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-45deg]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}