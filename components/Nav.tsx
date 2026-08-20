"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Books", href: "/books" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Ali-Hasan-Khan" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-hasan-khan-56808b123/",
  },
  {     name: "Resume", href: "https://drive.google.com/file/d/1DeG9s6XRnJo1IKhNX-fNhkDEG2PonYin/view" },
  { name: "Email", href: "mailto:alihasank86@gmail.com" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop Sidebar ───────────────────────────────── */}
      <nav className="hidden lg:flex fixed inset-y-0 left-0 w-sidebar flex-col bg-bg z-50 border-r border-border">
        <div className="px-6 pt-8 pb-6">
          <Link
            href="/"
            className="font-display text-2xl font-bold text-text-primary tracking-tight"
          >
            A
          </Link>
        </div>

        <div className="flex-1 px-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative block py-1.5 font-mono text-sm tracking-wide transition-colors duration-150 ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-text-primary" />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="px-6 pb-8">
          <ul className="flex flex-col gap-1">
            {socials.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="block py-1 font-mono text-xs tracking-wide text-text-tertiary hover:text-text-primary transition-colors duration-150"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile Bottom Bar ─────────────────────────────── */}
      <nav className="lg:hidden fixed inset-x-0 bottom-0 h-16 bg-bg border-t border-border z-50">
        <ul className="flex items-center justify-around h-full px-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex flex-col items-center gap-0.5 py-1 px-3 font-mono text-[10px] tracking-wider transition-colors duration-150 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-tertiary hover:text-text-secondary"
                  }`}
                >
                  <span
                    className={`w-4 h-[2px] rounded-full transition-colors duration-150 ${
                      isActive ? "bg-text-primary" : "bg-transparent"
                    }`}
                  />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
