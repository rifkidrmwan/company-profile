// FILE: app/page.tsx
import Image from "next/image";
import Link from "next/link";

const FEATURED_CARS = [
  { name: "911 Carrera", spec: "3.0L Twin-Turbo • 385 HP", price: "From $114,400" },
  { name: "Taycan", spec: "EV • Up to 750 HP (overboost)", price: "From $99,400" },
  { name: "Cayenne", spec: "SUV • 340–729 HP", price: "From $79,200" },
];

const TESTIMONIALS = [
  { quote: "The showroom experience was premium, fast, and welcoming.", name: "Rina Putri" },
  { quote: "Amazing service and clear guidance on financing options.", name: "Fajar Prasetyo" },
  { quote: "Delivery was smooth, and aftersales support is top tier.", name: "Kevin Tan" },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        {/* background layers (SAFE, no data-uri) */}
        <div className="pointer-events-none absolute inset-0">
          {/* base gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_22%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(900px_circle_at_85%_35%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(900px_circle_at_55%_95%,rgba(99,102,241,0.18),transparent_60%)]" />

          {/* deep overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,20,0.15)_0%,rgba(7,11,20,0.65)_65%,rgba(7,11,20,0.92)_100%)]" />

          {/* softer grid */}
          <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[72px_72px]" />

          {/* glow orbs */}
          <div className="absolute -left-36 top-10 h-80 w-80 rounded-full bg-indigo-500/18 blur-3xl" />
          <div className="absolute -right-36 top-24 h-80 w-80 rounded-full bg-sky-500/18 blur-3xl" />
          <div className="absolute left-1/3 bottom-[-140px] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_45%,transparent_30%,rgba(0,0,0,0.70)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Showroom Open • Book a test drive
            </div>

            <h1 className="mt-5 text-[44px] font-extrabold leading-[0.95] tracking-tight sm:text-[64px]">
              LUXURY PERFORMANCE
              <br />
              CARS AT YOUR
              <br />
              DESTINATION
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">
              Discover iconic Porsche performance. Explore our latest lineup, schedule a test drive,
              and enjoy a premium showroom experience.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="rounded-xl bg-white px-5 py-3 text-xs font-extrabold tracking-widest text-[#0b1220] hover:bg-white/90"
              >
                LEARN MORE
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-extrabold tracking-widest text-white hover:bg-white/10"
              >
                ABOUT US
              </Link>
            </div>

            {/* watermark */}
            <div className="pointer-events-none mt-8 hidden text-[120px] font-extrabold text-white/5 md:block">
              1960
            </div>
          </div>

          {/* Right: car image (FIT) */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="relative h-[260px] w-full sm:h-[320px] md:h-[360px]">
                <Image src="/car-hero.jpg" alt="Porsche" fill priority className="object-cover" />
              </div>

              {/* badge/logo (FULL in circle) */}
              <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur">
                <Image src="/badge.jpg" alt="Badge" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mx-auto max-w-6xl px-6 pb-12">
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
            <Stat label="Base Price" value="$5,647" />
            <Stat label="Power" value="545 HP" />
            <Stat label="Engine" value="756 V8" />
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="space-y-4 text-white">
        <h2 className="text-2xl font-extrabold tracking-tight">Featured Models</h2>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED_CARS.map((c) => (
            <div key={c.name} className="rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-sm">
              <div className="text-lg font-extrabold">{c.name}</div>
              <div className="mt-2 text-sm text-white/70">{c.spec}</div>

              <div className="mt-4 rounded-2xl bg-white/5 px-4 py-3">
                <div className="text-xs font-semibold text-white/60">Starting</div>
                <div className="text-base font-extrabold">{c.price}</div>
              </div>

              <Link href="/services" className="mt-5 inline-block text-sm font-extrabold text-sky-300 hover:underline">
                View details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-4 text-white">
        <h2 className="text-2xl font-extrabold tracking-tight">Testimonials</h2>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/10 bg-[#0b1220] p-6">
              <p className="text-sm text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm font-extrabold">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-[#0b1220] p-8 text-white">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="text-xl font-extrabold">Ready for a test drive?</div>
            <div className="mt-2 text-sm text-white/70">
              Contact our showroom team for availability and scheduling.
            </div>
          </div>
          <Link
            href="/teams"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-[#0b1220] hover:bg-white/90"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight text-white">{value}</div>
    </div>
  );
}