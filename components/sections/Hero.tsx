"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, MapPin, Phone } from "lucide-react";

const images = {
  electrician:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=88",
};

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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[830px] overflow-hidden bg-[linear-gradient(118deg,#0C100C_0%,#141A13_55%,#0D120C_100%)] px-0 pb-[102px] pt-[176px]"
    >
      {/* Large decorative circle */}
      <div className="pointer-events-none absolute -bottom-[310px] -right-[210px] h-[670px] w-[670px] rounded-full border border-[#68E236]/10" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to right, black 0%, black 30%, transparent 68%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 30%, transparent 68%)",
        }}
      />

      {/* Green atmospheric glow */}
      <div className="pointer-events-none absolute -left-[300px] top-[40%] h-[580px] w-[580px] rounded-full bg-[#68E236]/[0.06] blur-[20px]" />

      <div className="relative z-[2] mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[1.13fr_0.87fr] items-center gap-[74px] max-[1080px]:grid-cols-[1fr_0.9fr] max-[1080px]:gap-[45px] max-[900px]:grid-cols-1 max-[900px]:gap-14 max-[640px]:w-[min(100%-32px)]">
        {/* Content */}
        <motion.div
          className="max-w-[700px] max-[900px]:max-w-[720px]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Kicker */}
          <div className="mb-[25px] flex flex-wrap items-center gap-x-[18px] gap-y-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#D7DFD4] max-[640px]:text-[10px]">
            <span className="flex items-center gap-[7px]">
              <MapPin size={15} className="text-[#68E236]" />
              Spicewood, Texas
            </span>

            <span className="relative pl-[18px] before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#68E236]">
              Locally owned & operated
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[720px] font-[family-name:var(--font-heading)] text-[clamp(57px,5.35vw,82px)] font-bold leading-[0.98] tracking-[-0.025em] text-white max-[1080px]:text-[clamp(52px,6vw,70px)] max-[640px]:text-[clamp(45px,13vw,62px)]">
            Reliable Electrical Services for{" "}
            <span className="text-[#68E236]">
              Homes, Boats &amp; Businesses
            </span>
          </h1>

          {/* Copy */}
          <p className="mt-[27px] max-w-[650px] text-[17px] leading-[1.7] text-[#BFC8BC] max-[640px]:text-[15px] max-[640px]:leading-[1.65]">
            Family-owned and locally operated, Greenbolt Electric provides
            dependable repairs, installations, upgrades, and troubleshooting
            throughout Spicewood, Horseshoe Bay, Lakeway and Bee Cave.
          </p>

          {/* Actions */}
          <div className="mt-[34px] flex flex-wrap gap-3 max-[640px]:flex-col">
            <ButtonLink href={PHONE_LINK} className="max-[640px]:w-full">
              <Phone size={19} />
              Call Greenbolt Electric
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="secondary"
              className="max-[640px]:w-full"
            >
              Request Service
              <ArrowRight size={18} />
            </ButtonLink>
          </div>

          {/* Phone */}
          <a
            href={PHONE_LINK}
            className="mt-[22px] inline-flex flex-col text-white transition-opacity hover:opacity-80"
          >
            <span className="text-[11px] font-medium text-[#AEB8AA]">
              Call or text us today
            </span>

            <strong className="mt-1 font-[family-name:var(--font-heading)] text-[31px] font-bold leading-none tracking-[-0.01em] max-[640px]:text-[27px]">
              {PHONE_DISPLAY}
            </strong>
          </a>

          {/* Trust */}
          <div className="mt-[25px] flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-[23px] text-[12px] font-medium text-[#C3CBC0] max-[640px]:gap-y-3">
            <span className="flex items-center gap-[7px]">
              <Check size={15} strokeWidth={2.5} className="text-[#68E236]" />
              29+ Years Experience
            </span>

            <span className="flex items-center gap-[7px]">
              <Check size={15} strokeWidth={2.5} className="text-[#68E236]" />
              Locally Owned
            </span>

            <span className="flex items-center gap-[7px]">
              <Check size={15} strokeWidth={2.5} className="text-[#68E236]" />
              Residential &amp; Commercial
            </span>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative min-h-[530px] max-[1080px]:min-h-[490px] max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[680px] max-[640px]:min-h-[430px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.16,
          }}
        >
          {/* Main Image */}
          <div className="absolute inset-[0_0_16px_25px] overflow-hidden rounded-[4px_60px_4px_4px] border border-white/[0.14] shadow-[0_30px_70px_rgba(0,0,0,0.28)] max-[900px]:inset-[0_20px_15px_20px] max-[640px]:inset-[0_0_12px_10px] max-[640px]:rounded-[4px_45px_4px_4px]">
            <img
              src={images.electrician}
              alt="Professional electrician completing an installation"
              className="h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,10,0.02)_20%,rgba(10,15,10,0.35)_100%)]" />
          </div>

          {/* Experience Badge */}
          <div className="absolute left-[-32px] top-[35px] z-[2] flex h-[132px] w-[132px] flex-col justify-center rounded-[3px_24px_3px_3px] bg-[#68E236] px-5 text-[#10140F] shadow-[0_18px_40px_rgba(20,40,15,0.25)] max-[1080px]:left-[-18px] max-[640px]:left-[-8px] max-[640px]:top-[20px] max-[640px]:h-[105px] max-[640px]:w-[105px] max-[640px]:rounded-[3px_18px_3px_3px] max-[640px]:px-4">
            <strong className="font-[family-name:var(--font-heading)] text-[43px] font-bold leading-none tracking-[-0.03em] max-[640px]:text-[34px]">
              29+
            </strong>

            <span className="mt-2 max-w-[85px] text-[10px] font-bold leading-[1.35] max-[640px]:text-[9px]">
              Years of electrical experience
            </span>
          </div>

          {/* Proof Card */}
          <div className="absolute -bottom-[10px] -right-[20px] z-[3] flex min-w-[285px] items-center gap-[13px] rounded-[7px] border border-white/[0.12] bg-[rgba(28,35,27,0.92)] px-[22px] py-[19px] text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-[12px] max-[1080px]:right-[-5px] max-[640px]:bottom-[-5px] max-[640px]:right-[-5px] max-[640px]:min-w-0 max-[640px]:max-w-[calc(100%-35px)] px-[16px] py-[15px]">
            <BadgeCheck size={26} className="shrink-0 text-[#68E236]" />

            <span className="flex flex-col text-[11px] leading-[1.45] text-[#AEB8AA]">
              <strong className="text-[12px] font-bold text-white">
                Dependable workmanship
              </strong>
              Local service. Quality results.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
