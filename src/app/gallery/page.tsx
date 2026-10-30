import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Images, ArrowUpRight, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photographs, creative works, and memorable moments from BUBT Photography Club.",
};

const galleryCategories = [
  { name: "All Photos", count: "All" },
  { name: "Nature", count: "01" },
  { name: "Street", count: "02" },
  { name: "Portrait", count: "03" },
  { name: "Events", count: "04" },
  { name: "Creative", count: "05" },
];

const galleryPhotos = [
  {
    id: 1,
    title: "Nature Photography",
    category: "Nature",
    description: "Discover the beauty of the natural world.",
    style: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    id: 2,
    title: "Street Stories",
    category: "Street",
    description: "Every street has a story worth capturing.",
    style: "from-orange-500/30 via-amber-500/10 to-transparent",
  },
  {
    id: 3,
    title: "Portrait Moments",
    category: "Portrait",
    description: "Expressions, emotions, and human connections.",
    style: "from-purple-500/30 via-pink-500/10 to-transparent",
  },
  {
    id: 4,
    title: "Club Activities",
    category: "Events",
    description: "Memories from our photography community.",
    style: "from-blue-500/30 via-cyan-500/10 to-transparent",
  },
  {
    id: 5,
    title: "Creative Frames",
    category: "Creative",
    description: "A different perspective through the lens.",
    style: "from-rose-500/30 via-red-500/10 to-transparent",
  },
  {
    id: 6,
    title: "Landscape Stories",
    category: "Nature",
    description: "Exploring colors, light, and landscapes.",
    style: "from-lime-500/30 via-green-500/10 to-transparent",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Gallery Hero */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-custom relative text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <Images size={32} />
          </div>

          <span className="mt-6 block text-sm font-semibold tracking-widest text-primary uppercase">
            Moments Through Our Lens
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Photo <span className="text-primary">Gallery</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            A collection of photographs, creative perspectives, and
            unforgettable moments captured by our photography community.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">
                Explore Our Collection
              </span>

              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Photography Showcase
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted sm:text-right">
              Different perspectives, different stories, one creative community.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            {galleryCategories.map((category, index) => (
              <span
                key={category.name}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                  index === 0
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-muted"
                }`}
              >
                {category.name}
              </span>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo) => (
              <article
                key={photo.id}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                {/* Image Placeholder */}
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${photo.style}`}
                >
                  <div className="absolute inset-0 bg-background/10 transition-colors duration-300 group-hover:bg-background/0" />

                  <div className="flex size-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <ImageIcon size={30} />
                  </div>

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {photo.category}
                  </span>

                  <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Camera size={17} />
                  </span>
                </div>

                {/* Photo Information */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">
                        {photo.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {photo.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Future Gallery Notice */}
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
            <Images size={30} className="mx-auto text-primary" />

            <h3 className="mt-4 font-bold text-foreground">
              More Stories Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-muted">
              Our photography collection is growing. More photographs and
              creative works will be added to the gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-surface py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Have a Story to Share?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
            Connect with BUBT Photography Club and become part of our creative
            photography community.
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
