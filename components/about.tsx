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

        {/* Divider */}
        <div className="mt-4 border-t border-black" />

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-8">

          {/* ========================================
              LEFT CONTENT
          ======================================== */}
          <div className="md:col-span-6 lg:col-span-5">

            {/* Main Statement */}
            <h2 className="max-w-xl font-serif text-3xl leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-5xl">
              We believe{" "}
              <span className="text-neutral-400">Architecture</span>{" "}
              is more than building structures.
            </h2>

            {/* Approach & Focus */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">

              {/* Our Approach */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
                  Our Approach
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Thoughtful design, precise execution, and attention to
                  every detail from concept to completion.
                </p>
              </div>

              {/* Our Focus */}
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

            {/* CTA */}
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

            {/* Supporting Statement */}
            <div className="mt-16 border-t border-neutral-300 pt-8 md:mt-20 md:pt-10">
              <p className="max-w-md font-serif text-xl leading-relaxed md:text-2xl">
                From concept to construction, we combine creativity,
                engineering, and precision to create spaces with purpose
                and lasting value.
              </p>
            </div>

          </div>

          {/* ========================================
              RIGHT IMAGE
          ======================================== */}
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

            {/* Image Caption */}
            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              <span>Architecture & Construction</span>

              <span>MKP — 01</span>
            </div>

          </div>

        </div>

        {/* ========================================
            COMPANY INFORMATION
        ======================================== */}
        <div className="mt-16 grid grid-cols-1 border-t border-black sm:grid-cols-3 md:mt-20">

          {/* Established */}
          <div className="border-b border-black py-6 sm:border-b-0 sm:border-r sm:pr-6">
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">
              2018
            </p>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
              Established
            </p>
          </div>

          {/* Location */}
          <div className="border-b border-black py-6 sm:border-b-0 sm:border-r sm:px-6">
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">
              Bali
            </p>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
              Based In
            </p>
          </div>

          {/* Core Discipline */}
          <div className="py-6 sm:pl-6">
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">
              Architecture
            </p>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
              Core Discipline
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}