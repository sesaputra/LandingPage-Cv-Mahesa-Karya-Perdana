import Image from "next/image";
import Link from "next/link";

interface Project {
  index: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "Residential Project",
    category: "Residential",
    location: "Bali",
    year: "2025",
    image: "/images/projects.jpg",
  },
  {
    index: "02",
    title: "Commercial Space",
    category: "Commercial",
    location: "Bali",
    year: "2024",
    image: "/images/projects-1.jpg",
  },
  {
    index: "03",
    title: "Private Residence",
    category: "Residential",
    location: "Bali",
    year: "2024",
    image: "/images/projects-2.jpg",
  },
];

export default function Projects() {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section className="border-b border-black px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="flex items-center justify-between" id="projects-section">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>Selected Projects</span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-neutral-400 md:block">
            03 / 04
          </span>
        </div>

        <div className="mt-4 border-t border-black" />

        {/* Section Intro */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Selected <span className="text-neutral-400">Projects</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="max-w-md text-sm leading-6 text-neutral-600 md:text-base">
              A selection of our architecture, construction, and
              engineering work shaped by context, function, and
              thoughtful design.
            </p>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-12 md:mt-20">
          <Link href="/projects" className="group block">

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                  {featuredProject.index}
                </p>

                <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                  {featuredProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.1em] text-neutral-500">
                <span>{featuredProject.category}</span>
                <span>—</span>
                <span>{featuredProject.location}</span>
                <span>—</span>
                <span>{featuredProject.year}</span>
              </div>
            </div>

          </Link>
        </div>

        {/* Secondary Projects */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-8">

          {secondaryProjects.map((project, index) => (
            <Link
              key={project.index}
              href="/projects"
              className={`group block ${
                index === 0
                  ? "md:col-span-5"
                  : "md:col-span-5 md:col-start-8"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
                  {project.index}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.1em] text-neutral-500">
                      {project.category} — {project.location} — {project.year}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* View All */}
        <div className="mt-12 flex justify-end md:mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-black hover:text-white"
          >
            <span>View All Projects</span>
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