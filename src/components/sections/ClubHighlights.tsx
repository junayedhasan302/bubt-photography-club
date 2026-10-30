import {
  Camera,
  Users,
  Trophy,
  CalendarDays,
  ArrowUpRight,
  Aperture,
} from "lucide-react";

const highlights = [
  {
    id: "01",
    title: "Photography",
    description:
      "A community built around visual storytelling and creative expression.",
    icon: Camera,
    value: "Explore",
  },
  {
    id: "02",
    title: "Community",
    description:
      "Connect with creative minds and photographers who share your vision.",
    icon: Users,
    value: "Connect",
  },
  {
    id: "03",
    title: "Achievements",
    description:
      "Celebrate creativity, participation, and every milestone along the way.",
    icon: Trophy,
    value: "Achieve",
  },
  {
    id: "04",
    title: "Activities",
    description:
      "Learn, experiment, and grow through engaging photography activities.",
    icon: CalendarDays,
    value: "Participate",
  },
];

export default function ClubHighlights() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[350px] rounded-full bg-primary/[0.045] blur-[100px]" />

      <div className="container-custom relative">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/50" />

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
              <Aperture size={15} />
              What Makes Us Special
            </span>

            <span className="h-px w-8 bg-primary/50" />
          </div>

          <h2 className="mt-6 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
            Our Club at a<span className="text-primary"> Glance.</span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
            A space to explore photography, build meaningful connections, and
            turn creative ideas into memorable experiences.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_20px_50px_rgba(35,85,150,0.10)]"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-heading text-sm font-semibold tracking-widest text-primary/60">
                    {item.id}
                  </span>

                  <span className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-7 flex size-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary-light text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="mt-7">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-primary uppercase">
                    {item.value}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                {/* Background Number */}
                <span className="pointer-events-none absolute -right-2 bottom-0 -z-0 font-heading text-8xl font-bold text-primary/[0.035] transition-colors duration-300 group-hover:text-primary/[0.07]">
                  {item.id}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
