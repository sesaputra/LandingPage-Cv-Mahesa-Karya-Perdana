import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-72px)] grid-cols-1 gap-10 border-b border-black px-6 pb-12 pt-32 md:grid-cols-2 md:gap-12 md:px-12 md:pb-16 md:pt-36">
      <div className="flex flex-col pl-0 md:pl-8 lg:pl-20">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />

          <span>EST. 2018</span>

          <span className="text-neutral-400">— DENPASAR, BALI</span>
        </div>

        <h1 className="mt-12 max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
          <span className="block">ARCHITECTURE</span>
          <span className="block">&amp; CONSTRUCTION</span>
        </h1>

        <div className="mt-6 max-w-md">
          <p className="italic text-sm font-medium leading-6 text-neutral-700 md:text-base">
            Designing spaces that matter.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
            We design and build thoughtful spaces with a focus on
            functionality, materiality, and lasting value.
            </p>
        </div>

        <div className="mt-16 md:mt-auto md:pt-32">
          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-3 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-black hover:text-white"
          >
            <span>Explore Our Projects</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

      </div>

      {/* Hero Image */}
      <div className="relative h-[420px] w-full md:h-[560px] lg:h-[640px]">
        <Image
          src="/images/projects.jpg"
          alt="Architecture project by Mahesa Karya Perdana"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}