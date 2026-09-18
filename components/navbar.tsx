import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about-section" },
  { name: "Services", href: "#services-section" },
  { name: "Projects", href: "#projects-section" },
  { name: "Contact", href: "#contact-section" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-12">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-[-0.02em]">
              MAHESA
            </span>
            <span className="mt-1 text-[10px] tracking-[0.28em] text-muted">
              KARYA PERDANA
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-foreground/80 transition-colors duration-300 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
