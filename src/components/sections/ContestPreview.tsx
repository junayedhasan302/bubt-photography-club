import Link from "next/link";
import {
  ArrowRight,
  Trophy,
  Camera,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const contests = [
  {
    id: 1,
    title: "Inter-University Photography Contest",
    category: "Inter-University",
    description:
      "Showcase your creativity and visual storytelling through your best photographs.",
    status: "Coming Soon",
    icon: Trophy,
  },
  {
    id: 2,
    title: "One Frame, One Story",
    category: "Creative Photography",
    description:
      "Every photograph has a story. Share your perspective through a single frame.",
    status: "Coming Soon",
    icon: Camera,
  },
];

export default function ContestPreview() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Challenge Your Creativity
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Photography <span className="text-primary">Contests</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Participate in photography competitions, share your creative
              vision, and showcase your talent.
            </p>
          </div>

          <Link
            href="/contests"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Explore All Contests
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {contests.map((contest) => {
            const Icon = contest.icon;

            return (
              <article
                key={contest.id}
                className="group rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                    <Icon size={28} />
                  </div>

                  <span className="rounded-full border border-primary/20 bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary">
                    {contest.status}
                  </span>
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase">
                  <Sparkles size={14} />
                  {contest.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                  {contest.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {contest.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CalendarDays size={16} />
                    Details coming soon
                  </div>

                  <Link
                    href="/contests"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
