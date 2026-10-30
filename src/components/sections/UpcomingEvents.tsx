import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Photography Walk",
    category: "Outdoor Activity",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "BUBT Campus",
  },
  {
    id: 2,
    title: "Photography Workshop",
    category: "Learning Session",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "BUBT Campus",
  },
  {
    id: 3,
    title: "Inter-University Photo Contest",
    category: "Photography Contest",
    date: "Coming Soon",
    time: "To Be Announced",
    location: "Online",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              What's Happening
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Upcoming <span className="text-primary">Events</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Explore our upcoming activities, workshops, photography walks, and
              creative events.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary">
                  {event.category}
                </span>

                <CalendarDays size={21} className="text-primary" />
              </div>

              <h3 className="mt-7 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {event.title}
              </h3>

              <div className="mt-6 space-y-4 border-t border-border pt-5">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <CalendarDays size={17} className="text-primary" />
                  {event.date}
                </div>

                <div className="flex items-center gap-3 text-sm text-muted">
                  <Clock size={17} className="text-primary" />
                  {event.time}
                </div>

                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={17} className="text-primary" />
                  {event.location}
                </div>
              </div>

              <Link
                href="/events"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Explore Event
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
