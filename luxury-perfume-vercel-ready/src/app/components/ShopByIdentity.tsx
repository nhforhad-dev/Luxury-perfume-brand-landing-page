import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, SectionHeading } from "./primitives";
import { IDENTITIES } from "./data";

export function ShopByIdentity() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Eyebrow>Shop by Identity</Eyebrow>
          <SectionHeading className="mt-4">Explore by Expression</SectionHeading>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-brand-muted">
          Three distinct worlds of scent — each crafted to reflect who you are
          and the impression you leave behind.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {IDENTITIES.map((it) => (
          <a
            key={it.category}
            href="#"
            className="group relative block aspect-[3/4] overflow-hidden bg-brand-gray-warm"
          >
            <ImageWithFallback
              src={it.image}
              alt={`${it.title} — ROVÉNAIRE ${it.category} fragrances`}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/75 via-brand-charcoal/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-brand-ivory">
              <span className="text-[11px] uppercase tracking-[0.28em] text-brand-ivory/70">
                {it.category}
              </span>
              <h3
                className="mt-1.5 font-display text-[30px] leading-none"
                style={{ fontWeight: 400 }}
              >
                {it.title}
              </h3>
              <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-brand-ivory/80">
                {it.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-brand-ivory">
                Shop {it.category}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-brand-red" strokeWidth={1.5} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
