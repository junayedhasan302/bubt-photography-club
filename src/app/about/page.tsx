import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Eye,
  Heart,
  Users,
  Target,
  Lightbulb,
  Aperture,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BUBT Photography Club, our vision, mission, and creative community.",
};

const coreValues = [
  {
    icon: Camera,
    title: "Creativity",
    description:
      "Encouraging creative thinking and discovering unique perspectives through photography.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a welcoming environment where photography enthusiasts can connect and grow.",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description:
      "Learning from one another and creating meaningful experiences together.",
  },
  {
    icon: Eye,
    title: "Visual Storytelling",
    description:
      "Expressing ideas, emotions, and stories through the power of images.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Get to Know Us
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We See the World
            <span className="text-primary"> Through a Lens.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            BUBT Photography Club brings together photography enthusiasts who
            love creativity, visual storytelling, and exploring the world
            through different perspectives.
          </p>
        </div>
      </section>

      {/* About Introduction */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex aspect-[5/4] items-center justify-center rounded-3xl border border-border bg-surface-secondary">
            <div className="text-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary-light text-primary">
                <Aperture size={45} />
              </div>

              <p className="mt-5 text-lg font-bold text-foreground">
                BUBT Photography Club
              </p>

              <p className="mt-2 text-sm text-muted">
                Capture. Create. Connect.
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Community of
              <span className="text-primary"> Creative Minds.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              BUBT Photography Club is a creative platform for students
              interested in photography and visual arts at Bangladesh University
              of Business and Technology.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
              We aim to create opportunities for members to explore photography,
              develop their skills, exchange knowledge, and express their
              creativity through meaningful visual stories.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
              Beyond taking photographs, we believe in building connections,
              sharing experiences, and growing together as a community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Our Purpose
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Mission & Vision
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <Target size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-foreground">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                To create an engaging photography community where students can
                learn, practice, share knowledge, develop creative skills, and
                participate in meaningful photography activities.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <Lightbulb size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-foreground">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                To build a recognized creative platform that inspires
                photography enthusiasts, encourages visual storytelling, and
                connects creative minds beyond the university campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              What We Believe In
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              The principles that guide our creative community and activities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-surface py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Be Part of Our <span className="text-primary">Journey.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Explore our activities, discover our photography community, and
            connect with us.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
