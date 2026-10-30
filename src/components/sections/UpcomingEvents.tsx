import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  MapPin,
  Users,
} from "lucide-react";

const upcomingEvents = [
  {
    number: "01",
    category: "Photography",
    title: "Photography Walk",
    description:
      "Explore the world through your lens and capture meaningful moments together.",
    date: "Date to be announced",
    location: "BUBT Campus",
    icon: Camera,
    featured: true,
  },
  {
    number: "02",
    category: "Learning",
    title: "Photography Workshop",
    description:
      "Learn photography techniques, explore creative ideas and improve your skills.",
    date: "Date to be announced",
    location: "To be announced",
    icon: Users,
    featured: false,
  },
  {
    number: "03",
    category: "Competition",
    title: "Inter-University Photo Contest",
    description:
      "A creative platform for photographers to share their perspectives and stories.",
    date: "Date to be announced",
    location: "To be announced",
    icon: CalendarDays,
    featured: false,
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 size-[380px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <span className="size-2 rounded-full bg-primary" />
              What's Happening
            </span>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
              Moments Worth
              <span className="text-primary"> Experiencing.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              Discover upcoming activities, creative sessions and opportunities
              to connect with fellow photography enthusiasts.
            </p>
          </div>

          <Link
            href="/events"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Explore All Events
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {upcomingEvents.map((event) => {
            const EventIcon = event.icon;

            return (
              <article
                key={event.number}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_45px_rgba(35,85,150,0.08)] ${
                  event.featured ? "lg:-translate-y-2" : ""
                }`}
              >
                {/* Card Visual */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-primary-light">
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(49,107,219,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(49,107,219,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

                  <div className="absolute -right-12 -top-16 size-52 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute -right-5 -top-9 size-36 rounded-full border border-primary/15" />

                  <div className="relative flex size-20 items-center justify-center rounded-3xl border border-primary/15 bg-background/80 text-primary shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <EventIcon size={34} strokeWidth={1.4} />
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-primary/15 bg-background/80 px-3 py-1.5 text-[10px] font-bold tracking-wider text-primary uppercase backdrop-blur-sm">
                    {event.category}
                  </span>

                  <span className="absolute bottom-4 right-5 font-heading text-5xl font-semibold tracking-tighter text-primary/10">
                    {event.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <CalendarDays size={14} />
                    {event.date}
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {event.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                    {event.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs font-medium text-muted">
                    <MapPin size={15} className="shrink-0 text-primary" />
                    {event.location}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface/60 px-5 py-7 text-center sm:flex-row sm:text-left">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            <CalendarDays size={21} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Stay Connected
            </h3>
            <p className="mt-1 text-xs leading-6 text-muted">
              Event schedules and registration details will be announced through
              our official channels.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/events" className="btn-primary group">
            View All Events
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
