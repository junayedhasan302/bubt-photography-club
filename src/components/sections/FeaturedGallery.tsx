import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Aperture } from "lucide-react";

const featuredWorks = [
  {
    id: 1,
    title: "Nature & Landscape",
    category: "Nature Photography",
    description: "Finding beauty in the world around us.",
    gradient: "from-[#102d4d] via-[#235b83] to-[#83b4c9]",
    label: "Featured Collection",
  },
  {
    id: 2,
    title: "Stories of the Street",
    category: "Street Photography",
    description: "Every street has a story.",
    gradient: "from-[#142b48] via-[#365e83] to-[#9bb9cf]",
    label: "Visual Stories",
  },
  {
    id: 3,
    title: "Beyond the Ordinary",
    category: "Creative Photography",
    description: "A different way of seeing.",
    gradient: "from-[#101d38] via-[#294b77] to-[#729bd0]",
    label: "Creative Frames",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-48 top-20 size-[450px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-primary/15 bg-primary-light text-primary">
                <Aperture size={19} />
              </span>

              <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
                Our Photography
              </span>
            </div>

            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
              Stories Through
              <span className="text-primary"> Our Lens.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              A collection of moments, perspectives, and stories captured by the
              creative minds of our photography community.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            Explore All Photos
            <span className="flex size-7 items-center justify-center rounded-full bg-primary-light text-primary transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {featuredWorks.map((work, index) => (
            <Link
              href="/gallery"
              key={work.id}
              className={`group relative block overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative isolate overflow-hidden bg-gradient-to-br ${work.gradient} ${
                  index === 0
                    ? "aspect-[4/4.5] lg:aspect-auto lg:h-full lg:min-h-[570px]"
                    : "aspect-[16/8] lg:aspect-[16/7]"
                }`}
              >
                {/* Artwork Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_65%_30%,rgba(255,255,255,0.2),transparent_45%)]" />

                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.14] art-grid" />

                {/* Abstract Visual Composition */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`relative flex items-center justify-center rounded-full border border-white/20 bg-white/[0.035] transition-transform duration-700 group-hover:scale-110 ${
                      index === 0 ? "size-64 sm:size-80" : "size-40 sm:size-48"
                    }`}
                  >
                    <div className="absolute inset-[12%] rounded-full border border-white/20" />

                    <div className="absolute inset-[24%] rounded-full border border-white/15" />

                    <div className="absolute inset-[35%] rounded-full bg-white/[0.06] shadow-[0_0_50px_rgba(255,255,255,0.08)]" />

                    <div className="absolute inset-[43%] rounded-full border border-white/25" />

                    {index === 0 ? (
                      <Camera
                        size={65}
                        strokeWidth={0.9}
                        className="text-white/80"
                      />
                    ) : (
                      <Aperture
                        size={43}
                        strokeWidth={1}
                        className="text-white/80"
                      />
                    )}

                    <span className="absolute right-[8%] top-[18%] size-3 rounded-full bg-white/70 blur-[2px]" />

                    <span className="absolute bottom-[16%] left-[10%] size-2 rounded-full bg-white/50" />
                  </div>
                </div>

                {/* Top Information */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
                  <span className="rounded-full border border-white/20 bg-black/15 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white/90 uppercase backdrop-blur-md">
                    {work.label}
                  </span>

                  <span className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#17385b]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081321] via-[#081321]/75 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-blue-100/75 uppercase sm:text-xs">
                    {work.category}
                  </p>

                  <h3
                    className={`mt-3 font-heading font-semibold tracking-tight text-white ${
                      index === 0
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {work.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/65 sm:text-sm">
                    {work.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/85 transition-all duration-300 group-hover:gap-3">
                    Explore Collection
                    <ArrowRight size={15} />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.035]" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-xs leading-6 text-muted">
            Every frame is a perspective. Every perspective tells a story.
          </p>

          <span className="text-[10px] font-bold tracking-[0.18em] text-primary uppercase">
            BUBT Photography Club
          </span>
        </div>
      </div>
    </section>
  );
}
