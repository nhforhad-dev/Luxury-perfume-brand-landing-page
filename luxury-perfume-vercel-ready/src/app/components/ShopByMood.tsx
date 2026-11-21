import { ArrowUpRight } from "lucide-react";
import { Eyebrow, SectionHeading } from "./primitives";
import { MOODS } from "./data";

export function ShopByMood() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
      <div className="mb-12 max-w-2xl">
        <Eyebrow>Shop by Mood</Eyebrow>
        <SectionHeading className="mt-4">
          Choose the Mood You Want to Leave Behind
        </SectionHeading>
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-brand-charcoal/10 bg-brand-charcoal/10 md:grid-cols-4">
        {MOODS.map((mood) => (
          <a
            key={mood}
            href="#"
            className="group flex aspect-[4/3] flex-col justify-between bg-background p-6 transition-colors hover:bg-brand-red/5"
          >
            <ArrowUpRight
              className="h-5 w-5 self-end text-brand-charcoal/30 transition-colors group-hover:text-brand-red"
              strokeWidth={1.5}
            />
            <h3
              className="font-display text-[22px] leading-tight text-brand-charcoal"
              style={{ fontWeight: 400 }}
            >
              {mood}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
