"use client";

interface CompanyDetails {
  company: string;
  email: string;
  address: string;
}

const company: CompanyDetails = {
  company: "CLP Equipment Limited",
  email: "CLP.equipment.ltd@linuxmail.org",
  address: "102 Village Trce, Kingston, TN 37763",
};

function MapPin() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1C5.79 1 4 2.79 4 5c0 3.25 4 10 4 10s4-6.75 4-10c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 8 3a1.5 1.5 0 0 1 0 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3 7 9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6.5H12M7.5 2L12 6.5L7.5 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Locations() {
  const emailHref = `mailto:${company.email}`;

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address,
  )}`;

  return (
    <section
      id="contact"
      className="w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.2em] text-[#F5C400]">
              Get In Touch
            </p>

            <h2
              id="locations-heading"
              className="text-[30px] font-800 leading-[1.05] tracking-tight text-[#111111] sm:text-[36px] lg:text-[42px]"
            >
              Contact Us
            </h2>
          </div>

          <p className="max-w-md text-[14px] leading-relaxed text-[#6B7280] lg:text-right">
            Have a question about equipment, parts or service? Connect with the
            CLP Equipment Limited team.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="grid overflow-hidden border border-gray-200 bg-white lg:grid-cols-[0.85fr_1.15fr]">
          {/* Company Panel */}
          <div className="relative overflow-hidden bg-[#111111] p-7 sm:p-9 lg:p-12">
            {/* Yellow accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#F5C400]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#F5C400] text-[#111111]">
                  <MapPin />
                </div>

                <p className="mb-2 text-[10px] font-700 uppercase tracking-[0.18em] text-[#F5C400]">
                  Company
                </p>

                <h3 className="max-w-sm text-[26px] font-800 leading-tight tracking-tight text-white sm:text-[30px]">
                  {company.company}
                </h3>
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-[10px] font-700 uppercase tracking-[0.16em] text-white/40">
                  Our Location
                </p>

                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/75">
                  {company.address}
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full border-[24px] border-[#F5C400]/10" />
          </div>

          {/* Contact Details */}
          <div className="p-7 sm:p-9 lg:p-12">
            <div className="mb-8">
              <p className="text-[10px] font-700 uppercase tracking-[0.18em] text-[#999999]">
                Contact Details
              </p>

              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-[#666666]">
                Reach our team directly using the information below.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="min-w-0 border border-gray-100 bg-[#F8F8F8] p-5 transition-all duration-200 hover:border-[#F5C400]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center bg-[#F5C400] text-[#111111]">
                  <MailIcon />
                </div>

                <p className="mb-1 text-[10px] font-700 uppercase tracking-[0.16em] text-[#999999]">
                  Email
                </p>

                <a
                  href={emailHref}
                  className="block break-words text-[14px] font-700 text-[#111111] transition-colors hover:text-[#F5C400] focus:outline-none focus-visible:underline sm:text-[15px]"
                >
                  {company.email}
                </a>
              </div>

              {/* Address */}
              <div className="min-w-0 border border-gray-100 bg-[#F8F8F8] p-5 transition-all duration-200 hover:border-[#F5C400]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center bg-[#F5C400] text-[#111111]">
                  <MapPin />
                </div>

                <p className="mb-1 text-[10px] font-700 uppercase tracking-[0.16em] text-[#999999]">
                  Address
                </p>

                <address className="not-italic text-[14px] font-600 leading-relaxed text-[#111111]">
                  {company.address}
                </address>
              </div>
            </div>

            {/* Directions */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111111] px-5 py-3 text-[11px] font-700 uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#F5C400] hover:text-[#111111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400] focus-visible:ring-offset-2"
              >
                Get Directions
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="mt-4 flex flex-col gap-3 border border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[12px] text-[#777777]">
            Looking for equipment, parts or service support?
          </p>

          <a
            href={emailHref}
            className="inline-flex items-center gap-2 text-[11px] font-700 uppercase tracking-[0.08em] text-[#111111] transition-colors hover:text-[#F5C400]"
          >
            <MailIcon />
            Email Us
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
