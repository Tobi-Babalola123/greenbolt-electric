"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Call or submit a service request and explain the electrical issue or project.",
  },
  {
    number: "02",
    title: "Get a Clear Plan",
    text: "We'll discuss the work and recommend the appropriate solution.",
  },
  {
    number: "03",
    title: "Get the Job Done Right",
    text: "Professional electrical work focused on quality, safety and reliability.",
  },
];

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
  const baseStyles =
    "inline-flex min-h-[52px] items-center justify-center gap-[9px] rounded-[7px] border-2 px-[24px] py-[12px] font-[family-name:var(--font-body)] text-[14px] font-bold leading-none no-underline transition-all duration-200";

  const variants = {
    primary:
      "border-[#10140f] bg-[#68e236] text-[#10140f] shadow-[0_3px_0_#10140f] hover:-translate-y-[2px] hover:bg-[#43c91a] hover:shadow-[0_5px_0_#10140f] active:translate-y-0 active:shadow-[0_2px_0_#10140f]",

    secondary:
      "border-[#68e236] bg-[#68e236] text-[#10140f] hover:border-[#43c91a] hover:bg-[#43c91a]",

    dark: "border-[#10140f] bg-[#10140f] text-white hover:border-[#1b211a] hover:bg-[#1b211a]",

    outline:
      "border-[#10140f] bg-transparent text-[#10140f] hover:bg-[#10140f] hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

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
      className={`${
        center ? "mx-auto text-center" : ""
      } ${light ? "text-white" : "text-[#10140f]"} max-w-[760px]`}
    >
      <span
        className={`mb-[14px] block font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] ${
          light ? "text-[#68e236]" : "text-[#43c91a]"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`font-[family-name:var(--font-heading)] text-[clamp(42px,5vw,60px)] font-bold leading-[0.98] tracking-[-0.02em] ${
          light ? "text-white" : "text-[#10140f]"
        } max-[640px]:text-[40px]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-[18px] max-w-[650px] font-[family-name:var(--font-body)] text-[15px] leading-[1.7] ${
            light ? "text-[#a9b2a6]" : "text-[#667064]"
          }`}
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

export default function Process() {
  return (
    <section className="bg-[#f5f7f2] py-[112px] max-[640px]:py-[72px]">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        {/* Section heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Simple Process"
            title="Electrical Service Without the Runaround"
            center
          />
        </Reveal>

        {/* Steps */}
        <div className="relative mt-[70px] grid grid-cols-3 gap-[42px] max-[900px]:grid-cols-2 max-[640px]:mt-[50px] max-[640px]:grid-cols-1 max-[640px]:gap-[45px]">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[24px] h-px bg-[#dfe5dc] max-[900px]:hidden" />

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.1}
              className="relative text-center"
            >
              {/* Step number */}
              <span className="mb-[18px] block font-[family-name:var(--font-heading)] text-[14px] font-bold tracking-[0.12em] text-[#43c91a]">
                {step.number}
              </span>

              {/* Check circle */}
              <div className="relative z-[1] mx-auto mb-[30px] flex h-[48px] w-[48px] items-center justify-center rounded-full border-[6px] border-[#f5f7f2] bg-[#68e236] text-[#10140f] shadow-[0_0_0_1px_#dfe5dc]">
                <Check size={19} strokeWidth={3} />
              </div>

              {/* Title */}
              <h3 className="mb-[12px] font-[family-name:var(--font-heading)] text-[25px] font-bold leading-[1.05] text-[#10140f] max-[640px]:text-[23px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mx-auto max-w-[290px] font-[family-name:var(--font-body)] text-[13px] leading-[1.65] text-[#667064]">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[58px] flex justify-center max-[640px]:mt-[45px]">
          <ButtonLink href="#contact" variant="primary">
            Request Service
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
