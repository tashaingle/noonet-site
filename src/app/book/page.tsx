export default function Book() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Book a Service</h1>
      <p className="mt-4 text-gray-600">
        Choose a service and time that suits you. You’ll be able to pay securely online.
      </p>

      <div className="mt-8 rounded-2xl border overflow-hidden bg-white">
        <iframe
          src="https://cal.com/tashy-card-jrh09j"
          title="Book with Cal.com"
          className="w-full"
          style={{ height: "900px" }}
          frameBorder="0"
          allow="camera; microphone; fullscreen; payment"
        />
      </div>

      <p className="mt-4 text-sm text-gray-500">
        If the calendar doesn’t load,{" "}
        <a
          className="underline"
          href="https://cal.com/tashy-card-jrh09j"
          target="_blank"
          rel="noreferrer"
        >
          open booking in a new tab
        </a>
        .
      </p>
    </main>
  );
}
