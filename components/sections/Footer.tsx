"use client";
import { Zap, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Greenbolt Electric home"
      className="inline-flex items-center gap-[10px] no-underline"
    >
      {/* Logo mark */}
      <span
        className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[8px] ${
          light ? "bg-[#68e236] text-[#10140f]" : "bg-[#68e236] text-[#10140f]"
        }`}
      >
        <Zap size={25} strokeWidth={3} fill="currentColor" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col justify-center leading-none">
        <strong
          className={`font-[family-name:var(--font-heading)] text-[23px] font-extrabold tracking-[-0.02em] ${
            light ? "text-white" : "text-[#10140f]"
          }`}
        >
          GREENBOLT
        </strong>

        <small
          className={`mt-[2px] font-[family-name:var(--font-body)] text-[9px] font-bold uppercase tracking-[0.24em] ${
            light ? "text-[#68e236]" : "text-[#43c91a]"
          }`}
        >
          ELECTRIC
        </small>
      </span>
    </a>
  );
}

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Our Work", "#work"],
  ["Service Areas", "#areas"],
  ["Contact", "#contact"],
];

const areas = ["Spicewood", "Horseshoe Bay", "Lakeway", "Bee Cave"];
const EMAIL = "GreenboltElectric@gmail.com";

const PHONE_LINK = "tel:+15122015427";
const PHONE_DISPLAY = "(512) 201-5427";

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline";
  className?: string;
}) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`}>
      {children}
    </a>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#0b0f0b] text-white">
      {/* Main footer */}
      <div
        className="
          mx-auto
          grid
          w-[min(1180px,calc(100%-48px))]
          grid-cols-[1.5fr_0.75fr_0.9fr_0.9fr_1fr]
          gap-[50px]
          py-[75px]
          max-[900px]:grid-cols-2
          max-[900px]:gap-x-[45px]
          max-[900px]:gap-y-[50px]
          max-[640px]:w-[min(100%-32px,1180px)]
          max-[640px]:grid-cols-1
          max-[640px]:gap-[38px]
          max-[640px]:py-[60px]
        "
      >
        {/* Brand */}
        <div className="max-w-[310px] max-[640px]:max-w-none">
          <Logo light />

          <p className="mt-[20px] font-[family-name:var(--font-body)] text-[12px] leading-[1.7] text-[#8f998d]">
            Family-owned electrical service for homes, properties, and specialty
            projects throughout the Highland Lakes area.
          </p>

          <a
            href={PHONE_LINK}
            className="
              mt-[22px]
              inline-flex
              items-center
              gap-[8px]
              font-[family-name:var(--font-body)]
              text-[14px]
              font-bold
              text-white
              no-underline
              transition-colors
              duration-200
              hover:text-[#68e236]
            "
          >
            <Phone size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-[20px] font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.13em] text-[#68e236]">
            Navigation
          </h3>

          <ul className="m-0 list-none space-y-[11px] p-0">
            {navItems.slice(0, 5).map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="
                    font-[family-name:var(--font-body)]
                    text-[12px]
                    text-[#a9b2a6]
                    no-underline
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-[20px] font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.13em] text-[#68e236]">
            Services
          </h3>

          <ul className="m-0 list-none space-y-[11px] p-0">
            <li>
              <a
                href="#services"
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
              >
                Electrical Repairs
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
              >
                Panel Upgrades
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
              >
                Lighting & Fixtures
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
              >
                Remodeling Electrical
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
              >
                Outdoor & Specialty
              </a>
            </li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="mb-[20px] font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.13em] text-[#68e236]">
            Service Areas
          </h3>

          <ul className="m-0 list-none space-y-[11px] p-0">
            {areas.map((area) => (
              <li
                key={area}
                className="font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6]"
              >
                {area}, TX
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-[20px] font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.13em] text-[#68e236]">
            Contact
          </h3>

          <div className="flex flex-col items-start">
            <a
              href={PHONE_LINK}
              className="font-[family-name:var(--font-body)] text-[13px] font-semibold text-white no-underline transition-colors duration-200 hover:text-[#68e236]"
            >
              {PHONE_DISPLAY}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-[8px] break-all font-[family-name:var(--font-body)] text-[12px] text-[#a9b2a6] no-underline transition-colors duration-200 hover:text-white"
            >
              {EMAIL}
            </a>

            <p className="mt-[8px] font-[family-name:var(--font-body)] text-[12px] text-[#8f998d]">
              Spicewood, Texas
            </p>

            <ButtonLink
              href="#contact"
              className="
    mt-[20px]
    w-fit
    max-w-full
    whitespace-nowrap
    border-[#68e236]
    bg-[#68e236]
    px-[20px]
    py-[11px]
    text-[13px]
    text-[#10140f]
    shadow-[0_3px_0_#050805]
    hover:bg-[#43c91a]
    hover:shadow-[0_5px_0_#050805]
  "
            >
              Request Service
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div
          className="
            mx-auto
            flex
            w-[min(1180px,calc(100%-48px))]
            items-center
            justify-between
            gap-[20px]
            py-[20px]
            max-[640px]:w-[min(100%-32px,1180px)]
            max-[640px]:flex-col
            max-[640px]:items-start
            max-[640px]:gap-[7px]
          "
        >
          <p className="m-0 font-[family-name:var(--font-body)] text-[10px] text-[#687168]">
            © 2026 Greenbolt Electric. All rights reserved.
          </p>

          <p className="m-0 font-[family-name:var(--font-body)] text-[10px] text-[#687168]">
            Family owned. Locally operated.
          </p>
        </div>
      </div>
    </footer>
  );
}
