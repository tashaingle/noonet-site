import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Noonet – Domestic IT Support, Repairs & Websites
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Friendly, reliable tech help for your home and small business. 
          From broken laptops to full website builds — we’ve got you covered.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/book"
            className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
          >
            Book a service
          </Link>
          <Link
            href="/services"
            className="inline-block rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
          >
            View services
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-12">
        {[
          { title: "Home IT Support", desc: "Fix slow PCs, Wi-Fi issues, printers, email and more." },
          { title: "Repairs", desc: "Laptop and PC repairs, upgrades, virus removal." },
          { title: "Websites", desc: "Simple, fast websites for local businesses." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border p-6">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
