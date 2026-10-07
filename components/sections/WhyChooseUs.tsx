"use client";

import { BadgeCheck, HardHat, PlugZap, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: HardHat,
    title: "Professional Service",
    text: "Experienced electrical service with attention to detail.",
  },
  {
    icon: PlugZap,
    title: "Reliable Solutions",
    text: "Dependable electrical work designed to solve the problem properly.",
  },
  {
    icon: BadgeCheck,
    title: "Honest Recommendations",
    text: "Clear communication and practical recommendations for your project.",
  },
  {
    icon: Sparkles,
    title: "Quality Results",
    text: "Focused on safe, clean and lasting electrical installations.",
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
      className={[
        "mb-[53px] max-w-[720px]",
        center && "mx-auto text-center",
        light && "text-white",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "mb-[18px] inline-flex items-center gap-[9px]",
          "font-[family-name:var(--font-body)] text-[11px] font-extrabold uppercase tracking-[0.2em]",
          "text-[#3eaf17]",
          "before:h-[2px] before:w-[27px] before:bg-[#43c91a] before:content-['']",
        ].join(" ")}
      >
        {eyebrow}
      </span>

      <h2
        className="
          font-[family-name:var(--font-heading)]
          text-[clamp(43px,4.3vw,62px)]
          font-bold
          leading-[0.98]
          tracking-[-0.025em]
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            "mt-[21px] max-w-[660px]",
            "font-[family-name:var(--font-body)] text-[16px] leading-[1.7]",
            light ? "text-[#aeb8aa]" : "text-[#667064]",
            center && "mx-auto",
          ]
            .filter(Boolean)
            .join(" ")}
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

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#10140f]
        py-[112px]
        text-white
        min-[901px]:py-[112px]
        max-[900px]:py-[88px]
        max-[640px]:py-[72px]
      "
    >
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
          bg-[size:74px_74px]
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      />

      {/* Decorative bolt */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[90px]
          top-[120px]
          z-0
          opacity-[0.035]
          rotate-[12deg]
          max-[640px]:-right-[75px]
          max-[640px]:top-[90px]
        "
      >
        <Zap className="h-[360px] w-[360px] max-[640px]:h-[260px] max-[640px]:w-[260px]" />
      </div>

      <div
        className="
          relative
          z-[1]
          mx-auto
          w-[min(1180px,calc(100%-48px))]
          max-[640px]:w-[min(100%-32px,1180px)]
        "
      >
        <Reveal>
          <SectionHeading
            eyebrow="The Greenbolt Difference"
            title="Why Homeowners Choose Greenbolt Electric"
            center
            light
          />
        </Reveal>

        <div
          className="
            grid
            grid-cols-4
            gap-[18px]
            max-[900px]:grid-cols-2
            max-[640px]:grid-cols-1
          "
        >
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={index * 0.08}
              className="
                group
                relative
                min-h-[245px]
                overflow-hidden
                rounded-[10px]
                border
                border-white/[0.10]
                bg-white/[0.025]
                p-[31px_27px]
                transition-all
                duration-[180ms]
                hover:-translate-y-[5px]
                hover:border-[#68e236]/[0.45]
                hover:bg-[#68e236]/[0.06]
              "
            >
              {/* Card glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[80px]
                  -right-[80px]
                  h-[190px]
                  w-[190px]
                  rounded-full
                  bg-[#68e236]/[0.035]
                  blur-[10px]
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span
                className="
                  relative
                  z-[1]
                  mb-[37px]
                  flex
                  h-[47px]
                  w-[47px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#68e236]/[0.10]
                  text-[#68e236]
                "
              >
                <Icon className="h-[21px] w-[21px]" strokeWidth={2} />
              </span>

              <h3
                className="
                  relative
                  z-[1]
                  font-[family-name:var(--font-heading)]
                  text-[23px]
                  font-semibold
                  leading-[1.1]
                  tracking-[-0.01em]
                "
              >
                {title}
              </h3>

              <p
                className="
                  relative
                  z-[1]
                  mt-[13px]
                  font-[family-name:var(--font-body)]
                  text-[13px]
                  leading-[1.65]
                  text-[#a9b2a6]
                "
              >
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
