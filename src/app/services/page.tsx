const services = [
  {
    title: "Remote IT Support",
    desc: "Quick fixes for software issues, email problems, slow computers, and setup help.",
    price: "From £35",
  },
  {
    title: "Home Visits & Repairs",
    desc: "Laptop repairs, upgrades, virus removal, Wi-Fi setup, printer issues.",
    price: "From £50",
  },
  {
    title: "Websites",
    desc: "Clean, fast websites for local businesses — setup, hosting, and maintenance.",
    price: "From £199",
  },
];

export default function Services() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Services</h1>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-6 flex flex-col">
            <h2 className="font-semibold text-xl">{s.title}</h2>
            <p className="mt-2 text-gray-600 flex-1">{s.desc}</p>
            <p className="mt-4 font-semibold">{s.price}</p>

            <a
              href="https://cal.com/tashy-card-jrh09j"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-center rounded-xl bg-black px-5 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Book {s.title.toLowerCase()}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
