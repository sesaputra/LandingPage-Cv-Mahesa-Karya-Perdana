import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-16 border-b border-black">
        <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text--neutral-600">
                <span className="w-1.5 h-1.5 bg-black rounded-full"/>
                    EST. 2018 <span className="text-neutral-400">- DENPASAR BALI</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block">ARCHITECTURE</span>
                <span className="block">& CONSTRUCTION</span>
            </h1>
            <p className="mt-4 text-sm font-medium text-neutral-700">
          Designing spaces that matter.
        </p>
        <Link
          href="/projects"
          className="mt-10 inline-flex w-fit items-center gap-2 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
        >
          Explore Our Projects
          <span aria-hidden>→</span>
        </Link>
        </div>
        <div className="relative w-full h-[400px] md:h-full">
            <Image 
            src="/images/hero.jpg"
            alt="Architecture project"
            fill
            className="object-cover"
            priority
            />
        </div>
    </section>
    
  );
}