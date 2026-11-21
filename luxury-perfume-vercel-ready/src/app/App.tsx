import { useState, useCallback } from "react";
import { Toaster } from "./components/ui/sonner";
import { StoreProvider } from "./components/store";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandIntro } from "./components/BrandIntro";
import { ShopByIdentity } from "./components/ShopByIdentity";
import { ScentFinder } from "./components/ScentFinder";
import { BestSellers } from "./components/BestSellers";
import { FeaturedStory } from "./components/FeaturedStory";
import { ShopByMood } from "./components/ShopByMood";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { DiscoverySets } from "./components/DiscoverySets";
import { Testimonials } from "./components/Testimonials";
import { GiftSets } from "./components/GiftSets";
import { Journal } from "./components/Journal";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { QuickView } from "./components/QuickView";
import type { Product } from "./components/data";

export default function App() {
  const [quickView, setQuickView] = useState<Product | null>(null);

  const openQuickView = useCallback((p: Product) => setQuickView(p), []);
  const closeQuickView = useCallback(() => setQuickView(null), []);

  const scrollToScentFinder = useCallback(() => {
    document
      .getElementById("scent-finder")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header onFindScent={scrollToScentFinder} />
        <main>
          <Hero onFindScent={scrollToScentFinder} />
          <BrandIntro />
          <ShopByIdentity />
          <ScentFinder onQuickView={openQuickView} />
          <BestSellers onQuickView={openQuickView} />
          <FeaturedStory />
          <ShopByMood />
          <WhyChooseUs />
          <DiscoverySets />
          <Testimonials />
          <GiftSets />
          <Journal />
          <Newsletter />
        </main>
        <Footer />
      </div>

      <QuickView product={quickView} onClose={closeQuickView} />
      <Toaster position="bottom-right" />
    </StoreProvider>
  );
}
