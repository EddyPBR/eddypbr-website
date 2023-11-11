import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "EddyPBR",
  description: "Website in development...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <header className="h-32">
          <div className="w-full max-w-screen-xl mx-auto h-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="h-4 w-4 bg-indigo-700" />
              <h1 className="text-xl font-bold">Edvaldo Junior</h1>
              <span className="font-light">/</span>
              <p className="font-light">Desenvolver FullStack</p>
            </div>

            <nav className="flex gap-4">
              <Link className="font-light transition-colors  hover:text-indigo-500" href="/sobre-mim">
                SOBRE MIM
              </Link>
              <Link className="font-light transition-colors  hover:text-indigo-500" href="/carreira">
                CARREIRA
              </Link>
              <Link className="font-light transition-colors  hover:text-indigo-500" href="/portfolio">
                PORTFÓLIO
              </Link>
              <Link className="font-light transition-colors  hover:text-indigo-500" href="/contato">
                CONTATO
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
