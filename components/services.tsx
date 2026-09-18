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
        <div className="flex items-center justify-between" id="services-section">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>Services</span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-neutral-400 md:block">
            02 / 04
          </span>
        </div>

        <div className="mt-4 border-t border-black" />

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Our Services
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="max-w-md text-sm leading-6 text-neutral-600 md:text-base">
              From architectural design to construction and engineering,
              we bring together creative thinking and technical precision
              to create spaces with purpose.
            </p>
          </div>
        </div>

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