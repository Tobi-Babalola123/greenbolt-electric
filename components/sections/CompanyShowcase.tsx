"use client";

interface EquipmentCategory {
  name: string;
  description: string;
  image: string;
  alt: string;
  size?: "large" | "normal";
}

const categories: EquipmentCategory[] = [
  {
    name: "Construction Equipment",
    description:
      "Full-size excavators, loaders and earthmoving machines for demanding job sites.",
    image:
      "https://images.unsplash.com/photo-1664312616511-81fe2e745cb3?w=1200&h=900&fit=crop&auto=format",
    alt: "Heavy construction vehicle working on an active job site",
    size: "large",
  },
  {
    name: "Mining Equipment",
    description:
      "Heavy-duty machines built for high-cycle extraction and material movement.",
    image:
      "https://images.unsplash.com/photo-1560872531-552417aded86?w=900&h=650&fit=crop&auto=format",
    alt: "Yellow excavator seen from above in a mining operation",
  },
  {
    name: "Road Equipment",
    description:
      "Graders, rollers and compactors engineered for road construction and maintenance.",
    image:
      "https://images.unsplash.com/photo-1591486085897-f433f05e7aed?w=900&h=650&fit=crop&auto=format",
    alt: "Road construction equipment on a paving project",
  },
  {
    name: "Forestry Equipment",
    description:
      "Specialized machines for timber harvesting, processing and material handling.",
    image:
      "https://images.unsplash.com/photo-1603814744174-115311ad645e?w=900&h=650&fit=crop&auto=format",
    alt: "Heavy yellow and black equipment in a snowy forestry environment",
    size: "large",
  },
  {
    name: "Material Handling",
    description:
      "Wheel loaders, forklifts and handlers for logistics and industrial operations.",
    image:
      "https://images.unsplash.com/photo-1630288214173-a119cf823388?w=900&h=650&fit=crop&auto=format",
    alt: "Orange and white excavator on a construction site",
  },
];

function EquipmentCard({ category }: { category: EquipmentCategory }) {
  return (
    <article className="group relative flex h-full min-h-0 flex-col overflow-hidden bg-[#111111]">
      <div
        className={`relative min-h-0 flex-1 overflow-hidden ${
          category.size === "large"
            ? "h-[360px] sm:h-[420px] md:h-full"
            : "h-[270px] sm:h-[300px] md:h-full"
        }`}
      >
        <img
          src={category.image}
          alt={category.alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Image overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="mb-1.5 text-[17px] font-700 leading-tight text-white sm:text-[19px]">
            {category.name}
          </h3>

          <p className="mb-3.5 max-w-md text-[12.5px] leading-[1.45] text-white/75 sm:text-[13px]">
            {category.description}
          </p>

          <a
            href="#equipment"
            className="group/link inline-flex items-center gap-1.5 text-[10.5px] font-700 uppercase tracking-[0.16em] text-[#F5C400] transition-all duration-200 hover:gap-2.5 focus:outline-none focus-visible:underline sm:text-[11px]"
          >
            Explore Equipment
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/link:translate-x-0.5"
            >
              <path
                d="M1 6H11M7 2L11 6L7 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function EquipmentShowcase() {
  return (
    <section
      id="equipment"
      className="w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24"
      aria-labelledby="equipment-heading"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-9 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div>
            <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
              Equipment
            </p>

            <h2
              id="equipment-heading"
              className="text-[29px] font-800 leading-[1.08] tracking-tight text-[#111111] sm:text-[34px] lg:text-[40px]"
            >
              Equipment Built for
              <br className="hidden sm:block" /> the Work Ahead
            </h2>
          </div>

          <p className="max-w-sm text-[13.5px] leading-relaxed text-[#6B7280] sm:text-[14px] lg:pb-1 lg:text-right">
            Explore dependable machines and equipment solutions designed for
            demanding jobs.
          </p>
        </div>

        {/* Desktop — asymmetric feature grid */}
        <div className="hidden h-[680px] grid-cols-3 grid-rows-2 gap-3 md:grid">
          {/* Large feature card */}
          <div className="col-span-2 row-span-2 min-h-0">
            <EquipmentCard category={{ ...categories[0], size: "large" }} />
          </div>

          {/* Right column */}
          <div className="col-span-1 row-span-1 min-h-0">
            <EquipmentCard category={categories[1]} />
          </div>

          <div className="col-span-1 row-span-1 min-h-0">
            <EquipmentCard category={categories[2]} />
          </div>
        </div>

        {/* Desktop — second row */}
        <div className="mt-3 hidden grid-cols-3 gap-3 md:grid">
          <div className="min-h-[290px]">
            <EquipmentCard category={{ ...categories[3], size: "large" }} />
          </div>

          <div className="min-h-[290px]">
            <EquipmentCard category={categories[4]} />
          </div>

          {/* More categories card */}
          <div className="group relative flex min-h-[290px] flex-col items-start justify-end overflow-hidden bg-[#F5C400] p-6 transition-colors duration-300 hover:bg-[#f8ca19]">
            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-700 uppercase tracking-[0.18em] text-[#111111]/55">
                View All
              </p>

              <p className="mb-5 max-w-[230px] text-[21px] font-800 leading-[1.12] text-[#111111]">
                More Equipment Categories
              </p>

              <a
                href="#equipment"
                className="inline-flex items-center gap-2 bg-[#111111] px-4 py-2.5 text-[11px] font-700 uppercase tracking-[0.08em] text-white transition-all duration-200 hover:gap-3 hover:bg-[#242424] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                Browse All
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6H11M7 2L11 6L7 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </div>

            {/* Decorative graphic */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-[#111111]/[0.06] transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 gap-3 md:hidden sm:grid-cols-2">
          {categories.map((category) => (
            <EquipmentCard key={category.name} category={category} />
          ))}

          {/* More categories */}
          <div className="flex min-h-[190px] flex-col items-start justify-end bg-[#F5C400] p-5 sm:col-span-2 sm:min-h-[210px] sm:p-6">
            <p className="mb-1.5 text-[10px] font-700 uppercase tracking-[0.18em] text-[#111111]/55">
              View All
            </p>

            <p className="mb-4 max-w-xs text-[19px] font-800 leading-tight text-[#111111] sm:text-[21px]">
              More Equipment Categories
            </p>

            <a
              href="#equipment"
              className="inline-flex items-center gap-2 bg-[#111111] px-4 py-2.5 text-[11px] font-700 uppercase tracking-wide text-white transition-all duration-200 hover:gap-3 hover:bg-[#333333] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              Browse All Equipment
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 6H11M7 2L11 6L7 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
