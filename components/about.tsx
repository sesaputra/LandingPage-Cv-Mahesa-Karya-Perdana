import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="border-b border-black px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>About</span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-neutral-400 md:block">
            01 / 04
          </span>
        </div>

        <div className="mt-4 border-t border-black" />

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          
          {/* Left Content */}
          <div className="md:col-span-6 lg:col-span-5">
            <p className="max-w-xl font-serif text-3xl leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-5xl">
              We believe{" "}
              <span className="text-neutral-400">Architecture</span>{" "}
              is more than building structures.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                  Our Approach
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Thoughtful design, precise execution, and attention to
                  every detail from concept to completion.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                  Our Focus
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Creating functional spaces that respond to context,
                  material, and the people who use them.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-3 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <span>Discover Our Story</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/images/hero.jpg"
                alt="Architecture project by Mahesa Karya Perdana"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              <span>Architecture & Construction</span>
              <span>MKP — 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}