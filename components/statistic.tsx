// components/stats-cta.tsx
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "50+", label: "Projects" },
  { value: "8+", label: "Year Experience" },
  { value: "5+", label: "Cities" },
];

export default function Statistic() {
  return (
    <section className="border-b border-black px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1440px]">

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 text-center" id="contact-section">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 font-serif text-base text-neutral-700 md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-20 flex flex-col items-center text-center md:mt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500 md:text-base">
            Have a Project in Mind?
          </p>

          <p className="mt-4 max-w-md font-serif text-2xl leading-snug md:text-3xl">
            Let&apos;s build something meaningful together.
          </p>

          <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex w-fit items-center gap-3 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-black hover:text-white"
            >
          <span>Start a Conversation</span>

         <span
         aria-hidden="true"
         className="transition-transform duration-300 group-hover:translate-x-1"
       >
       →
      </span>
      </Link>
        </div>

      </div>
    </section>
  );
}