export default function Contact() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        Have a question before booking? Drop us a message and we’ll get back to you.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact/thanks"
        className="mt-8 space-y-4 max-w-lg"
      >
        {/* Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot (spam trap) */}
        <input type="hidden" name="bot-field" />

        <div>
          <label className="block text-sm font-medium mb-1">Your name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full rounded-xl border p-3 h-32 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-black px-6 py-3 text-white font-medium hover:opacity-90 transition"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
