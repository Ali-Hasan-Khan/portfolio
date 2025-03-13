'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiGithub, FiDownload, FiLinkedin, FiMail } from 'react-icons/fi'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link";


// Updated project data
const projects = [
  {
    id: 1,
    title: "Edumanager",
    description: "A comprehensive school management system built with Next.js, featuring student tracking, attendance management, and grade reporting capabilities.",
    image: "https://raw.githubusercontent.com/Ali-Hasan-Khan/EduManager/a284cce19be6bd7662ee15785a48c6156f4bc2dc/public/school-management-logo-homepage.svg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoLink: "https://edu-manager-sms.vercel.app/",
    githubLink: "https://github.com/Ali-Hasan-Khan/EduManager",
  },
  {
    id: 2,
    title: "Go-Bankify",
    description: "A robust banking service system built in Go, enabling account creation, balance management, and currency handling with secure transaction processing.",
    image: "https://placehold.co/600x400/0f172a/FFFFFF/png?text=Go-Bankify",
    technologies: ["Go", "PostgreSQL", "Docker", "REST API", "JWT"],
    demoLink: "https://github.com/Ali-Hasan-Khan/Go-Bankify",
    githubLink: "https://github.com/Ali-Hasan-Khan/Go-Bankify",
  },
  {
    id: 3,
    title: "Dialogue Summarizer",
    description: "An ML-powered dialogue summarization tool using the SAMSum Corpus dataset. Transforms complex conversations into concise, meaningful summaries.",
    image: "https://placehold.co/600x400/0f172a/FFFFFF/png?text=Dialogue+Summarizer",
    technologies: ["Python", "PyTorch", "Transformers", "NLTK", "Streamlit"],
    demoLink: "https://github.com/Ali-Hasan-Khan/Dialogue-Summarizer",
    githubLink: "https://github.com/Ali-Hasan-Khan/Dialogue-Summarizer",
  },
  {
    id: 4,
    title: "Whoscored Data Scraper",
    description: "A sophisticated web scraping tool that extracts and visualizes football match data from Whoscored.com using Selenium and mplsoccer library.",
    image: "https://raw.githubusercontent.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data/refs/heads/main/logo.jpg",
    technologies: ["Python", "Selenium", "Pandas", "mplsoccer", "BeautifulSoup"],
    demoLink: "https://github.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data",
    githubLink: "https://github.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-950 to-slate-900">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] md:min-h-screen flex flex-col justify-center pt-16 bg-[url('https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for better text visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10" // Ensure content is above the overlay
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
            Software Engineer &<br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Crafting beautiful digital experiences with modern technologies.
          </p>
          <div className="flex justify-center mt-4">
            <a href="#projects">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 hover:scale-105 transition-all duration-300 border-0">
                View My Work
                <FiArrowRight className="h-4 w-4 animate-pulse" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent work showcasing my expertise in frontend development, UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                {project.title === "Edumanager" ? (
                  <div className="absolute inset-0 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.demoLink} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-cyan-500/20 transition-colors">
                    <FiExternalLink className="text-white" />
                  </a>
                  <a href={project.githubLink} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-cyan-500/20 transition-colors">
                    <FiGithub className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:border-cyan-700/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center">
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" size="icon" className="bg-gray-900 text-gray-400 hover:text-gray-300 border-gray-600">
            <Link href="https://github.com/Ali-Hasan-Khan">
              <FiGithub className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="bg-gray-900 text-gray-400 hover:text-gray-300 border-gray-600">
            <Link href="https://www.linkedin.com/in/ali-hasan-khan">
              <FiLinkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="bg-gray-900 text-gray-400 hover:text-gray-300 border-gray-600">
            <Link href="mailto:alihasank86@gmail.com">
              <FiMail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}