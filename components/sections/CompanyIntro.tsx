"use client";

const stats = [
  { label: "Years of Experience", value: "75+" },
  { label: "Service Locations", value: "10+" },
  { label: "Customers Supported", value: "5,000+" },
];

const pillars = [
  { icon: "◆", label: "Experienced Team" },
  { icon: "◆", label: "Parts & Service" },
  { icon: "◆", label: "Equipment Solutions" },
];

export default function CompanyIntro() {
  return (
    <section
      id="about"
      className="w-full bg-white overflow-hidden"
      aria-labelledby="intro-heading"
    >
      <div className="grid lg:grid-cols-[1fr_480px_1fr] min-h-[560px]">
        {/* Left image */}
        <div className="hidden lg:block relative bg-[#111111] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560872531-552417aded86?w=700&h=600&fit=crop&auto=format"
            alt="Aerial view of a yellow excavator working on a construction site"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5"
            aria-hidden="true"
          />
        </div>

        {/* Center content panel */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-16 lg:py-20 bg-white border-x border-gray-100">
          <p className="text-[10px] font-700 tracking-[0.2em] text-[#F5C400] uppercase mb-4">
            Tractor &amp; Equipment Company
          </p>

          <h2
            id="intro-heading"
            className="text-[30px] sm:text-[36px] lg:text-[38px] font-800 leading-[1.1] text-[#111111] mb-6 tracking-tight"
          >
            Equipment.
            <br />
            Expertise.
            <br />
            Support.
          </h2>

          {/* Yellow accent line */}
          <div className="w-10 h-[3px] bg-[#F5C400] mb-6" aria-hidden="true" />

          <p className="text-[13px] font-700 tracking-widest text-[#F5C400] uppercase mb-3">
            Going the Extra Mile
          </p>

          <p className="text-[15px] text-[#555] leading-relaxed mb-8 max-w-sm">
            We provide dependable heavy equipment solutions backed by
            experienced people, responsive service and the support your
            operation needs to keep moving.
          </p>

          {/* Pillars */}
          <div className="flex flex-col gap-2.5 mb-10">
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <span className="text-[6px] text-[#F5C400]" aria-hidden="true">
                  {p.icon}
                </span>
                <span className="text-[13px] font-600 text-[#333] tracking-wide">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[13px] font-700 tracking-wide text-[#111111] border border-[#111111] px-5 py-2.5 hover:bg-[#111111] hover:text-white transition-colors duration-150 self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            About Our Company
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1.5 6.5H11.5M7.5 2.5L11.5 6.5L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-100">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[22px] font-800 text-[#111111] leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-[10px] font-600 text-[#999] tracking-wide uppercase leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block relative bg-[#111111] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1669902081596-18497f52659e?w=700&h=600&fit=crop&auto=format"
            alt="Yellow bulldozer operating in a field"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
        </div>

        {/* Mobile image (shown on small screens only) */}
        <div className="lg:hidden w-full h-64 bg-[#111111] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560872531-552417aded86?w=900&h=400&fit=crop&auto=format"
            alt="Excavator working at a construction site"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
