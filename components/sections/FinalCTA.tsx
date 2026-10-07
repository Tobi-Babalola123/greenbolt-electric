"use client";

import { Zap, Phone } from "lucide-react";
import { motion } from "framer-motion";

const PHONE_DISPLAY = "(512) 201-5427";
const PHONE_LINK = "tel:+15122015427";

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
      "border-[#68e236] bg-[#68e236] text-[#10140f] shadow-[0_3px_0_#10140f] hover:-translate-y-[2px] hover:border-[#43c91a] hover:bg-[#43c91a] hover:shadow-[0_5px_0_#10140f] active:translate-y-0",

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

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#10140f]
        py-[105px]
        text-white
        max-[640px]:py-[72px]
      "
    >
      {/* Green radial glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[220px]
          -z-[1]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#68e236]/[0.13]
          blur-[2px]
        "
      />

      {/* Decorative bolt */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[50%]
          flex
          h-[190px]
          w-[190px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#68e236]/[0.12]
          text-[#68e236]/[0.08]
          max-[900px]:right-[-30px]
          max-[640px]:-right-[55px]
          max-[640px]:top-[18%]
          max-[640px]:h-[150px]
          max-[640px]:w-[150px]
        "
      >
        <Zap size={105} strokeWidth={1} className="rotate-[8deg]" />
      </div>

      <div
        className="
          relative
          z-[1]
          mx-auto
          grid
          w-[min(1180px,calc(100%-48px))]
          grid-cols-[1fr_0.9fr]
          items-center
          gap-[70px]
          max-[900px]:grid-cols-1
          max-[900px]:gap-[45px]
          max-[640px]:w-[min(100%-32px,1180px)]
          max-[640px]:gap-[38px]
        "
      >
        {/* Main CTA copy */}
        <Reveal>
          <span className="mb-[15px] block font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] text-[#68e236]">
            Ready When You Are
          </span>

          <h2 className="max-w-[650px] font-[family-name:var(--font-heading)] text-[clamp(48px,6vw,68px)] font-bold leading-[0.94] tracking-[-0.02em] text-white max-[640px]:text-[46px]">
            Need an Electrician?
          </h2>

          <p className="mt-[22px] max-w-[600px] font-[family-name:var(--font-body)] text-[15px] leading-[1.7] text-[#a9b2a6]">
            Whether you need a repair, upgrade, installation or help with a new
            project, Greenbolt Electric is ready to help.
          </p>
        </Reveal>

        {/* CTA Actions */}
        <Reveal
          delay={0.1}
          className="
            flex
            flex-col
            items-start
            max-[900px]:items-start
            max-[640px]:w-full
          "
        >
          {/* Phone */}
          <a
            href={PHONE_LINK}
            className="
              mb-[25px]
              inline-flex
              flex-col
              no-underline
              transition-opacity
              duration-200
              hover:opacity-80
            "
          >
            <small className="mb-[5px] font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-[0.13em] text-[#8d978a]">
              Call or text
            </small>

            <span className="font-[family-name:var(--font-heading)] text-[32px] font-bold leading-none text-white max-[640px]:text-[29px]">
              {PHONE_DISPLAY}
            </span>
          </a>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              gap-[12px]
              max-[640px]:w-full
              max-[640px]:flex-col
            "
          >
            <ButtonLink href={PHONE_LINK} className="max-[640px]:w-full">
              <Phone size={19} strokeWidth={2.2} />
              Call Greenbolt Electric
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="secondary"
              className="max-[640px]:w-full"
            >
              Request Service
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
