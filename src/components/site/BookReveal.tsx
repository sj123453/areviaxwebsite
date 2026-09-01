import { useInView } from "./Reveal";

export type BookProduct = {
  index: string;
  name: string;
  tagline: string;
  kicker: string;
  headline: string;
  blurb: string;
  points: string[];
  price: string;
  tone: "ember" | "laurel" | "aegean";
};

const toneVar: Record<BookProduct["tone"], string> = {
  ember: "var(--color-primary)",
  laurel: "var(--color-laurel)",
  aegean: "var(--color-aegean)",
};

const marbleBg =
  "linear-gradient(180deg, oklch(0.97 0.008 88), oklch(0.92 0.012 86)), repeating-linear-gradient(115deg, transparent 0 22px, oklch(0.78 0.01 70 / 22%) 22px 23px, transparent 23px 46px)";

export function BookReveal({ product }: { product: BookProduct }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4, false);
  const tone = toneVar[product.tone];

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px] select-none px-1"
      style={{ ["--tone" as string]: tone }}
    >
      {/* temple plinth + halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, color-mix(in oklab, var(--tone) 30%, transparent), transparent 72%)",
          opacity: inView ? 1 : 0.25,
          transition: "opacity 1200ms var(--ease-temple)",
        }}
      />

      {/* laurel rays */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--tone) 24%, transparent) 8deg, transparent 16deg, transparent 40deg)",
          opacity: inView ? 0.5 : 0,
          transform: `translate(-50%, -50%) rotate(${inView ? 12 : -14}deg) scale(${inView ? 1 : 0.85})`,
          filter: "blur(2px)",
          transition:
            "opacity 1400ms var(--ease-temple), transform 1800ms var(--ease-temple)",
        }}
      />

      <div
        className="relative"
        style={{ perspective: "1600px", perspectiveOrigin: "50% 42%" }}
      >
        <div
          className="relative mx-auto aspect-[3/2] w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: inView
              ? "translateX(0) translateY(-8px) rotateX(9deg) rotateZ(-0.6deg) scale(1.03)"
              : "translateX(-24%) translateY(6px) rotateX(20deg) rotateZ(0deg) scale(0.9)",
            transition: "transform 1500ms var(--ease-temple)",
          }}
        >
          {/* right interior page */}
          <Page side="right">
            <MeanderRule />
            <p
              className="mt-3 font-display text-[0.6rem] font-semibold uppercase tracking-[0.26em]"
              style={{ color: "var(--tone)" }}
            >
              {product.kicker}
            </p>
            <h4 className="mt-2 font-display text-base font-bold leading-tight text-ink sm:text-xl">
              {product.headline}
            </h4>
            <p className="mt-2 text-[0.68rem] leading-relaxed text-ink/70 sm:text-sm">
              {product.blurb}
            </p>
            <div className="mt-auto flex items-center gap-2 border-t border-ink/15 pt-2 text-[0.72rem] font-semibold text-ink sm:text-sm">
              <span style={{ color: "var(--tone)" }}>⚚</span>
              {product.price}
            </div>
          </Page>

          {/* inner leaf — turns just behind the cover for depth */}
          <div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: inView ? "rotateY(-176deg)" : "rotateY(-2deg)",
              transition: "transform 1600ms var(--ease-temple) 90ms",
            }}
          >
            <div
              className="absolute inset-0 rounded-r-md"
              style={{
                background: marbleBg,
                backfaceVisibility: "hidden",
                boxShadow: "inset 10px 0 20px -16px oklch(0.2 0.02 60 / 70%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-l-md"
              style={{
                background: marbleBg,
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>

          {/* cover: flips open to become the left interior page */}
          <div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: inView ? "rotateY(-174deg)" : "rotateY(0deg)",
              transition: "transform 1700ms var(--ease-temple)",
            }}
          >
            {/* front of cover */}
            <div
              className="absolute inset-0 overflow-hidden rounded-l-sm rounded-r-md"
              style={{
                backfaceVisibility: "hidden",
                background:
                  "linear-gradient(150deg, color-mix(in oklab, var(--tone) 40%, oklch(0.15 0.02 45)), oklch(0.11 0.014 45))",
                boxShadow:
                  "inset 0 0 0 1px color-mix(in oklab, var(--tone) 55%, transparent), inset 0 0 60px -20px color-mix(in oklab, var(--tone) 80%, transparent), 0 40px 70px -34px oklch(0.02 0 0 / 95%)",
              }}
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-3"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.09 0.01 45), transparent)",
                }}
              />
              {/* meander frame */}
              <div
                aria-hidden
                className="absolute inset-3 rounded-sm"
                style={{
                  border: "1px solid color-mix(in oklab, var(--color-gold) 55%, transparent)",
                  boxShadow:
                    "inset 0 0 0 3px oklch(0.11 0.014 45), inset 0 0 0 4px color-mix(in oklab, var(--color-gold) 28%, transparent)",
                }}
              />

              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
                <span
                  aria-hidden
                  className="font-display text-lg"
                  style={{ color: "var(--color-gold)" }}
                >
                  ❦
                </span>
                <p
                  className="mt-2 font-display text-[0.52rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.58rem]"
                  style={{ color: "var(--tone)" }}
                >
                  {product.tagline}
                </p>
                <h3 className="mt-2 font-display text-base font-bold uppercase leading-tight tracking-[0.12em] text-marble sm:text-xl">
                  {product.name}
                </h3>
                <div
                  aria-hidden
                  className="mt-4 h-1 w-20 meander"
                  style={{ opacity: 0.75 }}
                />
                <p className="mt-3 font-serif text-xs italic text-marble/55 sm:text-sm">
                  {product.index}
                </p>
              </div>
            </div>

            {/* back of cover = left interior page */}
            <div
              className="absolute inset-0"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <Page side="left">
                <MeanderRule />
                <p className="mt-3 font-display text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-ink/55">
                  What's inside
                </p>
                <ul className="mt-3 space-y-2 sm:space-y-3">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[0.68rem] leading-snug text-ink/80 sm:text-sm"
                    >
                      <span style={{ color: "var(--tone)" }}>✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto font-serif text-sm italic text-ink/45 sm:text-base">
                  Areviax · {product.index}
                </p>
              </Page>
            </div>
          </div>

          {/* spine shadow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-6 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.15 0.02 55 / 45%), transparent)",
              opacity: inView ? 1 : 0,
              transition: "opacity 900ms var(--ease-temple) 700ms",
            }}
          />
        </div>

        {/* marble plinth */}
        <div
          aria-hidden
          className="mx-auto mt-3 h-3 w-3/4 rounded-[4px]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.4 0.02 60), oklch(0.22 0.015 55))",
            boxShadow: "0 26px 40px -26px oklch(0.02 0 0 / 90%)",
            transform: inView ? "scaleX(1)" : "scaleX(0.82)",
            transition: "transform 1200ms var(--ease-temple)",
          }}
        />
      </div>
    </div>
  );
}

function MeanderRule() {
  return <span aria-hidden className="meander block h-1 w-16 shrink-0" />;
}

function Page({
  side,
  children,
}: {
  side: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-y-0 flex flex-col p-3.5 sm:p-6 ${
        side === "right" ? "right-0 w-1/2 rounded-r-md" : "inset-0 w-full rounded-l-md"
      }`}
      style={{
        background: marbleBg,
        boxShadow:
          side === "right"
            ? "inset 14px 0 24px -18px oklch(0.2 0.02 60 / 70%)"
            : "inset -14px 0 24px -18px oklch(0.2 0.02 60 / 70%)",
        borderTop: "1px solid oklch(0.85 0.02 85)",
      }}
    >
      {children}
    </div>
  );
}
