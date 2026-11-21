import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { Wordmark, Button } from "./primitives";
import { useStore } from "./store";
import { cn } from "./ui/utils";

const ANNOUNCEMENTS = [
  "Complimentary luxury sample with orders above $150",
  "Free worldwide shipping on premium orders",
  "Exclusive signature scents for women, men & unisex lovers",
];

const NAV = [
  "Women",
  "Men",
  "Unisex",
  "Collections",
  "Best Sellers",
  "Gift Sets",
];

export function Header({ onFindScent }: { onFindScent: () => void }) {
  const { cartCount, wishlist } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [annIndex, setAnnIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setAnnIndex((i) => (i + 1) % ANNOUNCEMENTS.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  // Over the dark hero (top of page) the bar is transparent with light type.
  const onDark = !scrolled && !searchOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-brand-burgundy text-brand-ivory">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center px-4 text-center">
          <p
            key={annIndex}
            className="text-[11px] tracking-[0.22em] uppercase animate-[fadeIn_0.6s_ease]"
          >
            {ANNOUNCEMENTS[annIndex]}
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          onDark
            ? "border-brand-ivory/15 bg-transparent"
            : "border-brand-charcoal/10 bg-background/90 backdrop-blur-md shadow-[0_1px_20px_rgba(17,17,17,0.05)]",
        )}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 md:px-8">
          {/* Left: nav (desktop) / menu (mobile) */}
          <div className="flex items-center">
            <button
              className={cn(
                "lg:hidden transition-colors",
                onDark ? "text-brand-ivory" : "text-brand-charcoal",
              )}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <nav className="hidden lg:flex items-center gap-6">
              {NAV.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={cn(
                    "group relative text-[11px] uppercase tracking-[0.16em] transition-colors",
                    onDark
                      ? "text-brand-ivory/80 hover:text-brand-ivory"
                      : "text-brand-charcoal/80 hover:text-brand-charcoal",
                  )}
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <a
            href="#top"
            className="flex shrink-0 flex-col items-center leading-none"
          >
            <Wordmark
              className="text-[20px] md:text-[24px]"
              invert={onDark}
            />
            <span
              className={cn(
                "mt-1 text-[8px] uppercase tracking-[0.42em] transition-colors md:text-[9px]",
                onDark ? "text-brand-ivory/55" : "text-brand-muted",
              )}
            >
              Luxury Fragrance House
            </span>
          </a>

          {/* Right: utilities */}
          <div className="flex items-center justify-end gap-3.5 md:gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
              className={cn(
                "transition-colors hover:text-brand-red",
                onDark ? "text-brand-ivory/85" : "text-brand-charcoal/80",
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Account"
              className={cn(
                "hidden transition-colors hover:text-brand-red sm:block",
                onDark ? "text-brand-ivory/85" : "text-brand-charcoal/80",
              )}
            >
              <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Wishlist"
              className={cn(
                "relative transition-colors hover:text-brand-red",
                onDark ? "text-brand-ivory/85" : "text-brand-charcoal/80",
              )}
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {wishlist.size > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-medium text-white">
                  {wishlist.size}
                </span>
              )}
            </button>
            <button
              aria-label="Cart"
              className={cn(
                "relative transition-colors hover:text-brand-red",
                onDark ? "text-brand-ivory/85" : "text-brand-charcoal/80",
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <Button
              size="sm"
              variant="red"
              className="hidden md:inline-flex"
              onClick={onFindScent}
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              Find Your Scent
            </Button>
          </div>
        </div>

        {/* Expanding search field */}
        <div
          className={cn(
            "overflow-hidden border-brand-charcoal/10 bg-background transition-all duration-300",
            searchOpen ? "max-h-24 border-t" : "max-h-0",
          )}
        >
          <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-4 md:px-8">
            <Search className="h-4 w-4 text-brand-muted" strokeWidth={1.5} />
            <input
              autoFocus={searchOpen}
              placeholder="Search fragrances, notes, collections…"
              className="w-full bg-transparent text-sm text-brand-charcoal outline-none placeholder:text-brand-muted"
            />
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="text-brand-muted hover:text-brand-charcoal"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-brand-charcoal/40 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-sm bg-background p-6 transition-transform duration-300",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Wordmark className="text-[18px]" />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-brand-charcoal"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col">
            {["Home", ...NAV, "Journal", "About"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="border-b border-brand-charcoal/10 py-3.5 font-display text-[22px] text-brand-charcoal"
                style={{ fontWeight: 400 }}
              >
                {item}
              </a>
            ))}
          </nav>
          <Button
            variant="red"
            className="mt-8 w-full"
            onClick={() => {
              setMenuOpen(false);
              onFindScent();
            }}
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
            Find Your Scent
          </Button>
        </div>
      </div>
    </header>
  );
}
