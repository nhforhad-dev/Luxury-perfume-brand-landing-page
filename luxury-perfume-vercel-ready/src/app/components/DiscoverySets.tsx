import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, SectionHeading, Button } from "./primitives";
import { DISCOVERY_SETS } from "./data";
import { useStore } from "./store";

export function DiscoverySets() {
  const { addToCart } = useStore();

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Eyebrow>Try Before You Commit</Eyebrow>
          <SectionHeading className="mt-4">Discovery Sets</SectionHeading>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-brand-muted">
          Explore our fragrance world through curated discovery sets — perfect
          before selecting your full-size bottle.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {DISCOVERY_SETS.map((set) => (
          <div key={set.name} className="group flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-brand-gray-warm">
              <ImageWithFallback
                src={set.image}
                alt={set.name}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
            <h3
              className="mt-4 font-display text-[19px] text-brand-charcoal"
              style={{ fontWeight: 500 }}
            >
              {set.name}
            </h3>
            <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-brand-muted">
              {set.desc}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[14px] text-brand-charcoal">
                <span className="text-brand-red">${set.price}</span>
              </span>
              <button
                onClick={() =>
                  addToCart(
                    {
                      id: set.name,
                      name: set.name,
                      category: "Unisex",
                      tagline: "",
                      notes: [],
                      price: set.price,
                      rating: 5,
                      reviews: 0,
                      image: set.image,
                      family: "Set",
                    },
                    1,
                  )
                }
                className="text-[11px] uppercase tracking-[0.16em] text-brand-charcoal underline-offset-4 transition-colors hover:text-brand-red hover:underline"
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button variant="outline">Explore All Discovery Sets</Button>
      </div>
    </section>
  );
}
