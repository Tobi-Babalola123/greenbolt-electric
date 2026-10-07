"use client";

import { useState, FormEvent } from "react";
import {
  ArrowRight,
  CircleCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const PHONE_DISPLAY = "(512) 201-5427";
const PHONE_LINK = "tel:+15122015427";
const EMAIL = "hello@greenboltelectric.com";

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
      "border-[#68e236] bg-[#68e236] text-[#10140f] shadow-[0_3px_0_#10140f] hover:-translate-y-[2px] hover:bg-[#43c91a] hover:shadow-[0_5px_0_#10140f]",

    dark: "border-[#10140f] bg-[#10140f] text-white hover:bg-[#1b211a]",

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
      className={`${center ? "mx-auto text-center" : ""} ${
        light ? "text-white" : "text-[#10140f]"
      } max-w-[760px]`}
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
          className={`mt-[18px] max-w-[650px] font-[family-name:var(--font-body)] text-[15px] leading-[1.7] ${
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const labelStyles =
    "font-[family-name:var(--font-body)] text-[12px] font-bold text-[#10140f]";

  const inputStyles =
    "mt-[8px] h-[50px] w-full rounded-[6px] border border-[#dfe5dc] bg-white px-[15px] font-[family-name:var(--font-body)] text-[13px] text-[#10140f] outline-none transition-all duration-200 placeholder:text-[#9aa398] focus:border-[#68e236] focus:ring-2 focus:ring-[#68e236]/20";

  return (
    <section
      id="contact"
      className="bg-[#f5f7f2] py-[112px] max-[640px]:py-[72px]"
    >
      <div
        className="
          mx-auto
          grid
          w-[min(1180px,calc(100%-48px))]
          grid-cols-[0.8fr_1.2fr]
          items-start
          gap-[80px]
          max-[900px]:grid-cols-1
          max-[900px]:gap-[50px]
          max-[640px]:w-[min(100%-32px,1180px)]
        "
      >
        {/* Left: Contact information */}
        <Reveal>
          <SectionHeading
            eyebrow="Contact Greenbolt"
            title="Let's Talk About Your Project"
          />

          <p className="mt-[24px] max-w-[480px] font-[family-name:var(--font-body)] text-[14px] leading-[1.7] text-[#667064]">
            Tell us what you need help with. We'll follow up to discuss your
            project and next steps.
          </p>

          {/* Contact methods */}
          <div className="mt-[35px] flex flex-col">
            {/* Phone */}
            <a
              href={PHONE_LINK}
              className="
                group
                flex
                items-center
                gap-[15px]
                border-b
                border-[#dfe5dc]
                py-[17px]
                no-underline
                transition-colors
                duration-200
                hover:border-[#68e236]
              "
            >
              <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#effce9] text-[#43c91a] transition-colors duration-200 group-hover:bg-[#68e236] group-hover:text-[#10140f]">
                <Phone size={18} />
              </span>

              <div>
                <small className="block font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-[0.1em] text-[#667064]">
                  Call or text
                </small>

                <strong className="mt-[4px] block font-[family-name:var(--font-body)] text-[14px] font-bold text-[#10140f]">
                  {PHONE_DISPLAY}
                </strong>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="
                group
                flex
                items-center
                gap-[15px]
                border-b
                border-[#dfe5dc]
                py-[17px]
                no-underline
                transition-colors
                duration-200
                hover:border-[#68e236]
              "
            >
              <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#effce9] text-[#43c91a] transition-colors duration-200 group-hover:bg-[#68e236] group-hover:text-[#10140f]">
                <Mail size={18} />
              </span>

              <div>
                <small className="block font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-[0.1em] text-[#667064]">
                  Email
                </small>

                <strong className="mt-[4px] block break-all font-[family-name:var(--font-body)] text-[14px] font-bold text-[#10140f]">
                  {EMAIL}
                </strong>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-[15px] border-b border-[#dfe5dc] py-[17px]">
              <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#effce9] text-[#43c91a]">
                <MapPin size={18} />
              </span>

              <div>
                <small className="block font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-[0.1em] text-[#667064]">
                  Based in
                </small>

                <strong className="mt-[4px] block font-[family-name:var(--font-body)] text-[14px] font-bold text-[#10140f]">
                  Spicewood, Texas
                </strong>
              </div>
            </div>
          </div>

          {/* Owner note */}
          <div className="mt-[30px] flex items-center gap-[13px] rounded-[9px] border border-[#dfe5dc] bg-white p-[17px]">
            <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#10140f] font-[family-name:var(--font-heading)] text-[14px] font-bold text-[#68e236]">
              MM
            </div>

            <p className="font-[family-name:var(--font-body)] text-[12px] leading-[1.55] text-[#667064]">
              <strong className="mr-[4px] font-bold text-[#10140f]">
                Owner-operated service
              </strong>
              Monty McKee brings 29+ years of hands-on electrical experience.
            </p>
          </div>
        </Reveal>

        {/* Right: Contact form */}
        <Reveal delay={0.1}>
          <div className="rounded-[12px] border border-[#dfe5dc] bg-white p-[38px] shadow-[0_12px_35px_rgba(16,20,15,0.06)] max-[640px]:p-[24px]">
            {submitted ? (
              /* Success state */
              <div
                className="flex flex-col items-center py-[45px] text-center"
                role="status"
              >
                <CircleCheck
                  size={52}
                  strokeWidth={1.7}
                  className="text-[#43c91a]"
                />

                <h3 className="mt-[22px] font-[family-name:var(--font-heading)] text-[30px] font-bold leading-[1] text-[#10140f]">
                  Thanks for reaching out.
                </h3>

                <p className="mt-[15px] max-w-[450px] font-[family-name:var(--font-body)] text-[13px] leading-[1.7] text-[#667064]">
                  Your request has been captured in this preview. For immediate
                  service, call Greenbolt Electric at {PHONE_DISPLAY}.
                </p>

                <ButtonLink href={PHONE_LINK} className="mt-[25px]">
                  <Phone size={18} />
                  Call Now
                </ButtonLink>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Form heading */}
                <div className="mb-[28px]">
                  <h3 className="font-[family-name:var(--font-heading)] text-[30px] font-bold leading-none text-[#10140f]">
                    Request Service
                  </h3>

                  <p className="mt-[9px] font-[family-name:var(--font-body)] text-[13px] leading-[1.5] text-[#667064]">
                    Complete the form and we'll be in touch.
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-2 gap-x-[16px] gap-y-[19px] max-[640px]:grid-cols-1">
                  {/* Name */}
                  <label className={labelStyles}>
                    Name <span className="text-[#43c91a]">*</span>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className={inputStyles}
                    />
                  </label>

                  {/* Phone */}
                  <label className={labelStyles}>
                    Phone <span className="text-[#43c91a]">*</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="(512) 555-0123"
                      className={inputStyles}
                    />
                  </label>

                  {/* Email */}
                  <label className={labelStyles}>
                    Email <span className="text-[#43c91a]">*</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className={inputStyles}
                    />
                  </label>

                  {/* Service */}
                  <label className={labelStyles}>
                    Service Needed <span className="text-[#43c91a]">*</span>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className={`${inputStyles} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Electrical Repair</option>
                      <option>Panel or Circuit Upgrade</option>
                      <option>Lighting & Fixtures</option>
                      <option>Remodeling Electrical</option>
                      <option>Outdoor or Boat Dock</option>
                      <option>Other</option>
                    </select>
                  </label>

                  {/* Message */}
                  <label
                    className={`${labelStyles} col-span-2 max-[640px]:col-span-1`}
                  >
                    Message <span className="text-[#43c91a]">*</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your electrical issue or project..."
                      className="
                        mt-[8px]
                        min-h-[130px]
                        w-full
                        resize-y
                        rounded-[6px]
                        border
                        border-[#dfe5dc]
                        bg-white
                        px-[15px]
                        py-[14px]
                        font-[family-name:var(--font-body)]
                        text-[13px]
                        leading-[1.5]
                        text-[#10140f]
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-[#9aa398]
                        focus:border-[#68e236]
                        focus:ring-2
                        focus:ring-[#68e236]/20
                      "
                    />
                  </label>
                </div>

                {/* Submit */}
                <button
                  className="
                    mt-[25px]
                    inline-flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-[9px]
                    rounded-[7px]
                    border-2
                    border-[#10140f]
                    bg-[#68e236]
                    px-[24px]
                    py-[12px]
                    font-[family-name:var(--font-body)]
                    text-[14px]
                    font-bold
                    leading-none
                    text-[#10140f]
                    shadow-[0_3px_0_#10140f]
                    transition-all
                    duration-200
                    hover:-translate-y-[2px]
                    hover:bg-[#43c91a]
                    hover:shadow-[0_5px_0_#10140f]
                    active:translate-y-0
                    active:shadow-[0_2px_0_#10140f]
                  "
                  type="submit"
                >
                  Request Service
                  <ArrowRight size={18} />
                </button>

                {/* Reassurance */}
                <p className="mt-[15px] flex items-center justify-center gap-[6px] text-center font-[family-name:var(--font-body)] text-[10px] leading-[1.5] text-[#8a9387]">
                  <ShieldCheck size={15} className="shrink-0" />
                  We&apos;ll use your information only to respond to your
                  request.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
