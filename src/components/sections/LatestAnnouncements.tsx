import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    category: "Notice",
    title: "Club announcements will appear here",
    description:
      "Stay connected with BUBT Photography Club for the latest notices and important updates.",
    date: "Coming Soon",
  },
  {
    id: 2,
    category: "News",
    title: "Stay updated with club activities",
    description:
      "Find updates about photography activities, workshops, and upcoming programs.",
    date: "Coming Soon",
  },
];

export default function LatestAnnouncements() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Stay Informed
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest <span className="text-primary">Updates</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Get the latest news, official notices, and announcements from BUBT
              Photography Club.
            </p>
          </div>

          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View All Updates
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {announcements.map((announcement) => (
            <article
              key={announcement.id}
              className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary">
                  <Megaphone size={14} />
                  {announcement.category}
                </span>

                <Bell size={20} className="text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground">
                {announcement.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {announcement.description}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted">
                <CalendarDays size={16} className="text-primary" />
                {announcement.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
