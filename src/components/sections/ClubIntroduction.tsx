
import Link from "next/link";
import {
  Aperture,
  Eye,
  Heart,
  Users,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Eye,
    title: "See Differently",
    description:
      "Discover beauty in ordinary moments and explore the world through a creative perspective.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Create Together",
    description:
      "Share knowledge, exchange ideas, and grow through our common love for photography.",
  },
  {
    number: "03",
    icon: Users,
    title: "Build Community",
    description:
      "Connect with fellow photography enthusiasts and create meaningful memories together.",
  },
];

export default function ClubIntroduction() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-48 top-1/3 size-[400px] rounded-full bg-primary/[0.045] blur-[100px]" />

      <div className="container-custom relative">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* Introduction */}
          <div className="max-w-xl">

            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-primary/15 bg-primary-light text-primary">
                <Aperture size={20} strokeWidth={1.7} />
              </span>

              <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[3.25rem]">
              More Than a Club,
              <br />
              <span className="text-primary">
                A Creative Community.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-base leading-8 text-muted">
              BUBT Photography Club is a platform for students who love
              photography, creativity, and visual storytelling. We bring
              together people with different perspectives to learn, explore,
              and express themselves through the art of photography.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              From capturing everyday moments to organizing creative
              activities, we believe every photograph has a story worth
              sharing.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Learn More About Us

              <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 transition-all duration-200 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            {/* Decorative Bottom Line */}
            <div className="mt-12 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-primary" />
              <span className="h-px w-20 bg-border" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                Capture Your Perspective
              </span>
            </div>
          </div>

          {/* Creative Values */}
          <div className="relative">

            {/* Background Accent */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/[0.035] rotate-[2deg]" />

            <div className="grid gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.number}
                    className={`group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(35,85,150,0.08)] sm:p-7 ${
                      index === 1 ? "lg:ml-10" : ""
                    }`}
                  >
                    {/* Hover Accent */}
                    <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon size={23} strokeWidth={1.7} />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                            {value.title}
                          </h3>

                          <span className="text-xs font-semibold tracking-widest text-primary/60">
                            {value.number}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-7 text-muted">
                          {value.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight
                        size={17}
                        className="mt-1 hidden shrink-0 text-muted/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:block"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-center">
              <span className="size-1.5 rounded-full bg-primary" />
              <p className="text-xs font-medium tracking-wide text-muted">
                A space to learn, create, and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
