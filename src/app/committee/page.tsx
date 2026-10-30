import type { Metadata } from "next";
import { Users, UserRound, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Committee",
  description: "Meet the Executive Committee of BUBT Photography Club.",
};

const committeeMembers = [
  { id: 1, position: "President", name: "Member Name" },
  { id: 2, position: "Vice President (Male/Female)", name: "Member Name" },
  { id: 3, position: "Vice President (Female)", name: "Member Name" },
  { id: 4, position: "General Secretary", name: "Member Name" },
  { id: 5, position: "Treasurer", name: "Member Name" },
  { id: 6, position: "Joint Secretary", name: "Member Name" },
  { id: 7, position: "Joint Treasurer", name: "Member Name" },
  { id: 8, position: "Organizing Secretary", name: "Member Name" },
  { id: 9, position: "Office Secretary", name: "Member Name" },
  { id: 10, position: "Media & Publications Secretary", name: "Member Name" },
  { id: 11, position: "Social Welfare Secretary", name: "Member Name" },
  { id: 12, position: "Event Secretary", name: "Member Name" },
  { id: 13, position: "Executive Member", name: "Member Name" },
];

export default function CommitteePage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Users size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            Leadership & Management
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Executive <span className="text-primary">Committee</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Meet the dedicated individuals working together to lead, organize,
            and develop BUBT Photography Club.
          </p>

          <span className="mt-7 inline-flex rounded-full border border-primary/20 bg-primary-light px-5 py-2 text-sm font-semibold text-primary">
            2026 Committee
          </span>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Our Leadership Team
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Meet the <span className="text-primary">Team</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              The people behind our community, creativity, and activities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {committeeMembers.map((member) => (
              <article
                key={member.id}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <UserRound size={30} />
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                      Position {String(member.id).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 font-bold text-foreground">
                      {member.position}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-sm font-semibold text-foreground">
                    {member.name}
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    BUBT Photography Club
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Committees */}
      <section className="bg-surface py-16">
        <div className="container-custom text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Camera size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
            Previous Committees
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Explore the contributions and achievements of our previous
            leadership teams.
          </p>

          <p className="mt-5 text-xs text-muted">
            Previous committee records will be published here.
          </p>
        </div>
      </section>
    </>
  );
}
