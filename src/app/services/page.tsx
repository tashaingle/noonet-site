import Link from "next/link";

export default function Services() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Services</h1>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold text-xl">Remote IT Support</h2>
          <p className="mt-2 text-gray-600">
            Quick fixes for software issues, email problems, slow computers, and setup help.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold text-xl">Home Visits & Repairs</h2>
          <p className="mt-2 text-gray-600">
            Laptop repairs, upgrades, virus removal, Wi-Fi setup, printer issues.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold text-xl">Websites</h2>
          <p className="mt-2 text-gray-600">
            Clean, fast websites for local businesses — setup, hosting, and maintenance.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/book"
          className="inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
        >
          Book a service
        </Link>
      </div>
    </main>
  );
}
