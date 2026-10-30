import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Camera,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Image as ImageIcon,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Photography Contests",
  description:
    "Explore photography competitions and creative challenges organized by BUBT Photography Club.",
};

const contests = [
  {
    id: 1,
    title: "One Frame, One Story",
    category: "Photography Competition",
    description:
      "A photograph can tell a story beyond words. Share your creative perspective through a photograph and its accompanying story.",
    status: "Completed",
    statusStyle: "bg-surface-secondary text-muted",
    icon: Camera,
  },
  {
    id: 2,
    title: "Inter-University Photography Contest",
    category: "Inter-University Competition",
    description:
      "A creative platform for university students to showcase their photography skills, imagination, and storytelling.",
    status: "Coming Soon",
    statusStyle: "bg-primary-light text-primary",
    icon: Trophy,
  },
];

const contestFeatures = [
  {
    title: "Creative Expression",
    description:
      "Showcase your creativity and communicate stories through photography.",
    icon: Camera,
  },
  {
    title: "Fair Evaluation",
    description: "A structured judging process with clear evaluation criteria.",
    icon: Award,
  },
  {
    title: "Recognition",
    description:
      "Celebrate outstanding photographs and recognize creative talent.",
    icon: Trophy,
  },
];

export default function ContestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Trophy size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            Challenge Your Creativity
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Photography <span className="text-primary">Contests</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Participate in photography competitions, share your visual stories,
            and showcase your creative perspective.
          </p>
        </div>
      </section>

      {/* Contest Listing */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Participate & Showcase
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Explore Contests
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Discover photography challenges and competitions from our creative
              community.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {contests.map((contest) => {
              const Icon = contest.icon;

              return (
                <article
                  key={contest.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  {/* Contest Visual */}
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-accent/10 to-secondary/20">
                    <div className="absolute inset-0 bg-primary/5" />

                    <div className="flex size-20 items-center justify-center rounded-3xl border border-white/40 bg-white/20 text-primary shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                      <Icon size={38} />
                    </div>

                    <span className="absolute left-5 top-5 rounded-full border border-primary/20 bg-surface/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
                      {contest.category}
                    </span>

                    <span
                      className={`absolute bottom-5 right-5 rounded-full px-4 py-1.5 text-xs font-semibold ${contest.statusStyle}`}
                    >
                      {contest.status}
                    </span>
                  </div>

                  {/* Contest Information */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {contest.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {contest.description}
                    </p>

                    <div className="mt-6 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <CalendarDays size={17} className="text-primary" />
                        Dates to be announced
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Users size={17} className="text-primary" />
                        Participant details to be announced
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-muted">
                      <Clock size={17} className="text-primary" />
                      Contest information will be published here.
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contest Process */}
      <section className="bg-surface py-20">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              The Experience
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              More Than a Competition
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Our contests encourage creativity, learning, and recognition
              within the photography community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contestFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contest Guidelines */}
      <section className="bg-background py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-8 text-center sm:p-12">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Sparkles size={28} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
              Ready to Share Your Creativity?
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Keep an eye on our announcements for upcoming contests,
              participation guidelines, submission instructions, and important
              deadlines.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Contact the Club
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
