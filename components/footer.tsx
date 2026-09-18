import Link from "next/link";

const navigation = [
  { name: "About", href: "#about-section" },
  { name: "Services", href: "#services-section" },
  { name: "Projects", href: "#projects-section" },
  { name: "Contact", href: "#contact-section" },
];

const social = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20">

        {/* Brand + Social */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div>
            <Link href="/" className="group inline-block">
              <p className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                MAHESA
              </p>

              <p className="mt-1 text-[10px] tracking-[0.28em] text-neutral-400">
                KARYA PERDANA
              </p>
            </Link>

            <p className="mt-4 text-sm text-neutral-400">
              Architecture · Construction · Engineering
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/20" />

        {/* Footer Content */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              Navigation
            </p>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-neutral-300">

              <a
                href="tel:+62XXXXXXXXXX"
                className="block transition-colors duration-300 hover:text-white"
              >
                +62 xxx-xxxx-xxxx
              </a>

              <a
                href="mailto:hello@mahesakarya.com"
                className="block transition-colors duration-300 hover:text-white"
              >
                hello@mahesakarya.com
              </a>

              <p>Bali, Indonesia</p>

            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-6">

            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  Our Studio
                </p>

                <p className="mt-2 text-sm text-neutral-300">
                  Bali, Indonesia
                </p>
              </div>

              <span className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                Location
              </span>
            </div>

            <div className="mt-5 overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.386838161862!2d115.03956572197221!3d-8.558749769462576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd231cf389124db%3A0x320f366a9f5ca56d!2sUD.%20Ema%20Kencana%20Abadi!5e0!3m2!1sid!2sid!4v1789737550994!5m2!1sid!2sid"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahesa Karya Perdana location"
                className="grayscale-[20%]"
              />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black bg-white text-black">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 text-xs md:flex-row md:items-center md:justify-between md:px-12">

          <p className="text-neutral-600">
            © 2026 Mahesa Karya Perdana. All rights reserved.
          </p>

          <p className="text-neutral-500">
            Architecture · Construction · Engineering
          </p>

        </div>

      </div>

    </footer>
  );
}