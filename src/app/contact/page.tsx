export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        Have a question before booking? Drop us a message and we’ll get back to you.
      </p>

      <form className="mt-8 space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border p-3"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-xl border p-3"
        />
        <textarea
          placeholder="How can we help?"
          className="w-full rounded-xl border p-3 h-32"
        />
        <button
          type="submit"
          className="rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
