'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiGithub, FiDownload, FiLinkedin, FiMail, FiCode, FiFolder, FiAward } from 'react-icons/fi'
import { Button } from "@/components/ui/button"
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
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Go-Bankify",
    technologies: ["Go", "PostgreSQL", "Docker", "REST API", "JWT"],
    demoLink: "https://github.com/Ali-Hasan-Khan/Go-Bankify",
    githubLink: "https://github.com/Ali-Hasan-Khan/Go-Bankify",
  },
  {
    id: 3,
    title: "Dialogue Summarizer",
    description: "An ML-powered dialogue summarization tool using the SAMSum Corpus dataset. Transforms complex conversations into concise, meaningful summaries.",
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Dialogue+Summarizer",
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-purple-400 mb-4">Hi there, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Ali Hasan Khan
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-400 font-medium mb-6">
                Software Engineer & Full Stack Developer
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                I'm a developer specializing in building exceptional digital experiences.
                Currently focused on creating accessible, human-centered products.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Ali-Hasan-Khan">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white border-0">
                    View My Work
                    <FiArrowRight className="ml-2" />
                  </Button>
                </a>
                <a href="mailto:alihasank86@gmail.com">
                  <Button variant="outline" className="bg-black border-purple-600 text-purple-400 hover:bg-purple-600/10">
                    Contact Me
                    <FiMail className="ml-2" />
                  </Button>
                </a>
              </div>

              <div className="flex gap-5 mt-8">
                <Link href="https://github.com/Ali-Hasan-Khan" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FiGithub size={22} />
                </Link>
                <Link href="https://www.linkedin.com/in/ali-hasan-khan-56808b123/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FiLinkedin size={22} />
                </Link>
                <Link href="mailto:alihasank86@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FiMail size={22} />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-auto rounded-lg overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
                  <rect width="1200" height="600" fill="#0F0A1A" />
                  <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1A0F30" />
                      <stop offset="100%" stopColor="#0A0515" />
                    </linearGradient>
                    <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#CE5AFF" />
                      <stop offset="100%" stopColor="#7B2EBC" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <rect x="0" y="0" width="1200" height="600" fill="url(#bgGradient)" />

                  <g stroke="#5928AB" strokeWidth="0.5" opacity="0.3">
                    <line x1="0" y1="100" x2="1200" y2="100" />
                    <line x1="0" y1="200" x2="1200" y2="200" />
                    <line x1="0" y1="300" x2="1200" y2="300" />
                    <line x1="0" y1="400" x2="1200" y2="400" />
                    <line x1="0" y1="500" x2="1200" y2="500" />

                    <line x1="200" y1="0" x2="200" y2="600" />
                    <line x1="400" y1="0" x2="400" y2="600" />
                    <line x1="600" y1="0" x2="600" y2="600" />
                    <line x1="800" y1="0" x2="800" y2="600" />
                    <line x1="1000" y1="0" x2="1000" y2="600" />
                  </g>

                  <g fill="none" stroke="#B366FF" strokeWidth="2" opacity="0.6">
                    <path d="M100,450 L150,450 L150,400 L250,400 L250,330 L350,330" />
                    <path d="M600,150 L700,150 L700,250 L800,250 L800,350" />
                    <path d="M400,500 L450,500 L450,400 L550,400 L550,300" />
                    <path d="M900,200 L950,200 L950,300 L1050,300" />
                  </g>

                  <g fill="#CE5AFF">
                    <circle cx="150" cy="450" r="5" filter="url(#glow)" />
                    <circle cx="250" cy="400" r="5" filter="url(#glow)" />
                    <circle cx="350" cy="330" r="5" filter="url(#glow)" />
                    <circle cx="700" cy="150" r="5" filter="url(#glow)" />
                    <circle cx="800" cy="250" r="5" filter="url(#glow)" />
                    <circle cx="450" cy="500" r="5" filter="url(#glow)" />
                    <circle cx="550" cy="400" r="5" filter="url(#glow)" />
                    <circle cx="950" cy="200" r="5" filter="url(#glow)" />
                    <circle cx="1050" cy="300" r="5" filter="url(#glow)" />
                  </g>

                  <g opacity="0.8">
                    <polygon points="200,180 240,150 240,210" fill="#8A2BE2" filter="url(#glow)" />
                    <rect x="900" y="350" width="40" height="40" fill="#B366FF" filter="url(#glow)" />
                    <polygon points="380,450 430,480 380,510" fill="#CE5AFF" filter="url(#glow)" />
                  </g>

                  <polygon points="600,250 650,275 650,325 600,350 550,325 550,275" fill="none"
                    stroke="url(#purpleGlow)" strokeWidth="4" filter="url(#glow)" />

                  <g fontFamily="monospace" fontSize="80" fill="#CE5AFF" filter="url(#glow)">
                    <text x="480" y="320" opacity="0.9">{ }</text>
                    <text x="650" y="320" opacity="0.9">()</text>
                    <text x="380" y="320" opacity="0.7">[]</text>
                  </g>

                  <g fontFamily="monospace" fontSize="14" fill="#9966FF" opacity="0.7">
                    <text x="300" y="200">function()</text>
                    <text x="750" y="420">const dev = { }</text>
                    <text x="850" y="180">.then()</text>
                    <text x="200" y="350">import { }</text>
                    <text x="500" y="480">async/await</text>
                    <text x="900" y="250">&lt;/&gt;</text>
                  </g>

                  <circle cx="600" cy="300" r="150" fill="none" stroke="#CE5AFF" strokeWidth="2" opacity="0.2" />
                  <circle cx="600" cy="300" r="180" fill="none" stroke="#CE5AFF" strokeWidth="1.5" opacity="0.15" />
                  <circle cx="600" cy="300" r="210" fill="none" stroke="#CE5AFF" strokeWidth="1" opacity="0.1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
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
                className="bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center"
                      >
                        <FiExternalLink className="mr-1" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a passionate computer science student and aspiring full-stack developer with a keen
              interest in creating intuitive, user-friendly web applications.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">3+ Years</h3>
              <p className="text-gray-400">Coding Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiFolder className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">10+ Projects</h3>
              <p className="text-gray-400">Completed Successfully</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">8.84 CGPA</h3>
              <p className="text-gray-400">Academic Achievement</p>
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple-500/30">
                {/* Education Item 1 */}
                <div className="relative flex items-start md:justify-center">
                  <div className="absolute left-0 md:left-1/2 ml-5 md:-ml-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="ml-12 md:ml-12 md:max-w-md">
                    <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-5 border border-purple-500/20">
                      <h4 className="text-lg font-bold text-white">Bachelor of Technology in Computer Science</h4>
                      <p className="text-sm text-purple-400">VIT-AP University • 2022 - Present</p>
                      <p className="text-gray-400 mt-2">
                        Focusing on software engineering, web development, and data structures & algorithms. Currently maintaining a CGPA of 8.84.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="relative flex items-start md:justify-center">
                  <div className="absolute left-0 md:left-1/2 ml-5 md:-ml-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="ml-12 md:ml-12 md:max-w-md">
                    <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-5 border border-purple-500/20">
                      <h4 className="text-lg font-bold text-white">High School Diploma</h4>
                      <p className="text-sm text-purple-400">City Montessori School • 2018 - 2020</p>
                      <p className="text-gray-400 mt-2">
                        Graduated with honors. Participated in coding club and math competitions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Experience</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple-500/30">
                {/* Experience Item 1 */}
                <div className="relative flex items-start md:justify-center">
                  <div className="absolute left-0 md:left-1/2 ml-5 md:-ml-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="ml-12 md:ml-12 md:max-w-md">
                    <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-5 border border-purple-500/20">
                      <h4 className="text-lg font-bold text-white">Software Developer Intern</h4>
                      <p className="text-sm text-purple-400">FullStacktics • March 2025 - Present</p>
                      <p className="text-gray-400 mt-2">
                        Developed a Google Trends API using FastAPI for data analysis and
                        visualization. Integrated the API with a Next.js dashboard for real-time insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>© 2023 Ali Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
}