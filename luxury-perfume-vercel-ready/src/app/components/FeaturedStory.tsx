import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, Button } from "./primitives";
import { IMAGES } from "./data";

const PYRAMID = [
  { stage: "Top", notes: "Red Pear, Saffron" },
  { stage: "Heart", notes: "Turkish Rose, Jasmine" },
  { stage: "Base", notes: "Amber, Musk, Sandalwood" },
];

export function FeaturedStory() {
  return (
    <section className="bg-brand-charcoal text-brand-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[420px] overflow-hidden bg-brand-burgundy lg:min-h-[640px]">
          <ImageWithFallback
            src={IMAGES.storyBottle}
            alt="Velours Rouge — the ROVÉNAIRE house signature in red glass"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-brand-charcoal/30" />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-4 py-16 md:px-12 lg:py-24">
          <Eyebrow className="text-brand-ivory/60">The House Signature</Eyebrow>
          <h2
            className="mt-6 font-display text-[42px] leading-[1] tracking-[-0.01em] md:text-[56px]"
            style={{ fontWeight: 400 }}
          >
            Velours <span className="italic text-brand-red">Rouge</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-brand-ivory/75">
            A sensual, elegant composition created for evenings of confidence
            and attention. It opens with red pear and saffron, melts into
            Turkish rose and jasmine, and settles into warm amber, musk, and
            creamy woods.
          </p>

          <div className="mt-9 space-y-4 border-t border-brand-ivory/15 pt-7">
            {PYRAMID.map((p) => (
              <div key={p.stage} className="flex items-baseline gap-5">
                <span className="w-16 shrink-0 text-[11px] uppercase tracking-[0.2em] text-brand-red">
                  {p.stage}
                </span>
                <span className="text-[15px] text-brand-ivory/90">{p.notes}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="light">Shop Now — $185</Button>
            <Button
              variant="ghost"
              className="text-brand-ivory hover:text-brand-red"
            >
              Discover Velours Rouge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
