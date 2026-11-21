import { Heart, Eye, Plus, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useStore } from "./store";
import { cn } from "./ui/utils";
import type { Product } from "./data";

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: (p: Product) => void;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray-warm">
        <ImageWithFallback
          src={product.image}
          alt={`${product.name} — ${product.category} eau de parfum`}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.bestseller && (
            <span className="bg-brand-charcoal px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-brand-ivory">
              Best Seller
            </span>
          )}
          <span className="bg-brand-ivory/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-brand-charcoal backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={() => toggleWishlist(product)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-ivory/95 text-brand-charcoal backdrop-blur-sm transition-colors hover:text-brand-red"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-brand-red text-brand-red")}
            strokeWidth={1.5}
          />
        </button>

        {/* Hover reveal actions */}
        <div className="absolute inset-x-3 bottom-3 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex flex-1 items-center justify-center gap-2 bg-brand-ivory/95 py-2.5 text-[11px] uppercase tracking-[0.16em] text-brand-charcoal backdrop-blur-sm transition-colors hover:bg-white"
          >
            <Eye className="h-3.5 w-3.5" strokeWidth={1.5} />
            Quick View
          </button>
          <button
            onClick={() => addToCart(product)}
            aria-label="Add to bag"
            className="flex items-center justify-center bg-brand-charcoal px-3.5 text-brand-ivory transition-colors hover:bg-brand-red"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3
            className="font-display text-[19px] leading-tight text-brand-charcoal"
            style={{ fontWeight: 500 }}
          >
            {product.name}
          </h3>
          <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-brand-muted">
            {product.tagline}
          </p>
        </div>
        <div className="flex items-center gap-1 pt-1 text-[12px] text-brand-charcoal">
          <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" strokeWidth={1.5} />
          {product.rating}
        </div>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">
        {product.notes.join(" · ")}
      </p>
      <p className="mt-3 text-[14px] text-brand-charcoal">
        From <span className="text-brand-red">${product.price}</span>
      </p>
    </div>
  );
}
