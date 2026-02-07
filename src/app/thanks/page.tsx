import Link from "next/link";

export default function Thanks() {
  return (
    <main className="py-20 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Message sent 🎉</h1>
      <p className="mt-4 text-gray-600">
        Thanks for getting in touch. We’ll reply as soon as possible.
      </p>

      <Link
        href="/"
        className="inline-block mt-8 rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
