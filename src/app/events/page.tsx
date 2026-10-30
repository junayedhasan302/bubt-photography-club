import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowUpRight,
  Camera,
  Images,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover photography walks, workshops, exhibitions, and activities organized by BUBT Photography Club.",
};

const upcomingEvents = [
  {
    id: 1,
    title: "Photography Walk",
    category: "Photography Activity",
    description:
      "Explore the surroundings, capture interesting moments, and learn to see everyday life through a creative lens.",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "BUBT Campus",
  },
  {
    id: 2,
    title: "Photography Workshop",
    category: "Learning & Workshop",
    description:
      "An opportunity to develop photography skills, explore techniques, and learn from fellow photography enthusiasts.",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "BUBT Campus",
  },
  {
    id: 3,
    title: "Photography Exhibition",
    category: "Exhibition",
    description:
      "A platform to showcase creative photographs, share visual stories, and celebrate photography.",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "To be announced",
  },
];

const eventTypes = [
  {
    title: "Photography Walks",
    description:
      "Explore new places, practice photography, and capture meaningful moments.",
    icon: Camera,
  },
  {
    title: "Workshops",
    description:
      "Learn photography techniques, improve skills, and exchange knowledge.",
    icon: Images,
  },
  {
    title: "Exhibitions",
    description:
      "Present creative work and share visual stories with the community.",
    icon: CalendarDays,
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <CalendarDays size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            Learn. Explore. Experience.
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Club <span className="text-primary">Events</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Discover our photography activities, learning opportunities,
            exhibitions, and memorable experiences.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              What's Happening
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Stay connected with our upcoming activities and be part of the
              photography community.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20">
                  <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-transparent" />

                  <div className="flex size-16 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-primary backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <Camera size={30} />
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-primary/20 bg-surface/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
                    {event.category}
                  </span>

                  <span className="absolute bottom-5 right-5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-primary">
                    Coming Soon
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {event.description}
                  </p>

                  <div className="mt-6 grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <CalendarDays size={17} className="text-primary" />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Clock size={17} className="text-primary" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted sm:col-span-2">
                      <MapPin size={17} className="text-primary" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-surface py-20">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Our Activities
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Different opportunities to learn, practice, and grow together as
              photographers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {eventTypes.map((event) => {
              const Icon = event.icon;

              return (
                <div
                  key={event.title}
                  className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-background py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Images size={27} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
              Past Events
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Explore memories, photographs, and highlights from our previous
              club activities.
            </p>

            <p className="mt-5 text-xs text-muted">
              Event archives will be available here soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Want to Be Part of Our Events?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Get in touch with BUBT Photography Club and stay connected with our
            upcoming activities.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
