import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, ShoppingCart, User } from "lucide-react";

import emblem from "@/assets/compass-emblem.png";
import templeBg from "@/assets/temple-bg.jpg";
import { BookReveal, type BookProduct } from "@/components/site/BookReveal";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areviax — Digital Products Built to Perform" },
      {
        name: "description",
        content:
          "Areviax builds lean, battle-tested digital products for creators: fitness systems, content growth playbooks and the Mastermind Bundle. Instant download, lifetime access.",
      },
      { property: "og:title", content: "Areviax — Digital Products Built to Perform" },
      {
        property: "og:description",
        content:
          "Fitness systems, growth playbooks and productivity tools — no fluff, no filler. Instant download, lifetime access.",
      },
    ],
  }),
  component: Home,
});

const products: BookProduct[] = [
  {
    index: "01 / 03",
    name: "Physique System",
    tagline: "Fitness series",
    kicker: "Premium subscription",
    headline: "Your daily fitness command centre.",
    blurb:
      "Workout builder with PR detection, a 230+ item food database, sleep tracking and progress photos — logged for you every day.",
    points: [
      "PR-detecting workout builder",
      "230+ item food database",
      "Sleep & progress-photo tracking",
    ],
    price: "£17/mo · £163.99/yr",
    tone: "laurel",
  },
  {
    index: "02 / 03",
    name: "The Mastermind Bundle",
    tagline: "Complete collection",
    kicker: "All five products",
    headline: "Everything, for less than one product alone.",
    blurb:
      "All five products. One price. Lifetime access. Everything you need to build, grow and scale — nothing held back.",
    points: [
      "All 5 products included",
      "Lifetime access, one price",
      "Free updates, forever",
    ],
    price: "£97 one-time · was £129",
    tone: "aegean",
  },
  {
    index: "03 / 03",
    name: "Areviax OS",
    tagline: "Premium subscription",
    kicker: "Daily operating system",
    headline: "Your whole day, run like a system.",
    blurb:
      "Workout planner, study sessions, habit tracking and gamified goals — compass shards, XP levels and streaks in one place.",
    points: [
      "Workout planner + study sessions",
      "Habit tracking & gamified goals",
      "Compass shards, XP, streaks",
    ],
    price: "£16/mo · £110/yr",
    tone: "ember",
  },
];

const marquee = [
  "Digital products",
  "TikTok growth",
  "YouTube systems",
  "Physique",
  "Monetisation",
  "Discipline",
];

const proofs = [
  "Every product battle-tested before it reaches you",
  "No padded-out courses — lean assets you use the same day",
  "One update fee of zero, for life",
];

const reviews = [
  {
    title: "honestly above and beyond",
    body: "spent a week going back and forth on which one to buy. eventually just got the bundle. the consistency across everything is what got me — clearly made by someone who actually cares.",
    name: "dan.w",
    meta: "Birmingham · 3 weeks ago",
  },
  {
    title: "growth code is genuinely different",
    body: "been buying creator guides for 2 years and most are recycled advice. this one actually explains the why behind everything. the hook chapter changed how i approach every video.",
    name: "Liam R.",
    meta: "Video creator, Leeds · 4 days ago",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Vault />
      <GreekDivider />
      <Proof />
      <Testimonials />
      <GreekDivider />
      <FinalCta />
      <Footer />
    </div>
  );
}

function GreekDivider() {
  return (
    <div className="relative mx-auto flex max-w-5xl items-center gap-4 px-6 py-2">
      <span aria-hidden className="meander h-1.5 flex-1" />
      <span aria-hidden className="font-display text-base text-primary">
        ⚚
      </span>
      <span aria-hidden className="meander h-1.5 flex-1" />
    </div>
  );
}


