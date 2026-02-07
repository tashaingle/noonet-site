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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight">
              Noonet
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/services" className="hover:opacity-70">Services</Link>
              <Link href="/book" className="hover:opacity-70">Book</Link>
              <Link href="/contact" className="hover:opacity-70">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6">{children}</main>

        <footer className="mt-20 border-t">
          <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Noonet</p>
            <p className="flex gap-4">
              <Link className="hover:opacity-70" href="/contact">Contact</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
