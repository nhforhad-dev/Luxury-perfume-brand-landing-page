import { Users, Repeat, Sparkles, Droplet } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, Button } from "./primitives";
import heroBg from "../../imports/image-2.png";

const METRICS = [
  { icon: Users, value: "25K+", label: "Global Customers" },
  { icon: Repeat, value: "98%", label: "Repeat Purchase Rate" },
  { icon: Sparkles, value: "40+", label: "Signature Fragrances" },
  { icon: Droplet, value: "Premium Oils", label: "& Long-Lasting Wear" },
];

export function Hero({ onFindScent }: { onFindScent: () => void }) {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-brand-charcoal lg:h-screen lg:min-h-[680px]">
      {/* Background image */}
      <ImageWithFallback
        src={heroBg}
        alt="Elegant model in a red satin dress holding a ROVÉNAIRE perfume in a moody editorial setting"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Cinematic overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-brand-charcoal/35" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-4 md:px-8">
        <div className="flex flex-1 flex-col justify-center pb-44 pt-36 lg:pb-40">
          <Eyebrow className="text-brand-ivory/70">
            Luxury Fragrance House · Est. 1998
          </Eyebrow>
          <h1
            className="mt-7 max-w-2xl font-display text-[46px] leading-[0.98] tracking-[-0.015em] text-brand-ivory sm:text-[62px] lg:text-[78px]"
            style={{ fontWeight: 400 }}
          >
            Crafted for Presence.
            <br />
            <span className="italic text-brand-red">Worn as Power.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-brand-ivory/75">
            Premium fragrances for women, men, and unisex expression. Designed
            for those who live with confidence and leave an unforgettable
            impression.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="red" onClick={onFindScent}>
              Shop Signature Scents
            </Button>
            <Button variant="outlineLight">Explore Collections</Button>
          </div>
        </div>
      </div>

      {/* Full-width trust metrics bar */}
      <div className="absolute inset-x-0 bottom-0 border-t border-brand-ivory/15 bg-brand-charcoal/40 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-brand-ivory/12 px-4 md:grid-cols-4 md:divide-x md:px-8">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3.5 px-2 py-5 md:px-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/10">
                <m.icon className="h-4 w-4 text-brand-red" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <div
                  className="font-display text-[20px] leading-none text-brand-ivory md:text-[22px]"
                  style={{ fontWeight: 500 }}
                >
                  {m.value}
                </div>
                <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-brand-ivory/55">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
