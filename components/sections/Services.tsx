"use client";

import {
  ArrowRight,
  Gauge,
  Hammer,
  LampCeiling,
  PlugZap,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Troubleshooting & Repairs",
    text: "Electrical troubleshooting, tripping breakers, tripping GFCIs, replacing plugs, switches and other electrical repairs.",
  },
  {
    icon: Gauge,
    title: "Panel & Circuit Upgrades",
    text: "Panel upgrades, breaker replacement, dedicated circuits, surge protection and other electrical improvements.",
  },
  {
    icon: LampCeiling,
    title: "Lighting & Fans",
    text: "Lighting installation, recessed lighting, ceiling fan installation and fixture upgrades throughout your home.",
  },
  {
    icon: Hammer,
    title: "Kitchen & Bath Remodels",
    text: "Professional electrical work for kitchen and bathroom remodels, including new circuits, lighting and fixtures.",
  },
  {
    icon: PlugZap,
    title: "EV Chargers & Generators",
    text: "Electric vehicle charger installation, generator hook-ups and other specialty electrical installations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Electrical Checks",
    text: "Electrical safety check-ups, inspections, preventative improvements and solutions to keep your home safe.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-[53px] max-w-[720px] ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <span
        className={`mb-[18px] inline-flex items-center gap-[9px] text-[11px] font-extrabold uppercase tracking-[0.2em] ${
          light ? "text-[#68E236]" : "text-[#3EAF17]"
        }`}
      >
        <span className="h-[2px] w-[27px] bg-[#43C91A]" />
        {eyebrow}
      </span>

      <h2
        className={`font-[family-name:var(--font-heading)] text-[clamp(43px,4.3vw,62px)] font-bold leading-[0.98] tracking-[-0.025em] ${
          light ? "text-white" : "text-[#10140F]"
        } max-[640px]:text-[clamp(38px,11vw,50px)]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-[21px] max-w-[660px] text-[16px] leading-[1.7] ${
            center ? "mx-auto" : ""
          } ${
            light ? "text-[#AEB8AA]" : "text-[#667064]"
          } max-[640px]:text-[15px]`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

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
  const variants = {
    primary:
      "bg-[#68E236] text-[#10140F] shadow-[0_12px_30px_rgba(76,201,29,0.2)] hover:bg-[#7BED4E] hover:shadow-[0_14px_34px_rgba(76,201,29,0.3)]",

    secondary:
      "border border-white/[0.24] bg-white/[0.07] text-white backdrop-blur-[8px] hover:border-white/[0.45] hover:bg-white/[0.12]",

    dark: "bg-[#10140F] text-white hover:bg-[#283026] hover:shadow-[0_12px_28px_rgba(16,20,15,0.2)]",

    outline:
      "border border-[#DFE5DC] bg-white text-[#10140F] hover:border-[#10140F]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center gap-[10px] rounded-[7px] border border-transparent px-6 text-[14px] font-bold transition-[transform,box-shadow,background,color] duration-[180ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#68E236]/40 focus-visible:outline-offset-[3px] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F5F7F2] py-[112px] max-[900px]:py-[88px] max-[640px]:py-[72px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px)]">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Residential Electrical Services"
            description="From remodels and installations to troubleshooting and repairs, Greenbolt Electric provides dependable electrical services for homes throughout the Highland Lakes area."
          />
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={(index % 3) * 0.08}
              className="group relative min-h-[300px] overflow-hidden rounded-[12px] border border-[#DFE5DC] bg-white px-8 py-[35px] shadow-[0_8px_25px_rgba(16,20,15,0.03)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[5px] hover:border-[#68E236]/50 hover:shadow-[0_18px_40px_rgba(16,20,15,0.08)] max-[640px]:min-h-0 max-[640px]:px-6 max-[640px]:py-7"
            >
              {/* Decorative circle */}
              <span className="pointer-events-none absolute -bottom-[70px] -right-[70px] h-[180px] w-[180px] rounded-full bg-[#68E236]/[0.045] transition-transform duration-500 group-hover:scale-125" />

              {/* Icon */}
              <div className="relative z-[1] mb-[25px] grid h-[55px] w-[55px] place-items-center rounded-[3px_15px_3px_3px] bg-[#68E236] text-[#10140F] transition-transform duration-300 group-hover:-translate-y-1">
                <Icon size={27} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="relative z-[1] font-[family-name:var(--font-heading)] text-[26px] font-bold leading-[1.1] tracking-[-0.01em] text-[#10140F] max-[640px]:text-[24px]">
                {title}
              </h3>

              {/* Description */}
              <p className="relative z-[1] mb-5 mt-[14px] text-[14px] leading-[1.65] text-[#667064] max-[640px]:text-[13px]">
                {text}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="group/link relative z-[1] inline-flex items-center gap-[7px] text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#2C8F0D] transition-colors hover:text-[#43C91A]"
              >
                Ask About This Service
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[42px] flex justify-center">
          <ButtonLink href="#contact" variant="dark">
            Request Service
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
