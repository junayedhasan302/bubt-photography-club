import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

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
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Users size={27} />
          </div>

          <span className="mt-5 block text-sm font-semibold tracking-widest text-primary uppercase">
            The People Behind Us
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Executive <span className="text-primary">Committee</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Meet the dedicated team responsible for leading and managing BUBT
            Photography Club.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committeePositions.map((position, index) => (
            <div
              key={position}
              className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-sm font-semibold text-foreground">
                {position}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Meet Our Committee
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
