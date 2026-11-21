import { useState } from "react";
import { Eyebrow, SectionHeading, Button } from "./primitives";
import { ProductCard } from "./ProductCard";
import { PRODUCTS, type Product, type Category } from "./data";
import { cn } from "./ui/utils";

const FILTERS: ("All" | Category)[] = ["All", "Women", "Men", "Unisex"];

export function BestSellers({
  onQuickView,
}: {
  onQuickView: (p: Product) => void;
}) {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const list = PRODUCTS.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section className="border-t border-brand-charcoal/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 lg:py-28">
        <div className="mb-10 flex flex-col items-center text-center">
          <Eyebrow withMark={false}>Most Desired</Eyebrow>
          <SectionHeading className="mt-4">Best Sellers</SectionHeading>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-brand-muted">
            The most desired fragrances in our collection — loved for their
            character, longevity, and unforgettable trail.
          </p>

          {/* Category filter */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1 border border-brand-charcoal/15 p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors",
                  filter === f
                    ? "bg-brand-charcoal text-brand-ivory"
                    : "text-brand-charcoal/70 hover:text-brand-red",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button variant="outline">View All Fragrances</Button>
        </div>
      </div>
    </section>
  );
}
