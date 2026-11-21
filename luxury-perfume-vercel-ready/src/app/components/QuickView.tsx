import { useEffect, useState } from "react";
import { X, Heart, Minus, Plus, Star, Truck, ShieldCheck, Gift } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./primitives";
import { useStore } from "./store";
import { cn } from "./ui/utils";
import type { Product } from "./data";

const SIZES = [
  { label: "30ml", mult: 1 },
  { label: "50ml", mult: 1.5 },
  { label: "100ml", mult: 2.1 },
];

export function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [qty, setQty] = useState(1);
  const [sizeIdx, setSizeIdx] = useState(1);

  useEffect(() => {
    if (product) {
      setQty(1);
      setSizeIdx(1);
    }
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (product) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const price = Math.round(product.price * SIZES[sizeIdx].mult);
  const wished = isWishlisted(product.id);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-sm animate-[fadeIn_0.25s_ease]"
        onClick={onClose}
      />
      <div className="relative z-10 grid max-h-[88vh] w-full max-w-4xl grid-cols-1 overflow-hidden bg-background shadow-2xl animate-[fadeIn_0.3s_ease] md:grid-cols-2">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-ivory/90 text-brand-charcoal backdrop-blur-sm transition-colors hover:text-brand-red"
        >
          <X className="h-4 w-4" strokeWidth={1.5} />
        </button>

        <div className="relative aspect-square bg-brand-gray-warm md:aspect-auto">
          <ImageWithFallback
            src={product.image}
            alt={`${product.name} bottle`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col overflow-y-auto p-7 md:p-9">
          <span className="text-[11px] uppercase tracking-[0.24em] text-brand-muted">
            {product.category} · {product.family}
          </span>
          <h2
            className="mt-2 font-display text-[34px] leading-none text-brand-charcoal"
            style={{ fontWeight: 500 }}
          >
            {product.name}
          </h2>
          <div className="mt-3 flex items-center gap-2 text-[13px] text-brand-muted">
            <span className="flex items-center gap-1 text-brand-charcoal">
              <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" strokeWidth={1.5} />
              {product.rating}
            </span>
            · {product.reviews.toLocaleString()} reviews
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-brand-muted">
            An {product.family.toLowerCase()} composition built around{" "}
            {product.notes.slice(0, 2).join(" and ").toLowerCase()}, settling
            into a warm, long-lasting trail crafted to be remembered.
          </p>

          <div className="mt-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              Scent Notes
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <span
                  key={n}
                  className="border border-brand-charcoal/15 px-3 py-1 text-[12px] text-brand-charcoal"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              Size
            </span>
            <div className="mt-2.5 flex gap-2">
              {SIZES.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSizeIdx(i)}
                  className={cn(
                    "border px-4 py-2 text-[13px] transition-colors",
                    i === sizeIdx
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-brand-charcoal/20 text-brand-charcoal hover:border-brand-red",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price + qty */}
          <div className="mt-7 flex items-center justify-between">
            <div
              className="font-display text-[30px] leading-none text-brand-charcoal"
              style={{ fontWeight: 500 }}
            >
              ${price}
            </div>
            <div className="flex items-center border border-brand-charcoal/20">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-3 py-2.5 text-brand-charcoal hover:text-brand-red"
              >
                <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <span className="w-8 text-center text-[14px]">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-3 py-2.5 text-brand-charcoal hover:text-brand-red"
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <Button
              className="flex-1"
              onClick={() => {
                addToCart({ ...product, price }, qty);
                onClose();
              }}
            >
              Add to Bag
            </Button>
            <button
              onClick={() => toggleWishlist(product)}
              aria-label="Add to wishlist"
              className="flex w-12 items-center justify-center border border-brand-charcoal/20 text-brand-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <Heart
                className={cn("h-4 w-4", wished && "fill-brand-red text-brand-red")}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Trust badges near CTA */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-brand-charcoal/10 pt-5">
            {[
              { icon: Truck, label: "Free Shipping" },
              { icon: ShieldCheck, label: "100% Authentic" },
              { icon: Gift, label: "Gift Wrapped" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <b.icon className="h-4 w-4 text-brand-red" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.1em] text-brand-muted">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
