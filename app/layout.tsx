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
        <main className="container mx-auto px-4 py-8 bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
