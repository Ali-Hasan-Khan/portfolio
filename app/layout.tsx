import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen text-gray-100`}>
        <Nav />
        <main className="container mx-auto md:mx-0 px-0 py-0 bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
