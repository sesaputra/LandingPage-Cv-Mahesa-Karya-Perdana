const items = [
  "Architecture",
  "Construction",
  "Civil Engineering",
  "Bali",
];

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center">
          <span className="px-6 text-xs font-medium uppercase tracking-[0.2em] text-background md:text-sm">
            {item}
          </span>

          {index < items.length - 1 ? (
            <span className="text-sm text-background/40">—</span>
          ) : (
            <span className="px-6 text-sm text-background/40">✦</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Our services"
      className="overflow-hidden border-b border-black bg-foreground py-4"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  );
}