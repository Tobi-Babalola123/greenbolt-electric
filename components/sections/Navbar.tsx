"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Menu, Phone, X, Zap } from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Our Work", "#work"],
  ["Service Areas", "#areas"],
  ["Contact", "#contact"],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Greenbolt Electric home"
      className="inline-flex shrink-0 items-center gap-[10px]"
    >
      <span className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[11px_3px_11px_3px] bg-[#68E236] text-[#10140F] shadow-[0_7px_20px_rgba(104,226,54,0.24)] [transform:skew(-4deg)]">
        <Zap
          size={26}
          strokeWidth={3}
          fill="currentColor"
          className="[transform:skew(4deg)]"
        />
      </span>

      <span
        className={`flex flex-col leading-[0.9] ${
          light ? "text-white" : "text-[#10140F]"
        }`}
      >
        <strong className="font-[family-name:var(--font-heading)] text-[21px] font-bold tracking-[0.035em]">
          GREENBOLT
        </strong>

        <small className="mt-[7px] text-[9px] font-bold tracking-[0.28em] text-[#7F897C]">
          ELECTRIC
        </small>
      </span>
    </a>
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
      "border border-transparent bg-[#68E236] text-[#10140F] shadow-[0_12px_30px_rgba(76,201,29,0.2)] hover:bg-[#7BED4E] hover:shadow-[0_14px_34px_rgba(76,201,29,0.3)]",

    secondary:
      "border border-white/25 bg-white/[0.07] text-white backdrop-blur-[8px] hover:border-white/45 hover:bg-white/[0.12]",

    dark: "border border-transparent bg-[#10140F] text-white hover:bg-[#283026] hover:shadow-[0_12px_28px_rgba(16,20,15,0.2)]",

    outline:
      "border border-[#DFE5DC] bg-white text-[#10140F] hover:border-[#10140F]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center gap-[10px] rounded-[7px] px-6 text-[14px] font-bold transition-[transform,box-shadow,background,color] duration-[180ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#68E236]/40 focus-visible:outline-offset-[3px] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

const PHONE_DISPLAY = "(512) 201-5427";
const PHONE_LINK = "tel:+15122015427";
const EMAIL = "GreenboltElectric@gmail.com";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#10140F]/[0.08] bg-white/[0.96] backdrop-blur-[14px] transition-[height,box-shadow] duration-[220ms] ${
          scrolled
            ? "h-[72px] shadow-[0_10px_35px_rgba(16,20,15,0.08)]"
            : "h-[72px]"
        }`}
      >
        <div className="mx-auto flex h-full w-[min(1180px,calc(100%-48px))] items-center justify-between gap-7">
          <Logo />

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-[27px] min-[901px]:flex"
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative text-[13px] font-semibold text-[#3D463B]"
              >
                {label}

                <span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-center scale-x-0 bg-[#43C91A] transition-transform duration-[180ms] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-[18px] min-[901px]:flex">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-[7px] whitespace-nowrap text-[13px] font-bold text-[#10140F]"
            >
              <Phone size={16} className="text-[#43C91A]" />
              {PHONE_DISPLAY}
            </a>

            <a
              href={PHONE_LINK}
              className="inline-flex h-[38px] items-center justify-center rounded-[6px] border border-transparent bg-[#68E236] px-[15px] text-[12px] font-bold leading-none text-[#10140F] shadow-[0_3px_0_#10140F] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#43C91A] hover:shadow-[0_4px_0_#10140F]"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="hidden h-11 w-11 place-items-center rounded-[7px] border-0 bg-[#10140F] text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#68E236]/40 focus-visible:outline-offset-[3px] max-[900px]:grid"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-[80] bg-[rgba(6,9,6,0.58)] transition-[opacity,visibility] duration-[250ms] min-[901px]:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-[100dvh] w-[min(390px,88vw)] flex-col overflow-hidden bg-white shadow-[-20px_0_60px_rgba(7,10,7,0.16)] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] min-[901px]:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Drawer Inner */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
          {/* Mobile Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-[#DFE5DC] px-[22px] py-[20px]">
            <Logo />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-[#DFE5DC] bg-white text-[#10140F] transition-colors duration-150 hover:border-[#68E236] hover:bg-[#F5F7F2] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#68E236]/40 focus-visible:outline-offset-[3px]"
              aria-label="Close navigation menu"
            >
              <X size={21} strokeWidth={2.2} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="px-[22px] pt-[18px]" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex min-h-[58px] items-center justify-between border-b border-[#DFE5DC] px-[2px] py-[15px] font-[family-name:var(--font-heading)] text-[23px] font-semibold leading-none text-[#10140F] transition-colors duration-150 hover:text-[#43C91A]"
              >
                <span>{label}</span>

                <ChevronRight
                  size={18}
                  strokeWidth={2}
                  className="text-[#9AA398] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#43C91A]"
                />
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto px-[22px] pb-[22px] pt-[28px]">
            <div className="rounded-[12px] bg-[#F5F7F2] p-[20px]">
              <p className="mb-[5px] font-[family-name:var(--font-body)] text-[11px] font-medium text-[#667064]">
                Need electrical help?
              </p>

              <a
                href={PHONE_LINK}
                className="mb-[17px] block font-[family-name:var(--font-heading)] text-[27px] font-bold leading-none tracking-[-0.01em] text-[#10140F]"
              >
                {PHONE_DISPLAY}
              </a>

              <ButtonLink
                href={PHONE_LINK}
                className="w-full min-h-[50px] px-[18px]"
              >
                <Phone size={17} />
                Call Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
