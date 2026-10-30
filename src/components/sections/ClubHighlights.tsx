import { Camera, Users, Trophy, CalendarDays } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Photography",
    description: "A community built around visual storytelling.",
    icon: Camera,
    value: "Explore",
  },
  {
    id: 2,
    title: "Community",
    description: "Connect with creative minds and photographers.",
    icon: Users,
    value: "Connect",
  },
  {
    id: 3,
    title: "Achievements",
    description: "Celebrate creativity, participation, and success.",
    icon: Trophy,
    value: "Achieve",
  },
  {
    id: 4,
    title: "Activities",
    description: "Learn and grow through exciting club activities.",
    icon: CalendarDays,
    value: "Participate",
  },
];

export default function ClubHighlights() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            What Makes Us Special
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Club at a <span className="text-primary">Glance</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            A space to explore photography, build connections, and turn creative
            ideas into memorable experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-border bg-surface p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={27} />
                </div>

                <p className="mt-6 text-lg font-bold text-foreground">
                  {item.value}
                </p>

                <h3 className="mt-2 text-base font-semibold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
