import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, SectionHeading, Button } from "./primitives";
import { GIFT_SETS } from "./data";

export function GiftSets() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div>
          <Eyebrow>Gift Concierge</Eyebrow>
          <SectionHeading className="mt-4">
            Luxury Gifts, Beautifully Chosen
          </SectionHeading>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-brand-muted">
            From intimate presents to high-profile gifting — elegant packaging,
            premium presentation, and unforgettable scents for every occasion.
          </p>
        </div>
        <Button variant="solid">Shop Gift Sets</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {GIFT_SETS.map((g) => (
          <a
            key={g.title}
            href="#"
            className="group relative block aspect-[4/5] overflow-hidden bg-brand-gray-warm"
          >
            <ImageWithFallback
              src={g.image}
              alt={`${g.title} gift set`}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-brand-ivory">
              <h3
                className="font-display text-[24px] leading-none"
                style={{ fontWeight: 400 }}
              >
                {g.title}
              </h3>
              <p className="mt-2 text-[13px] text-brand-ivory/80">{g.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em]">
                Shop
                <ArrowRight
                  className="h-3.5 w-3.5 text-brand-red transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
