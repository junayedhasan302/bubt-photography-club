import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Sparkles,
  Aperture,
  Focus,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="container-custom">
        <div className="group relative isolate overflow-hidden rounded-[2rem] bg-[#102c57] px-6 py-16 text-center shadow-[0_25px_80px_rgba(15,45,90,0.20)] sm:px-12 sm:py-20 lg:py-24">
          {/* Background Artwork */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#163f78] via-[#102c57] to-[#081a35]" />

            <div className="absolute -left-32 -top-40 size-[420px] rounded-full border border-white/[0.07]" />
            <div className="absolute -left-20 -top-28 size-[300px] rounded-full border border-white/[0.08]" />

            <div className="absolute -bottom-64 -right-24 size-[550px] rounded-full border border-white/[0.08]" />
            <div className="absolute -bottom-48 -right-12 size-[400px] rounded-full border border-white/[0.08]" />

            <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.10] blur-[120px]" />

            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:42px_42px]" />
          </div>

          {/* Decorative Icons */}
          <div className="pointer-events-none absolute left-8 top-10 hidden text-white/[0.12] sm:block">
            <Aperture size={75} strokeWidth={0.8} />
          </div>

          <div className="pointer-events-none absolute bottom-10 right-10 hidden text-white/[0.12] sm:block">
            <Focus size={85} strokeWidth={0.8} />
          </div>

          {/* Main Content */}
          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6">
              <Camera size={31} strokeWidth={1.5} />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-blue-100 uppercase backdrop-blur-sm sm:text-xs">
              <Sparkles size={14} />
              Join Our Community
            </div>

            <h2 className="mt-7 font-heading text-3xl leading-[1.15] font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
              Your Perspective.
              <br />
              <span className="text-blue-300">Your Story. Your Club.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-blue-100/85 sm:text-base">
              Love photography? Connect with creative people, discover new
              perspectives and become part of the BUBT Photography Club
              community.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group/button inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#17447e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
              >
                Get Involved
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover/button:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Discover Our Club
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <p className="mt-9 text-[10px] font-medium tracking-[0.22em] text-blue-200/60 uppercase">
              BUBT Photography Club · See Beyond the Frame
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
