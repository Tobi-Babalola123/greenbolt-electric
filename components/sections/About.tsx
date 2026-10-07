"use client";

import { CircleCheck, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const images = {
  panel:
    "https://images.unsplash.com/photo-1660330589693-99889d60181e?auto=format&fit=crop&w=1400&q=85",
};

const PHONE_DISPLAY = "(512) 201-5427";
const PHONE_LINK = "tel:+15122015427";

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
    <div className={`max-w-[720px] ${center ? "mx-auto text-center" : ""}`}>
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
          } ${light ? "text-[#AEB8AA]" : "text-[#667064]"}`}
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

export default function About() {
  const checks = [
    "Family & Locally Owned",
    "29+ Years of Experience",
    "Residential & Specialty Electrical Work",
  ];

  return (
    <section
      id="about"
      className="bg-white py-[112px] max-[900px]:py-[88px] max-[640px]:py-[72px]"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[0.93fr_1.07fr] items-center gap-24 max-[1080px]:gap-[55px] max-[900px]:grid-cols-1 max-[900px]:gap-14 max-[640px]:w-[min(100%-32px)]">
        {/* Visual */}
        <Reveal className="relative min-h-[610px] max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[650px] max-[640px]:min-h-[500px]">
          {/* Offset outline */}
          <div className="absolute -bottom-[18px] left-[18px] z-0 h-[570px] w-[calc(100%-35px)] rounded-[4px] border-[2px] border-[#68E236] max-[640px]:bottom-[-12px] max-[640px]:left-[10px] max-[640px]:h-[450px]" />

          {/* Image */}
          <img
            src={images.panel}
            alt="Electrician working carefully inside an electrical panel"
            className="relative z-[1] h-[570px] w-[calc(100%-35px)] object-cover rounded-[4px_45px_4px_4px] shadow-[0_20px_50px_rgba(16,20,15,0.1)] max-[640px]:h-[450px] max-[640px]:w-[calc(100%-20px)] max-[640px]:rounded-[4px_35px_4px_4px]"
          />

          {/* Stat Card */}
          <div className="absolute bottom-0 right-0 z-[2] flex w-[285px] flex-col border-l-[4px] border-[#68E236] bg-[#10140F] px-7 py-6 text-white shadow-[0_20px_50px_rgba(16,20,15,0.2)] max-[640px]:bottom-[5px] max-[640px]:right-0 max-[640px]:w-[230px] max-[640px]:px-5 max-[640px]:py-5">
            <Zap
              size={25}
              fill="currentColor"
              className="mb-4 text-[#68E236]"
            />

            <strong className="font-[family-name:var(--font-heading)] text-[25px] font-bold leading-[1.05]">
              Built on experience.
            </strong>

            <span className="mt-2 text-[12px] leading-[1.5] text-[#AEB8AA]">
              Focused on doing the job right.
            </span>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal
          className="max-w-[650px] max-[900px]:max-w-[720px]"
          delay={0.08}
        >
          <SectionHeading
            eyebrow="Experience You Can Trust"
            title="29+ Years of Electrical Experience"
          />

          <div className="mt-[28px] space-y-4">
            <p className="text-[15px] leading-[1.75] text-[#667064]">
              We are a family-owned and locally operated electrical contractor
              serving Spicewood, Horseshoe Bay, Lakeway and Bee Cave. Owner
              Monty McKee brings more than 29 years of electrical service and
              installation experience to every project.
            </p>

            <p className="text-[15px] leading-[1.75] text-[#667064]">
              From residential repairs and remodeling to boat docks, lighting,
              electrical upgrades and specialty installations, Greenbolt
              Electric is focused on dependable workmanship and quality results.
            </p>
          </div>

          {/* Checklist */}
          <ul className="mt-7 mb-[34px] grid gap-[13px]">
            {checks.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[10px] text-[14px] font-bold text-[#10140F] max-[640px]:text-[13px]"
              >
                <CircleCheck
                  size={20}
                  strokeWidth={2}
                  className="shrink-0 text-[#43C91A]"
                />

                {item}
              </li>
            ))}
          </ul>

          <ButtonLink href={PHONE_LINK} variant="dark">
            <Phone size={18} />
            Talk to Greenbolt
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