function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-5xl items-center gap-4 rounded-full border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={emblem}
            alt="Areviax compass emblem"
            width={40}
            height={40}
            className="h-9 w-9"
          />
          <span className="font-display text-base font-bold uppercase tracking-[0.22em] text-foreground">
            Areviax
          </span>
        </a>
        <div className="ml-auto hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#vault">
            The Vault
          </a>
          <a className="transition-colors hover:text-foreground" href="#why">
            Why Areviax
          </a>
          <a className="transition-colors hover:text-foreground" href="#reviews">
            Reviews
          </a>
        </div>
        <div className="ml-auto flex items-center gap-4 text-muted-foreground md:ml-6">
          <User className="h-5 w-5" aria-hidden />
          <ShoppingCart className="h-5 w-5" aria-hidden />
          <Menu className="h-5 w-5 md:hidden" aria-hidden />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40">
      <img
        src={templeBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 22%, oklch(0.68 0.19 44 / 22%), transparent 70%), linear-gradient(180deg, transparent 55%, var(--color-background) 96%)",
        }}
      />
      {/* fluted temple columns */}
      {[
        "left-[-2%] sm:left-[4%]",
        "right-[-2%] sm:right-[4%]",
      ].map((pos) => (
        <div
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute top-0 -z-10 h-[70%] w-16 opacity-25 sm:w-24 ${pos}`}
          style={{
            background:
              "repeating-linear-gradient(90deg, oklch(0.86 0.012 85 / 26%) 0 3px, transparent 3px 11px)",
            maskImage:
              "linear-gradient(180deg, transparent, black 18%, black 55%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 18%, black 55%, transparent)",
          }}
        />
      ))}



      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="relative mx-auto mb-10 h-52 w-52 sm:h-64 sm:w-64">
          <div
            aria-hidden
            className="animate-ember absolute inset-0 rounded-full blur-3xl"
            style={{ background: "var(--gradient-ember)", opacity: 0.4 }}
          />
          <img
            src={emblem}
            alt="Areviax emblem: a compass star inside a laurel wreath"
            width={1024}
            height={1024}
            className="animate-drift relative h-full w-full object-contain"
          />
        </div>

        <p className="eyebrow">Digital products · making success real</p>

        <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          Build the life you
          <br />
          <span className="font-serif text-[1.05em] font-normal italic text-muted-foreground">
            actually
          </span>{" "}
          <span className="text-ember">want.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          Everything I wish existed when I was starting out — forged into products
          you can actually use today.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="#vault"
            className="glow-ring group inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
            style={{ background: "var(--gradient-ember)" }}
          >
            Enter the Vault
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#reviews"
            className="text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
          >
            See results →
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {["Instant download", "Lifetime access", "30-day plans"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="animate-ticker flex w-max gap-10 whitespace-nowrap">
        {[...marquee, ...marquee, ...marquee, ...marquee].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xs uppercase tracking-[0.32em] text-muted-foreground"
          >
            {item} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Vault() {
  return (
    <section id="vault" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="meander h-1 w-16" />
            <p className="eyebrow">The Vault</p>
            <span aria-hidden className="meander h-1 w-16" />
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Products built to{" "}
            <span className="font-serif font-normal italic text-gilded">
              perform
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Every product is a standalone asset. Scroll and each one opens itself.
          </p>
        </Reveal>

        <div className="mt-20 space-y-28 sm:space-y-36">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <BookReveal product={product} />
              </div>
              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {product.index}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {product.blurb}
                </p>
                <p className="mt-6 font-display text-sm font-semibold tracking-[0.12em] text-primary">
                  {product.price}
                </p>
                <a
                  href="#final"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
                >
                  View {product.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="why" className="relative border-y border-border bg-surface py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Why Areviax</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Not theory.{" "}
            <span className="font-serif font-normal italic text-ember">
              Execution.
            </span>
          </h2>
          <ul className="mt-8 space-y-5">
            {proofs.map((proof) => (
              <li key={proof} className="flex gap-4 text-muted-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/40 text-xs text-primary">
                  ✓
                </span>
                {proof}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="grid grid-cols-2 gap-4">
          {[
            { stat: "100%", label: "Action-focused" },
            { stat: "5", label: "Products in the vault" },
            { stat: "400+", label: "Creators inside" },
            { stat: "£32", label: "Saved with the bundle" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface-2 p-6"
              style={{ boxShadow: "var(--shadow-plinth)" }}
            >
              <p className="text-3xl font-extrabold text-ember">{item.stat}</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">The Oracle speaks</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Words from inside
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 120}>
              <figure className="h-full rounded-2xl border border-border bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="text-primary">★★★★★</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                    Verified purchase
                  </span>
                </div>
                <figcaption className="mt-4 font-bold">{review.title}</figcaption>
                <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-muted-foreground">
                  “{review.body}”
                </blockquote>
                <div className="mt-6 border-t border-border pt-4 text-sm">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.meta}</p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="final" className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, oklch(0.68 0.19 44 / 18%), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Limited time</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Ready to build something{" "}
            <span className="font-serif font-normal italic text-gilded">real?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Everything you need to build, grow and monetise — from your first
            digital product to a full content system. No fluff, no filler.
          </p>
          <a
            href="#vault"
            className="glow-ring mt-10 inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
            style={{ background: "var(--gradient-ember)" }}
          >
            Get the full vault — £97
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Save £32 versus buying separately
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <img src={emblem} alt="" aria-hidden width={40} height={40} className="h-8 w-8" />
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Areviax
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Areviax. Built for people who finish things.
        </p>
      </div>
    </footer>
  );
}
