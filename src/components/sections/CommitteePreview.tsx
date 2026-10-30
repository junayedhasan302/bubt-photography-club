
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Crown,
  ShieldCheck,
} from "lucide-react";

const committeePositions = [
  "President",
  "Vice President (Male/Female)",
  "Vice President (Female)",
  "General Secretary",
  "Treasurer",
  "Joint Secretary",
  "Joint Treasurer",
  "Organizing Secretary",
  "Office Secretary",
  "Media & Publications Secretary",
  "Social Welfare Secretary",
  "Event Secretary",
  "Executive Member",
];

export default function CommitteePreview() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[400px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary-light text-primary">
            <Users size={27} strokeWidth={1.6} />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            The People Behind Us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
            Leadership &amp;
            <span className="text-primary"> Team.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
            Meet the dedicated positions that shape the leadership
            and management of BUBT Photography Club.
          </p>
        </div>

        {/* Committee Information */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-4 py-2 text-xs font-semibold text-primary">
            <ShieldCheck size={15} />
            Executive Committee
          </span>

          <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-muted">
            13 Leadership Positions
          </span>
        </div>

        {/* Committee Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committeePositions.map((position, index) => (
            <article
              key={position}
              className={`group relative flex min-h-[92px] items-center gap-4 overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_35px_rgba(35,85,150,0.08)] ${
                index === 0
                  ? "border-primary/25 bg-primary/[0.035]"
                  : ""
              }`}
            >
              {/* Position Number */}
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold tracking-wide transition-colors duration-300 ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-primary-light text-primary group-hover:bg-primary group-hover:text-white"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Position Name */}
              <div className="min-w-0 flex-1">
                {index === 0 && (
                  <span className="mb-1 flex items-center gap-1 text-[9px] font-bold tracking-[0.16em] text-primary uppercase">
                    <Crown size={11} />
                    Leading Position
                  </span>
                )}

                <h3 className="text-sm leading-6 font-semibold text-foreground transition-colors group-hover:text-primary">
                  {position}
                </h3>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={17}
                className="shrink-0 text-muted/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center">
          <p className="mb-5 text-center text-sm text-muted">
            Learn more about the people and structure of our club.
          </p>

          <Link
            href="/committee"
            className="btn-primary group"
          >
            Meet Our Committee

            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
