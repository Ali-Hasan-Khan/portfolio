import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import Nav from '@/components/Nav';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-black min-h-screen text-gray-100`}>
        <Nav />
        <main className="container mx-auto md:mx-0 px-0 py-0 bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
