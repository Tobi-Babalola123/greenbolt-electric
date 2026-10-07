"use client";

export default function PeopleSection() {
  return (
    <section
      className="w-full relative overflow-hidden bg-[#111111]"
      style={{ minHeight: "480px" }}
      aria-label="Our team"
    >
      {/* Full-bleed image */}
      <img
        src="https://images.unsplash.com/photo-1652303518379-c0ef1c9fb2b1?w=1920&h=700&fit=crop&auto=format"
        alt="Equipment professionals in safety vests standing in front of a construction vehicle, representing the team at Tractor & Equipment Company"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content card */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-lg">
            <p className="inline-flex items-center gap-2 mb-5">
              <span
                className="block w-5 h-px bg-[#F5C400]"
                aria-hidden="true"
              />
              <span className="text-[10px] font-700 tracking-[0.2em] text-[#F5C400] uppercase">
                People Behind the Equipment
              </span>
            </p>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-800 leading-[1.1] text-white mb-5 tracking-tight">
              More Than
              <br />
              Equipment
            </h2>

            <p className="text-[15px] text-white/75 leading-relaxed mb-8 max-w-sm">
              From the machines we provide to the people who keep them running,
              our team is committed to helping customers get more from their
              equipment.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-[13px] font-700 tracking-wide px-5 py-3 hover:border-[#F5C400] hover:text-[#F5C400] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400]"
            >
              Meet Our Team
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
          </div>
        </div>
      </div>
    </section>
  );
}
