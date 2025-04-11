'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

const links = [
  { name: "About", href: "/" },
  { name: "Projects", href: "https://github.com/Ali-Hasan-Khan" },
  { name: "Contact", href: "mailto:alihasank86@gmail.com" },
  { name: "Resume", href: "https://drive.google.com/file/d/1HrVtTOBTWZl7OxY_2JUUtD4iYOcnTYqG/view?usp=sharing" }
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-mono tracking-wider text-white">
              ALI HASAN
            </Link>
            <Link href="https://x.com/rockingAli5" className="text-gray-500 ml-2 text-sm">/ @rockingAli5</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/Ali-Hasan-Khan" className="text-gray-500 hover:text-white transition-colors">
              <FiGithub size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/ali-hasan-khan" className="text-gray-500 hover:text-white transition-colors">
              <FiLinkedin size={18} />
            </Link>
            <Link href="mailto:alihasank86@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <FiMail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 