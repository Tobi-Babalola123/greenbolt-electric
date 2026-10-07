"use client";

import { Building2, Clock3, ShieldCheck, Users } from "lucide-react";

const trustItems = [
  {
    icon: Clock3,
    top: "29+ Years",
    bottom: "Electrical Experience",
  },
  {
    icon: Users,
    top: "Family Owned",
    bottom: "Locally Operated",
  },
  {
    icon: Building2,
    top: "Residential & Commercial",
    bottom: "Electrical Services",
  },
  {
    icon: ShieldCheck,
    top: "Quality Work",
    bottom: "Reliable Solutions",
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative z-[5] border-b border-[#DFE5DC] bg-white"
      aria-label="Why trust Greenbolt Electric"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] min-h-[132px] grid-cols-4 max-[1080px]:w-[min(1180px,calc(100%-48px))] max-[1080px]:min-h-[120px] max-[640px]:w-[min(100%-32px)] max-[640px]:grid-cols-2 max-[640px]:py-2">
        {trustItems.map(({ icon: Icon, top, bottom }, index) => (
          <div
            className={`flex items-center gap-[15px] border-r border-[#DFE5DC] px-[27px] py-6 max-[1080px]:px-[18px] max-[900px]:gap-3 max-[640px]:border-b max-[640px]:px-3 max-[640px]:py-[18px] ${
              index === 0 ? "border-l border-[#DFE5DC]" : ""
            } ${index === 1 ? "max-[640px]:border-l" : ""} ${
              index === 2 ? "max-[640px]:border-l" : ""
            } ${index === 3 ? "max-[640px]:border-b-0" : ""}`}
            key={top}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#EFFCE9] text-[#43C91A] max-[900px]:h-11 max-[900px]:w-11 max-[640px]:h-10 max-[640px]:w-10">
              <Icon
                size={25}
                strokeWidth={2}
                className="max-[640px]:h-[21px] max-[640px]:w-[21px]"
              />
            </span>

            <span className="flex min-w-0 flex-col">
              <strong className="font-[family-name:var(--font-heading)] text-[19px] font-bold leading-[1.1] text-[#10140F] max-[1080px]:text-[17px] max-[640px]:text-[16px]">
                {top}
              </strong>

              <small className="mt-[5px] text-[11px] font-medium leading-[1.3] text-[#667064] max-[640px]:text-[10px]">
                {bottom}
              </small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
