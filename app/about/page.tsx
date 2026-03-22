// FILE: app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="space-y-8 text-white">
      <h1 className="text-3xl font-extrabold">About Us</h1>

      <section className="rounded-3xl border border-white/10 bg-[#0b1220] p-6">
        <h2 className="text-xl font-extrabold">Company History</h2>
        <p className="mt-3 text-sm text-white/70">
          Porsche Showroom is built for enthusiasts who value design, performance, and premium
          experience. Starting as a small dealership partnership, we evolved into a curated showroom
          offering test drives, consultation, and aftersales support.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          { t: "Milestones", d: "Expanded showroom, certified services, and premium delivery." },
          { t: "Team", d: "Sales advisors, product specialists, and aftersales experts." },
          { t: "Culture", d: "Transparency, attention to detail, and customer-first experience." },
        ].map((x) => (
          <div key={x.t} className="rounded-3xl border border-white/10 bg-[#0b1220] p-6">
            <div className="text-lg font-extrabold">{x.t}</div>
            <div className="mt-2 text-sm text-white/70">{x.d}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#0b1220] p-6">
        <h2 className="text-xl font-extrabold">Our Promise</h2>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>• Curated lineup and trusted sourcing</li>
          <li>• Clear consultation for model, options, and ownership</li>
          <li>• Premium delivery and aftersales guidance</li>
        </ul>
      </section>
    </div>
  );
}