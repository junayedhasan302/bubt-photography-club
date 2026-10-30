import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Aperture,
  Images,
  Focus,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0 -z-10 art-grid opacity-30" />

      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[400px] rounded-full bg-secondary/10 blur-[110px]" />

      <div className="container-custom relative grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        {/* Hero Content */}
        <div className="animate-fade-up relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-primary-light text-primary">
              <Aperture size={18} strokeWidth={1.7} />
            </span>

            <span className="text-xs font-bold tracking-[0.16em] text-muted uppercase sm:text-sm">
              BUBT Photography Club
            </span>

            <span className="h-px w-10 bg-primary/40" />
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl font-heading text-[clamp(3rem,6.5vw,5.5rem)] leading-[1.08] font-semibold tracking-[-0.065em] text-foreground">
            See Beyond.
            <br />
            Frame the <span className="text-primary">Moment.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Every photograph has a story waiting to be told. We bring together
            creative minds who explore the world through a different
            perspective.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/gallery" className="btn-primary group">
              Explore Gallery
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link href="/about" className="btn-secondary group">
              Discover Our Club
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Brand Highlights */}
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-5 border-t border-border pt-7">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                Create
              </p>
              <p className="mt-1 text-xs text-muted">
                Capture your perspective
              </p>
            </div>

            <span className="hidden h-9 w-px bg-border sm:block" />

            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                Connect
              </p>
              <p className="mt-1 text-xs text-muted">Share your stories</p>
            </div>

            <span className="hidden h-9 w-px bg-border sm:block" />

            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                Inspire
              </p>
              <p className="mt-1 text-xs text-muted">
                See the world differently
              </p>
            </div>
          </div>
        </div>

        {/* Artistic Photography Composition */}
        <div className="relative mx-auto w-full max-w-[540px] animate-fade-up lg:ml-auto">
          {/* Background Frame */}
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/[0.025] rotate-[-5deg]" />

          {/* Main Artwork */}
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.75rem] border border-border bg-surface-secondary shadow-[0_30px_90px_rgba(15,35,70,0.12)]">
            {/* Artistic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(83,145,218,0.25),transparent_55%),linear-gradient(145deg,#172b49_0%,#0b1424_48%,#152b49_100%)]" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-20 art-grid" />

            {/* Large Lens Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex aspect-square w-[72%] items-center justify-center rounded-full border border-white/15 bg-white/[0.025] shadow-[0_0_80px_rgba(68,139,219,0.14)]">
                <div className="absolute inset-[9%] rounded-full border border-white/20" />

                <div className="absolute inset-[19%] rounded-full border border-white/15" />

                <div className="absolute inset-[29%] rounded-full border border-white/10" />

                <div className="absolute inset-[36%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#7eb7ec_0%,#285a91_28%,#101d32_68%,#080f1c_100%)] shadow-[0_0_60px_rgba(87,159,235,0.3)]" />

                <div className="absolute inset-[43%] rounded-full border border-white/20" />

                <div className="absolute inset-[48%] rounded-full bg-[#080f1c] shadow-inner" />

                <div className="absolute left-[24%] top-[23%] size-7 rounded-full bg-white/20 blur-md" />

                <div className="absolute right-[25%] bottom-[22%] size-3 rounded-full bg-blue-300/60 blur-sm" />

                {/* Focus Markers */}
                <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 border-l border-t border-white/50" />

                <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 border-r border-b border-white/50" />

                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 border-t border-l border-white/50" />

                <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 border-b border-r border-white/50" />
              </div>
            </div>

            {/* Top Label */}
            <div className="absolute left-6 top-6 flex items-center gap-2 text-white/75">
              <Focus size={15} />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase">
                A Different Perspective
              </span>
            </div>

            {/* Artwork Corner */}
            <div className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
              <Camera size={19} strokeWidth={1.6} />
            </div>

            {/* Bottom Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080f1c] via-[#080f1c]/75 to-transparent px-7 pb-7 pt-24">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-blue-200/75 uppercase">
                The Art of Seeing
              </p>

              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Moments in Focus.
              </h2>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                Capture the ordinary. Discover the extraordinary.
              </p>
            </div>
          </div>

          {/* Floating Camera Badge */}
          <div className="absolute -left-5 top-[24%] flex size-14 animate-float items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-xl sm:-left-7">
            <Camera size={25} strokeWidth={1.6} />
          </div>

          {/* Floating Gallery Badge */}
          <div className="absolute -right-4 bottom-[23%] flex size-14 animate-float items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-xl [animation-delay:1.2s] sm:-right-7">
            <Images size={24} strokeWidth={1.6} />
          </div>

          {/* Small Decorative Dot */}
          <div className="absolute -right-2 -top-3 size-4 rounded-full border-[3px] border-background bg-primary shadow-[0_0_18px_rgba(49,107,219,0.4)]" />
        </div>
      </div>
    </section>
  );
}
