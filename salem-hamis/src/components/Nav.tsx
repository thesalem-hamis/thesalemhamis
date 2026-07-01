// FINAL GEIFE FONT NAVBAR
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-bg.png";


const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function GridIcon() {
  return (
    <div
      className="grid grid-cols-3 gap-[2.5px] opacity-50 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="block w-[3.5px] h-[3.5px] bg-white rounded-[0.5px]" />
      ))}
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        /* Force Geist font for navigation elements */
        .nav-geist,
        .nav-geist * {
          font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif !important;
        }
        .mobile-nav-link {
          font-family: 'Geist', 'Inter', system-ui, -apple-system, sans-serif !important;
        }
      `}</style>
      
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center px-5 py-[14px]">
        {/* Outer glow border wrapper - narrower width */}
        <div className="relative w-full max-w-[520px]">

          {/* White glow border ring - glass effect around solid black */}
          <div
            className="absolute inset-[-2px] rounded-[12px] z-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,0.35) 100%)",
              boxShadow: "0 0 28px rgba(255,255,255,0.2), 0 0 14px rgba(255,255,255,0.1), inset 0 0 18px rgba(255,255,255,0.06)",
            }}
          />

          {/* Inner pill — SOLID BLACK (no transparency) */}
          <div
            className={`
              relative z-10 flex items-center justify-between h-[56px] px-5
              rounded-[10px] border transition-all duration-500
              ${scrolled || open
                ? "bg-black border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.1)]"
                : "bg-black border-white/20 shadow-[0_6px_24px_rgba(0,0,0,0.6),0_0_16px_rgba(255,255,255,0.08)]"
              }
            `}
          >
            {/* Logo - larger size */}
            <a href="#top" onClick={() => setOpen(false)} className="flex-shrink-0">
              <img src={logo} alt="Salem Hamis" width={80} height={80} className="invert brightness-0" />
            </a>

            {/* Desktop nav — using Geist font with nav-geist class */}
            <nav className="hidden md:flex items-center gap-6 nav-geist">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-250"
                >
                  {l.label}
                </a>
              ))}
              {/* Grid icon sits right after last link */}
              <GridIcon />
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className={`block w-[20px] h-px bg-white/80 transition-all duration-300 origin-center ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block w-[20px] h-px bg-white/80 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-[20px] h-px bg-white/80 transition-all duration-300 origin-center ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay - solid black with Geist font */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-black flex flex-col pt-[96px] px-8 pb-10"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[42px] font-semibold tracking-tight text-white/90 py-3 border-b border-white/[0.1] hover:text-white transition-colors mobile-nav-link"
                >
                  {l.label}
                </motion.a>
              ))}

              {/* White button with black text - matching hero section style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 w-full"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-center gap-2.5 w-full 
                    bg-white text-black border border-white/20 
                    font-medium text-[15px] tracking-[-0.01em] 
                    px-6 py-3.5 rounded-2xl
                    hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300
                    shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Geist', 'Inter', system-ui, sans-serif" }}
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}