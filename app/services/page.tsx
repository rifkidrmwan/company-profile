// FILE: app/services/page.tsx
const SERVICES = [
  {
    title: "Showroom Consultation",
    price: "Free",
    desc: "Model guidance, options, and ownership consultation with product specialists.",
    testimonial: "“Clear explanation and honest recommendations.”",
  },
  {
    title: "Test Drive Booking",
    price: "From $50",
    desc: "Schedule a test drive with flexible time slots and professional assistance.",
    testimonial: "“Smooth booking and premium experience.”",
  },
  {
    title: "Financing & Trade-In",
    price: "Custom",
    desc: "Financing plans, leasing support, and trade-in valuation with transparent terms.",
    testimonial: "“Best plan options and very helpful team.”",
  },
  {
    title: "Aftersales Support",
    price: "From $120",
    desc: "Maintenance planning, service reminders, and genuine parts recommendations.",
    testimonial: "“Fast response and reliable aftersales support.”",
  },
  {
    title: "Vehicle Delivery",
    price: "From $80",
    desc: "Premium delivery, documentation support, and handover guidance.",
    testimonial: "“Delivery was on time and very professional.”",
  },
  {
    title: "Detailing & Care",
    price: "From $60",
    desc: "Interior/exterior detailing, coating consultation, and care packages.",
    testimonial: "“Car looks brand new after detailing.”",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8 text-white">
      <h1 className="text-3xl font-extrabold">Services</h1>

      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-white/10 bg-[#0b1220] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-extrabold">{s.title}</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white">
                {s.price}
              </span>
            </div>

            <p className="mt-2 text-sm text-white/70">{s.desc}</p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/60">
                Client testimonial
              </div>
              <div className="mt-1 text-sm text-white/80">{s.testimonial}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}