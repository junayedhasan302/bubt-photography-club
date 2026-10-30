import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Megaphone,
  Newspaper,
  Pin,
} from "lucide-react";

const announcements = [
  {
    id: "01",
    category: "Official Notice",
    title: "Club announcements will appear here",
    description:
      "Important notices, official updates and announcements from BUBT Photography Club will be published in this section.",
    date: "Date to be announced",
    icon: Megaphone,
    featured: true,
  },
  {
    id: "02",
    category: "Club News",
    title: "Stay updated with club activities",
    description:
      "Discover updates about photography activities, workshops, events and upcoming programs.",
    date: "Date to be announced",
    icon: Newspaper,
    featured: false,
  },
];

export default function LatestAnnouncements() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[380px] rounded-full bg-primary/[0.045] blur-[110px]" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <Bell size={15} />
              Stay Informed
            </span>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
              News, Notices &<span className="text-primary"> Updates.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted sm:text-base">
              Your source for official notices, club news and the latest updates
              from BUBT Photography Club.
            </p>
          </div>

          <Link
            href="/announcements"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View All Updates
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Announcement Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {announcements.map((announcement) => {
            const AnnouncementIcon = announcement.icon;

            return (
              <article
                key={announcement.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_40px_rgba(35,85,150,0.08)] sm:p-8 ${
                  announcement.featured ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                {/* Card Top */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-3 py-1.5 text-[10px] font-bold tracking-wider text-primary uppercase">
                    <AnnouncementIcon size={13} />
                    {announcement.category}
                  </span>

                  {announcement.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-primary uppercase">
                      <Pin size={12} />
                      Featured
                    </span>
                  )}
                </div>

                {/* Main Content */}
                <div className="mt-9 flex flex-1 flex-col">
                  <span className="font-heading text-5xl font-semibold tracking-tighter text-primary/[0.12]">
                    {announcement.id}
                  </span>

                  <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {announcement.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                    {announcement.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted">
                    <CalendarDays size={15} className="text-primary" />
                    {announcement.date}
                  </div>

                  <Link
                    href="/announcements"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Read Updates
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-surface/60 px-5 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Bell size={21} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Don't Miss an Update
            </h3>

            <p className="mt-1 text-xs leading-6 text-muted">
              Follow our official communication channels for important
              announcements and club news.
            </p>
          </div>

          <div className="hidden flex-1 sm:block" />

          <Link
            href="/announcements"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover"
          >
            Explore Notices
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
