import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Ali Hasan Khan | Backend Engineer",
  description:
    "Backend engineer building distributed systems in Go and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text-primary min-h-screen`}
      >
        <Nav />
        <main className="min-h-screen lg:ml-sidebar">
          <div className="px-4 py-6 md:px-8 md:py-8 lg:px-16 lg:py-10 max-w-4xl">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
