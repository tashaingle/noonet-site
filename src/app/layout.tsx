import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noonet",
  description: "Domestic IT support, repairs and websites.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const navLink =
  "rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white font-bold">
                N
              </span>
              <span className="font-bold text-xl tracking-tight">Noonet</span>
              <span className="hidden sm:inline-flex rounded-full border bg-white px-2.5 py-1 text-xs font-medium text-gray-600">
                IT Support • Repairs • Websites
              </span>
            </Link>

            <nav className="flex items-center gap-1">
              <Link href="/services" className={navLink}>
                Services
              </Link>
              <Link href="/book" className={navLink}>
                Book
              </Link>
              <Link href="/contact" className={navLink}>
                Contact
              </Link>

              <a
                href="https://cal.com/tashy-card-jrh09j"
                target="_blank"
                rel="noreferrer"
                className="ml-2 hidden sm:inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Book now
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6">
          <div className="py-10">{children}</div>
        </main>

        <footer className="mt-12 border-t">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-semibold">Noonet</p>
                <p className="mt-2 text-sm text-gray-600 max-w-md">
                  Friendly, reliable tech help for your home and small business — remote support,
                  repairs and clean websites.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Pages</p>
                  <div className="mt-3 space-y-2 text-gray-600">
                    <Link className="block hover:text-gray-900" href="/services">
                      Services
                    </Link>
                    <Link className="block hover:text-gray-900" href="/book">
                      Book
                    </Link>
                    <Link className="block hover:text-gray-900" href="/contact">
                      Contact
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Get in touch</p>
                  <div className="mt-3 space-y-2 text-gray-600">
                    <a
                      className="block hover:text-gray-900"
                      href="https://cal.com/tashy-card-jrh09j"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book on Cal.com
                    </a>
                    <Link className="block hover:text-gray-900" href="/contact">
                      Send a message
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Noonet. All rights reserved.</p>
              <p>Built with Next.js • Deployed on Netlify</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
