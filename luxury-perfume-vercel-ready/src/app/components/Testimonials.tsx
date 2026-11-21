import { Star, Quote } from "lucide-react";
import { Eyebrow } from "./primitives";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  return (
    <section className="bg-brand-burgundy text-brand-ivory">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <div className="mb-14 flex flex-col items-center text-center">
          <Eyebrow withMark={false} className="text-brand-ivory/60">
            What Our Clients Say
          </Eyebrow>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-brand-gold text-brand-gold"
                  strokeWidth={1}
                />
              ))}
            </div>
            <span
              className="font-display text-[22px]"
              style={{ fontWeight: 500 }}
            >
              4.9/5
            </span>
          </div>
          <p className="mt-2 text-[13px] uppercase tracking-[0.2em] text-brand-ivory/60">
            From 18,000+ premium buyers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border border-brand-ivory/15 p-8"
            >
              <Quote className="h-7 w-7 text-brand-red" strokeWidth={1} />
              <blockquote className="mt-5 flex-1 font-display text-[20px] italic leading-[1.45] text-brand-ivory">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-brand-ivory/15 pt-5">
                <div className="text-[14px] text-brand-ivory">{t.name}</div>
                <div className="mt-0.5 text-[12px] uppercase tracking-[0.14em] text-brand-ivory/50">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
