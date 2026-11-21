import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eyebrow, SectionHeading, Button } from "./primitives";
import { PRODUCTS, type Product } from "./data";
import { cn } from "./ui/utils";

const STEPS = [
  {
    key: "who",
    q: "Who are we finding a scent for?",
    options: ["Women", "Men", "Unisex"],
  },
  {
    key: "mood",
    q: "What mood do you want to leave behind?",
    options: ["Sensual & Floral", "Bold & Woody", "Fresh & Clean", "Warm & Amber"],
  },
  {
    key: "occasion",
    q: "When will you wear it most?",
    options: ["Everyday", "Date Night", "Office", "Statement Evenings"],
  },
];

const MOOD_TO_FAMILY: Record<string, string> = {
  "Sensual & Floral": "Floral",
  "Bold & Woody": "Woody",
  "Fresh & Clean": "Fresh",
  "Warm & Amber": "Amber",
};

function recommend(answers: Record<string, string>): Product {
  const family = MOOD_TO_FAMILY[answers.mood];
  const byCat = PRODUCTS.filter((p) => p.category === answers.who);
  const match =
    byCat.find((p) => p.family === family) ||
    PRODUCTS.find((p) => p.family === family) ||
    byCat[0] ||
    PRODUCTS[0];
  return match;
}

export function ScentFinder({
  onQuickView,
}: {
  onQuickView: (p: Product) => void;
}) {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const result = Object.keys(answers).length === STEPS.length ? recommend(answers) : null;

  const choose = (val: string) => {
    const key = STEPS[step].key;
    setAnswers((a) => ({ ...a, [key]: val }));
    if (step < STEPS.length - 1) setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setStarted(true);
  };

  const progress = result ? 100 : (step / STEPS.length) * 100;

  return (
    <section
      id="scent-finder"
      className="border-y border-brand-charcoal/10 bg-brand-gray-warm/60 scroll-mt-24"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
        {/* Left intro */}
        <div>
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5 text-brand-red" strokeWidth={1.5} />
            Smart Scent Finder
          </Eyebrow>
          <SectionHeading className="mt-4">
            Find Your <span className="italic text-brand-red">Signature</span> Scent
          </SectionHeading>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-muted">
            Answer a few quick questions about your mood, style, and occasion.
            Our scent finder helps you discover perfumes that feel personal,
            refined, and unforgettable.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Based on mood and occasion",
              "Women, Men & Unisex options",
              "Filters by floral, woody, fresh & amber",
              "Luxury gift recommendations",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-[14px] text-brand-charcoal"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right quiz card */}
        <div className="min-h-[420px] bg-background p-7 shadow-[0_30px_80px_-40px_rgba(17,17,17,0.3)] md:p-10">
          {!started ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
                <Sparkles className="h-7 w-7 text-brand-red" strokeWidth={1.3} />
              </div>
              <h3
                className="mt-6 font-display text-[26px] text-brand-charcoal"
                style={{ fontWeight: 400 }}
              >
                The Scent Quiz
              </h3>
              <p className="mt-2 max-w-xs text-[14px] text-brand-muted">
                Three questions. One signature. Takes under a minute.
              </p>
              <Button className="mt-7" onClick={() => setStarted(true)}>
                Start the Scent Quiz
              </Button>
            </div>
          ) : result ? (
            <div className="flex flex-col">
              <Eyebrow withMark={false}>Your Match</Eyebrow>
              <div className="mt-5 flex gap-5">
                <div className="aspect-[3/4] w-28 shrink-0 overflow-hidden bg-brand-gray-warm">
                  <ImageWithFallback
                    src={result.image}
                    alt={result.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                    {result.category} · {result.family}
                  </span>
                  <h3
                    className="mt-1 font-display text-[28px] leading-none text-brand-charcoal"
                    style={{ fontWeight: 500 }}
                  >
                    {result.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">
                    {result.notes.join(" · ")}
                  </p>
                  <p className="mt-auto pt-3 text-[15px] text-brand-charcoal">
                    From <span className="text-brand-red">${result.price}</span>
                  </p>
                </div>
              </div>
              <div className="mt-7 flex gap-2">
                <Button className="flex-1" onClick={() => onQuickView(result)}>
                  View {result.name}
                </Button>
                <button
                  onClick={reset}
                  className="flex w-12 items-center justify-center border border-brand-charcoal/20 text-brand-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
                  aria-label="Retake quiz"
                >
                  <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col">
              {/* Progress */}
              <div className="mb-7 flex items-center gap-3">
                <div className="h-0.5 flex-1 bg-brand-charcoal/10">
                  <div
                    className="h-full bg-brand-red transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-[11px] tracking-[0.16em] text-brand-muted">
                  {step + 1}/{STEPS.length}
                </span>
              </div>
              <h3
                className="font-display text-[24px] leading-snug text-brand-charcoal"
                style={{ fontWeight: 400 }}
              >
                {STEPS[step].q}
              </h3>
              <div className="mt-6 flex flex-col gap-2.5">
                {STEPS[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    className={cn(
                      "group flex items-center justify-between border border-brand-charcoal/15 px-5 py-4 text-left text-[14px] text-brand-charcoal transition-all hover:border-brand-red hover:bg-brand-red/5",
                    )}
                  >
                    {opt}
                    <ArrowRight
                      className="h-4 w-4 -translate-x-1 text-brand-red opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-5 self-start text-[12px] uppercase tracking-[0.16em] text-brand-muted hover:text-brand-charcoal"
                >
                  ← Back
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
