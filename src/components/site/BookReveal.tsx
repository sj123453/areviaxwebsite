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

export function BookReveal({ product }: { product: BookProduct }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.45);
  const tone = toneVar[product.tone];

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px] select-none"
      style={{ ["--tone" as string]: tone }}
    >
      {/* ambient floor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-2 h-24 rounded-[50%] blur-2xl"
        style={{
          background: "var(--tone)",
          opacity: inView ? 0.28 : 0.1,
          transition: "opacity 1200ms var(--ease-temple)",
        }}
      />

      <div
        className="relative"
        style={{ perspective: "2000px", perspectiveOrigin: "50% 45%" }}
      >
        <div
          className="relative mx-auto aspect-[3/2] w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: inView
              ? "translateX(0) rotateX(8deg)"
              : "translateX(19%) rotateX(14deg)",
            transition: "transform 1400ms var(--ease-temple)",
          }}
        >
          {/* right interior page */}
          <Page side="right" tone={product.tone}>
            <p
              className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "var(--tone)" }}
            >
              {product.kicker}
            </p>
            <h4 className="mt-3 text-xl font-bold leading-tight text-ink sm:text-2xl">
              {product.headline}
            </h4>
            <p className="mt-3 text-[0.78rem] leading-relaxed text-ink/70 sm:text-sm">
              {product.blurb}
            </p>
            <div className="mt-auto border-t border-ink/15 pt-3 text-[0.8rem] font-semibold text-ink">
              {product.price}
            </div>
          </Page>

          {/* cover: flips open to become the left interior page */}
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: inView ? "rotateY(-168deg)" : "rotateY(0deg)",
              transition: "transform 1500ms var(--ease-temple)",
            }}
          >
            {/* front of cover */}
            <div
              className="absolute inset-0 overflow-hidden rounded-l-sm rounded-r-md"
              style={{
                backfaceVisibility: "hidden",
                background:
                  "linear-gradient(150deg, color-mix(in oklab, var(--tone) 34%, oklch(0.16 0.02 45)), oklch(0.13 0.015 45))",
                boxShadow:
                  "inset 0 0 0 1px color-mix(in oklab, var(--tone) 45%, transparent), 0 30px 60px -30px oklch(0.02 0 0 / 95%)",
              }}
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-3"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.1 0.01 45), transparent)",
                }}
              />
              <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                <div
                  aria-hidden
                  className="mb-5 h-px w-14"
                  style={{ background: "var(--tone)" }}
                />
                <p
                  className="font-display text-[0.58rem] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "var(--tone)" }}
                >
                  {product.tagline}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-[0.12em] text-marble sm:text-xl">
                  {product.name}
                </h3>
                <div
                  aria-hidden
                  className="mt-5 h-px w-14"
                  style={{ background: "var(--tone)" }}
                />
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
              <Page side="left" tone={product.tone}>
                <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-ink/55">
                  What's inside
                </p>
                <ul className="mt-4 space-y-3">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[0.78rem] leading-snug text-ink/80 sm:text-sm"
                    >
                      <span style={{ color: "var(--tone)" }}>✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto font-serif text-base italic text-ink/50">
                  {product.index}
                </p>
              </Page>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page({
  side,
  tone,
  children,
}: {
  side: "left" | "right";
  tone: BookProduct["tone"];
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-y-0 flex flex-col p-4 sm:p-7 ${
        side === "right" ? "right-0 w-1/2 rounded-r-md" : "inset-0 w-full rounded-l-md"
      }`}

      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.012 88), oklch(0.91 0.016 86))",
        boxShadow:
          side === "right"
            ? "inset 14px 0 24px -18px oklch(0.2 0.02 60 / 70%)"
            : "inset -14px 0 24px -18px oklch(0.2 0.02 60 / 70%)",
        borderTop: "1px solid oklch(0.85 0.02 85)",
      }}
      data-tone={tone}
    >
      {children}
    </div>
  );
}
