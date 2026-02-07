import Link from "next/link";

const trustPoints = [
  {
    title: "Friendly & jargon-free",
    desc: "Clear explanations, no judgement — just practical help that makes sense.",
  },
  {
    title: "Fast turnaround",
    desc: "Quick remote fixes and flexible home visit slots when you need them.",
  },
  {
    title: "Clear pricing",
    desc: "Upfront “from” pricing and honest advice before any work starts.",
  },
];

const testimonials = [
  {
    quote:
      "Fixed my laptop the same day and explained everything in plain English. Brilliant service.",
    name: "Sarah M.",
  },
  {
    quote:
      "Sorted my Wi-Fi and printer setup in one visit. Friendly, professional and really helpful.",
    name: "James T.",
  },
];

export default function Home() {
  return (
    <main className="py-14">
      {/* Hero */}
      <section className="py-10">
        <div className="rounded-3xl border bg-white p-10 shadow-sm">
          <p className="text-sm font-medium text-gray-600">
            Domestic IT Support • Repairs • Websites
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Friendly tech help for your home and small business
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            From slow laptops and Wi-Fi issues to full website builds — clear pricing, fast
            turnaround, and no jargon.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
            >
              Book a service
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
            >
              View services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm text-gray-600">
            <div className="rounded-2xl border p-4">✅ Clear pricing</div>
            <div className="rounded-2xl border p-4">✅ Friendly support</div>
            <div className="rounded-2xl border p-4">✅ Remote or in-person</div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">Why choose Noonet?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {trustPoints.map((item) => (
            <div key={item.title} className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Choose a service",
              desc: "Pick remote support, a home visit, or a website package.",
            },
            {
              title: "Book a time",
              desc: "Select a slot that suits you using our online booking.",
            },
            {
              title: "Get it sorted",
              desc: "We fix the issue or build the site — quickly and clearly.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section className="py-10">
        <div className="rounded-3xl border bg-white p-8">
          <h2 className="text-2xl font-bold">Service area & availability</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Remote support available UK-wide. Home visits available locally. Evening and weekend
            slots may be available — if you can’t find a time that suits, send a message.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">What customers say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-3 text-sm font-medium text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10">
        <div className="rounded-3xl border bg-white p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready when you are</h2>
            <p className="mt-2 text-gray-600">
              Book now or send a message if you’re not sure what you need.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/book"
              className="rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
            >
              Book now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
