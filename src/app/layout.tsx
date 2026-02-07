import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noonet",
  description: "Domestic IT support, repairs and websites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Noonet
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/services" className="hover:opacity-70">Services</Link>
              <Link href="/book" className="hover:opacity-70">Book</Link>
              <Link href="/contact" className="hover:opacity-70">Contact</Link>
            </nav>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6">{children}</div>

        <footer className="border-t mt-16">
          <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Noonet. All rights reserved.</p>
            <p className="flex gap-4">
              <Link href="/services" className="hover:opacity-70">Services</Link>
              <Link href="/book" className="hover:opacity-70">Book</Link>
              <Link href="/contact" className="hover:opacity-70">Contact</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
