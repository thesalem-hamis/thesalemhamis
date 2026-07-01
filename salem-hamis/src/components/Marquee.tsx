const items = [
  "Revenue-Generating Websites",
  "Conversion-Focused Experiences",
  "High-Converting Landing Pages",
  "Premium Digital Experiences",
  "Growth-Driven Web Apps",
  "Booking & Reservation Platforms",
  "Built For Scale",
];

export function Marquee() {
  return (
    <section className="section-dark py-10 border-y border-white/[0.06] overflow-hidden relative font-sans">
      
      {/* Heading — NO fade on mobile */}
      <div className="relative z-20 mb-8 text-center px-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white font-bold">
          Built for Brands, Business Growth & Startups
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges — only affects marquee */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black via-black/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black via-black/95 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className={`flex items-center gap-16 uppercase tracking-[0.18em] text-sm ${
                i % 2 === 0 ? "text-white/70" : "text-white/35"
              }`}
            >
              {it}
              <span className="text-white/15">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
