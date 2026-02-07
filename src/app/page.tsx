import Link from "next/link";
import {
  Smile,
  Zap,
  PoundSterling,
  Wrench,
  CalendarCheck,
  CheckCircle2,
  Wifi,
  Laptop,
  Printer,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    title: "Friendly & jargon-free",
    desc: "Clear explanations, no judgement — just practical help that makes sense.",
    Icon: Smile,
  },
  {
    title: "Fast turnaround",
    desc: "Quick remote fixes and flexible home visit slots when you need them.",
    Icon: Zap,
  },
  {
    title: "Clear pricing",
    desc: "Upfront “from” pricing and honest advice before any work starts.",
    Icon: PoundSterling,
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
    <main className="py-10 md:py-14">
      {/* Hero */}
      <section className="py-8 md:py-10">
        <div className="panel">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">Domestic IT Support</span>
              <span className="badge">Repairs</span>
              <span className="badge">Websites</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Friendly tech help for your home and small business
              </h1>

              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                From slow laptops and Wi-Fi issues to full website builds — clear pricing, fast
                turnaround, and no jargon.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">
                Book a service
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-700">
              <div className="card bg-white/80 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500" />
                <span>Clear pricing</span>
              </div>
              <div className="card bg-white/80 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                <span>Friendly support</span>
              </div>
              <div className="card bg-white/80 flex items-center gap-3">
                <Wifi className="h-5 w-5 text-blue-500" />
                <span>Remote or in-person</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Why choose Noonet?</h2>
            <p className="mt-2 text-gray-600">
              Reliable help, clear communication, and a tidy finish.
            </p>
          </div>
          <Link href="/contact" className="hidden sm:inline-flex btn-secondary">
            Ask a question
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {trustPoints.map(({ title, desc, Icon }) => (
            <div key={title} className="card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{desc}</p>
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
              Icon: Wrench,
              step: "01",
            },
            {
              title: "Book a time",
              desc: "Select a slot that suits you using our online booking.",
              Icon: CalendarCheck,
              step: "02",
            },
            {
              title: "Get it sorted",
              desc: "We fix the issue or build the site — quickly and clearly.",
              Icon: CheckCircle2,
              step: "03",
            },
          ].map(({ title, desc, Icon, step }) => (
            <div key={title} className="card">
              <p className="text-xs font-semibold text-gray-500">{step}</p>
              <div className="mt-2 flex items-center gap-3">
                <Icon className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section className="py-10">
        <div className="surface">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Service area & availability</h2>
              <p className="mt-3 text-gray-600 max-w-3xl">
                Remote support available UK-wide. Home visits available locally. Evening and weekend
                slots may be available — if you can’t find a time that suits, send a message.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:grid-cols-4">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-blue-600" /> Laptops
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-blue-600" /> Wi-Fi
                </div>
                <div className="flex items-center gap-2">
                  <Printer className="h-4 w-4 text-blue-600" /> Printers
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> Security
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/book" className="btn-primary">
                Book now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Message us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10">
        <h2 className="text-2xl font-bold">What customers say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-3 text-sm font-medium text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10">
        <div className="surface-muted">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Ready when you are</h2>
              <p className="mt-2 text-gray-600">
                Book now or send a message if you’re not sure what you need.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="/book" className="btn-primary">
                Book now
              </Link>
              <Link href="/contact" className="btn-secondary">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
