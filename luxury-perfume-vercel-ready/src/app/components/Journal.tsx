import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, SectionHeading, Button } from "./primitives";
import { JOURNAL } from "./data";

export function Journal() {
  return (
    <section className="border-t border-brand-charcoal/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Editorial</Eyebrow>
            <SectionHeading className="mt-4">The Journal</SectionHeading>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex">
            Read All Articles
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {JOURNAL.map((a) => (
            <a key={a.title} href="#" className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-warm">
                <ImageWithFallback
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-brand-ivory/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand-charcoal backdrop-blur-sm">
                  {a.category}
                </span>
              </div>
              <span className="mt-4 text-[12px] uppercase tracking-[0.16em] text-brand-muted">
                {a.read}
              </span>
              <h3
                className="mt-2 font-display text-[23px] leading-snug text-brand-charcoal transition-colors group-hover:text-brand-red"
                style={{ fontWeight: 400 }}
              >
                {a.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline">Read All Articles</Button>
        </div>
      </div>
    </section>
  );
}
