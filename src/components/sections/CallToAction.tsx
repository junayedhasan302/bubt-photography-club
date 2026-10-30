import Link from "next/link";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-16 text-center shadow-2xl shadow-blue-900/20 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 size-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
              <Camera size={32} />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase">
              <Sparkles size={15} />
              Join Our Community
            </div>

            <h2 className="mt-6 text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">
              Your Perspective.
              <br />
              Your Story. Your Club.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Love photography? Connect with creative people, explore new
              perspectives, and become part of the BUBT Photography Club
              community.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition-all hover:-translate-y-1 hover:bg-blue-50"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
