import type { Metadata } from "next";
import Link from "next/link";
import {
  Bell,
  CalendarDays,
  ArrowUpRight,
  Megaphone,
  Pin,
  Newspaper,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Read the latest news, announcements, notices, and updates from BUBT Photography Club.",
};

const announcements = [
  {
    id: 1,
    category: "Club News",
    title: "Welcome to BUBT Photography Club's Official Website",
    description:
      "Our official website is being developed to bring our community, activities, photographs, and announcements together in one place.",
    date: "Date to be announced",
    pinned: true,
    icon: Newspaper,
  },
  {
    id: 2,
    category: "Contest Update",
    title: "Photography Contest Updates",
    description:
      "Information about upcoming photography competitions, participation guidelines, and submission deadlines will be published here.",
    date: "Date to be announced",
    pinned: false,
    icon: Megaphone,
  },
  {
    id: 3,
    category: "Club Activities",
    title: "Upcoming Club Activities",
    description:
      "Stay connected for updates about photography walks, workshops, exhibitions, and other club activities.",
    date: "Date to be announced",
    pinned: false,
    icon: Info,
  },
];

export default function AnnouncementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Bell size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            Stay Connected
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            News & <span className="text-primary">Announcements</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Stay informed about club news, important notices, photography
            activities, competitions, and upcoming opportunities.
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Latest Updates
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              What's New?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Find the latest information and important updates from BUBT
              Photography Club.
            </p>
          </div>

          <div className="grid gap-5">
            {announcements.map((announcement) => {
              const Icon = announcement.icon;

              return (
                <article
                  key={announcement.id}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon size={27} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                          {announcement.category}
                        </span>

                        {announcement.pinned && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                            <Pin size={13} />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                        {announcement.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {announcement.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                        <CalendarDays size={15} className="text-primary" />
                        {announcement.date}
                      </div>
                    </div>

                    <div className="hidden shrink-0 items-start sm:flex">
                      <ArrowUpRight
                        size={21}
                        className="text-muted transition-colors group-hover:text-primary"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty State Notice */}
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
            <Bell size={30} className="mx-auto text-primary" />

            <h3 className="mt-4 font-bold text-foreground">
              More Updates Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-muted">
              Official notices and announcements will be published here as they
              become available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Stay Connected With Us
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Follow our official channels and contact us for further information
            about club activities.
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
