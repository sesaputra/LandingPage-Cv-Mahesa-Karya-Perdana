const reasons = [
  {
    index: "01",
    title: "Thoughtful Design",
    description:
      "Every project begins with an understanding of context, function, material, and the people who will experience the space.",
  },
  {
    index: "02",
    title: "Precise Execution",
    description:
      "We pay close attention to detail throughout the process, from initial planning and coordination to construction and finishing.",
  },
  {
    index: "03",
    title: "Collaborative Process",
    description:
      "We work closely with clients, consultants, and project teams to create a clear and purposeful process from beginning to completion.",
  },
  {
    index: "04",
    title: "Lasting Value",
    description:
      "We aim to create spaces that are functional, considered, and designed to remain valuable beyond the moment of completion.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="border-b border-black px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>Why Work With Us</span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-neutral-400 md:block">
            04 / 04
          </span>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-black" />

        {/* Introduction */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="max-w-xl font-serif text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Built <span className="text-neutral-400">on</span>
              <br />
              thoughtful <span className="italic">work.</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="max-w-md text-sm leading-6 text-neutral-600 md:text-base">
              We believe meaningful spaces are created through a balance
              of thoughtful design, technical precision, and close
              collaboration throughout every stage of the project.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16 border-t border-black md:mt-24">
          {reasons.map((reason) => (
            <div
              key={reason.index}
              className="group grid grid-cols-1 border-b border-black py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                  {reason.index}
                </span>
              </div>

              {/* Title */}
              <div className="mt-4 md:col-span-4 md:mt-0">
                <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-4 md:col-span-5 md:col-start-8 md:mt-0">
                <p className="max-w-lg text-sm leading-6 text-neutral-600 md:text-base">
                  {reason.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-6 md:col-span-1 md:col-start-12 md:mt-0 md:flex md:justify-end">
                <span
                  aria-hidden="true"
                  className="inline-block text-lg text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}