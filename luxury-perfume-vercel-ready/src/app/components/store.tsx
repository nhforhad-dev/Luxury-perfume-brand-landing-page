import { createContext, useContext, useState, useCallback } from "react";
import { toast } from "sonner";
import type { Product } from "./data";

interface StoreValue {
  cartCount: number;
  wishlist: Set<string>;
  addToCart: (p: Product, qty?: number) => void;
  toggleWishlist: (p: Product) => void;
  isWishlisted: (id: string) => boolean;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const addToCart = useCallback((p: Product, qty = 1) => {
    setCartCount((c) => c + qty);
    toast.success(`${p.name} added to your bag`, {
      description: `${qty} × Eau de Parfum · $${p.price}`,
    });
  }, []);

  const toggleWishlist = useCallback((p: Product) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(p.id)) {
        next.delete(p.id);
        toast(`${p.name} removed from wishlist`);
      } else {
        next.add(p.id);
        toast.success(`${p.name} saved to wishlist`);
      }
      return next;
    });
  }, []);

  const isWishlisted = useCallback(
    (id: string) => wishlist.has(id),
    [wishlist],
  );

  return (
    <StoreContext.Provider
      value={{ cartCount, wishlist, addToCart, toggleWishlist, isWishlisted }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
