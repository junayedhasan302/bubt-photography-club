import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Trophy,
  Camera,
  CalendarDays,
  Sparkles,
  Aperture,
} from "lucide-react";

const contests = [
  {
    id: "01",
    title: "Inter-University Photography Contest",
    category: "Inter-University",
    description:
      "Showcase your creativity and visual storytelling. Connect with photographers and share your perspective through powerful images.",
    status: "Coming Soon",
    icon: Trophy,
    featured: true,
  },
  {
    id: "02",
    title: "One Frame, One Story",
    category: "Creative Photography",
    description:
      "A single frame can hold countless stories. Capture a meaningful moment and let your photograph speak for itself.",
    status: "Details to be announced",
    icon: Camera,
    featured: false,
  },
];

export default function ContestPreview() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 size-[400px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <Sparkles size={15} />
              Challenge Your Creativity
            </span>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
              Frame Your Vision.
              <span className="text-primary"> Tell Your Story.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              Explore photography competitions, challenge your creativity and
              share your unique perspective with the community.
            </p>
          </div>

          <Link
            href="/contests"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Explore All Contests
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Contest Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {contests.map((contest) => {
            const ContestIcon = contest.icon;

            return (
              <article
                key={contest.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_55px_rgba(35,85,150,0.09)]"
              >
                {/* Visual Header */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-primary-light sm:h-64">
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(49,107,219,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(49,107,219,0.08)_1px,transparent_1px)] [background-size:30px_30px]" />

                  <div className="absolute -right-16 -top-24 size-80 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute -right-5 -top-12 size-56 rounded-full border border-primary/15" />

                  <div className="relative flex size-28 items-center justify-center rounded-[2rem] border border-primary/15 bg-background/75 text-primary shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <ContestIcon size={45} strokeWidth={1.3} />
                  </div>

                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-2 text-[10px] font-bold tracking-wider text-primary uppercase backdrop-blur-sm">
                    <Aperture size={13} />
                    {contest.category}
                  </div>

                  <span className="absolute bottom-3 right-6 font-heading text-7xl font-semibold tracking-tighter text-primary/[0.10]">
                    {contest.id}
                  </span>

                  <span className="absolute bottom-6 left-6 text-xs font-medium tracking-[0.2em] text-primary/70 uppercase">
                    BUBT Photography Club
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                      Photography Competition
                    </span>

                    <span className="rounded-full border border-primary/20 bg-primary-light px-3 py-1.5 text-[10px] font-bold tracking-wide text-primary">
                      {contest.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {contest.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {contest.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                      <CalendarDays size={16} className="text-primary" />
                      Schedule to be announced
                    </div>

                    <Link
                      href="/contests"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-background p-6 text-center sm:flex-row sm:text-left sm:p-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Camera size={23} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Have a story worth sharing?
              </h3>

              <p className="mt-1 text-xs leading-6 text-muted">
                Stay connected for upcoming contests and participation details.
              </p>
            </div>
          </div>

          <Link href="/contests" className="btn-primary group shrink-0">
            Discover Contests
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
