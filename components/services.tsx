// components/services.tsx
import { Fragment } from "react";

interface Service {
  index: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    index: "01",
    title: "Architecture Design",
    description:
      "Concept development and design planning tailored to site, function, and client vision.",
  },
  {
    index: "02",
    title: "Construction",
    description:
      "End-to-end construction management, from groundwork to finishing with quality control.",
  },
  {
    index: "03",
    title: "Interior Design",
    description:
      "Interior spatial planning that complements architectural intent and daily living.",
  },
  {
    index: "04",
    title: "Civil Engineering",
    description:
      "Structural and technical engineering to ensure safety, durability, and efficiency.",
  },
];

export default function Services() {
  return (
    <section className="border-b border-black px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>Services</span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-neutral-400 md:block">
            02 / 04
          </span>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-black" />

        {/* Heading Row */}
        <div className="mt-12 flex flex-col gap-4 md:mt-16 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-5xl">
            What We Do
          </h2>

          <p className="font-serif text-lg text-neutral-600 md:mb-1 md:max-w-xs">
            From ideas to built spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {services.map((service) => (
            <div
              key={service.index}
              className="flex h-[420px] flex-col justify-between border border-black p-6"
            >
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                {service.index}
              </span>

              <div>
                <h3 className="font-serif text-xl leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}