"use client";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Link from "next/link";

const links = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Books", href: "/books" },
  { name: "Contact", href: "mailto:alihasank86@gmail.com" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1DeG9s6XRnJo1IKhNX-fNhkDEG2PonYin/view?usp=drivesdk",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16 md:ml-[82px]">
          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side: social icons + hamburger */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/Ali-Hasan-Khan"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FiGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ali-hasan-khan-56808b123/"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FiLinkedin size={18} />
            </Link>
            <Link
              href="mailto:alihasank86@gmail.com"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FiMail size={18} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 pb-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
