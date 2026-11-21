import { Eyebrow } from "./primitives";

export function BrandIntro() {
  return (
    <section className="border-y border-brand-charcoal/10 bg-background">
      <div className="mx-auto max-w-[1100px] px-4 py-20 text-center md:px-8 lg:py-28">
        <Eyebrow className="justify-center" withMark={false}>
          The House of ROVÉNAIRE
        </Eyebrow>
        <h2
          className="mx-auto mt-6 max-w-3xl font-display text-[30px] leading-[1.25] tracking-[-0.01em] text-brand-charcoal md:text-[40px]"
          style={{ fontWeight: 400 }}
        >
          Fragrance as Identity. Perfume is more than scent — it is a statement
          of <span className="italic text-brand-red">mood, taste, and presence.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-brand-muted">
          Our collections are curated for modern women and men who appreciate
          rarity, elegance, and unforgettable character — each composition built
          to be remembered long after the room is empty.
        </p>
      </div>
    </section>
  );
}
