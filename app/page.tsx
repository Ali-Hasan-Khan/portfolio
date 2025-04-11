'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiBriefcase } from 'react-icons/fi'
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
export default function Home() {
  const [contributionData, setContributionData] = useState<number[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const contributionMonths = ['Apr', 'Mar', 'Feb', 'Jan', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May']

  const containerRef = useRef<HTMLDivElement>(null)
  const clientRef = useRef<HTMLDivElement>(null)
  const developmentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch GitHub contribution data
    const fetchGitHubContributions = async () => {
      try {
        // Replace 'Ali-Hasan-Khan' with your actual GitHub username
        const username = 'Ali-Hasan-Khan'
        const response = await fetch(`/api/github-contributions?username=${username}`)
        const data = await response.json()

        if (data.contributions) {
          setContributionData(data.contributions)
          setTotalContributions(data.totalCount)
        }
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error)
        // Fallback to random data if fetch fails
        setContributionData(Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5)))
        setTotalContributions(2019)
      }
    }

    fetchGitHubContributions()
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300 flex justify-center font-mono">
      <div className="relative w-[362px] overflow-hidden rounded-lg border bg-gray-900/60 border-black">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
          fadeEdges={true}
          fadeAmount={0.15}
          height={2400}
          width={800}
        />
      </div>
      <div className="max-w-4xl mx-0 md:mx-auto md:ml-16 px-4 py-10 md:py-20">

        {/* Header Section */}
        <div className="mb-12">
          <div className="text-gray-400 mb-2">Hey, It's me 👋</div>
          <h1 className="text-4xl font-bold tracking-wider text-white mb-6 font-['Courier_New']">
            ALI HASAN
          </h1>

          <div className=" mb-2">
            I'm a <span className="text-white font-semibold">Web Developer</span> who turns caffeine into code.
            Not satisfied with just frontend magic, I ventured into the backend realm to become a true
            <span className="text-white font-semibold"> Full Stack Architect</span>. When I'm not building for clients, you'll find me
            <span className="text-white font-semibold"> Freelancing</span> in the digital wilderness, crafting solutions one commit at a time.
          </div>

          <div className="mt-6">
            Balancing the logic of <span className="text-white font-semibold">Development</span> with the artistry of <span className="text-white font-semibold">Design </span>
            is my superpower. I don't just build websites, I create digital experiences that live at the intersection of function and beauty.
            My GitHub contribution graph is my garden, and I'm always planting new seeds of innovation.
          </div>

          <div className="mt-8 flex space-x-4">
            <Link href="mailto:alihasank86@gmail.com" className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <FiBriefcase className="mr-2" />
              <span className="pt-1.5">Available for Hire</span>
            </Link>
          </div>
        </div>

        <div
          className="relative flex items-center justify-between py-10"
          ref={containerRef}
        >
          {/* Dotted Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-700 z-0" />

          {/* Client */}
          <div className="relative z-10" ref={clientRef}>
            <button
              className={`px-4 py-1.5 text-sm rounded-md border border-gray-700 bg-black text-white transition-colors duration-300`}
            >
              Client
            </button>
          </div>

          {/* Processing */}
          <div className="relative z-10 flex flex-col items-center space-y-1 pt-4">
            <div className="w-10 h-10 rounded-md border border-gray-700 bg-black flex items-center justify-center">
              <motion.div
                className="w-4 h-4 border-2 border-dashed border-gray-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              />
            </div>
            <span className="text-xs text-gray-500">Processing</span>
          </div>

          {/* Development */}
          <div className="relative z-10" ref={developmentRef}>
            <button
              className={`px-4 py-1.5 text-sm rounded-md border border-gray-700 bg-black text-white transition-colors duration-300`}
            >
              Development
            </button>
          </div>

          {/* Single Animated Beam that goes back and forth */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={clientRef}
            toRef={developmentRef}
            startYOffset={0}
            endYOffset={0}
            curvature={0}  // No curvature to follow the dotted line
            pathColor="transparent"  // Make base path invisible
            pathWidth={2}
            pathOpacity={0}
            gradientStartColor="#9ca3af"  // Grey color
            gradientStopColor="#9ca3af"   // White color
            duration={12}  // Slower animation
            reverse={false}  // Will automatically reverse due to animation settings
          />
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mb-16">
          <div className="flex justify-between mb-2">
            {contributionMonths.map((month) => (
              <div key={month} className="text-xs text-gray-500">{month}</div>
            ))}
          </div>

          <div className="grid grid-cols-52 gap-1">
            {contributionData.map((level, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${level === 0 ? 'bg-gray-900' :
                  level === 1 ? 'bg-gray-700' :
                    level === 2 ? 'bg-gray-500' :
                      level === 3 ? 'bg-gray-400' : 'bg-gray-200'
                  }`}
              ></div>
            ))}
          </div>

          <div className="text-xs text-gray-500 mt-2">
            Total {totalContributions} contributions in lifetime
          </div>
        </div>

        {/* Timeline - Horizontal */}
        <div className="mb-8 md:mb-16">
          <div className="relative">
            {/* Horizontal Line with Dots - Responsive */}
            <div className="flex items-center z-10 justify-between mb-4 md:mb-6 overflow-x-auto pb-2 md:pb-0 px-1 md:px-0">
              <div className="w-3 h-3 ml-2 md:ml-4 z-10 bg-white rounded-full flex-shrink-0"></div>
              <div className="w-3 h-3 ml-4 md:ml-8 z-10 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="w-3 h-3 ml-4 md:ml-8 z-10 bg-gray-700 rounded-full flex-shrink-0"></div>
              <div className="text-gray-500 text-xs flex items-center flex-shrink-0 ml-2 md:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Absolute line connecting dots with gradient */}
            <div className="absolute top-1.5 left-2 md:left-4 right-8 h-0.5" style={{
              top: '0.375rem',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(75,85,99,1) 15%, rgba(31,41,55,1) 100%)'
            }}></div>

            {/* Timeline Items - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 mt-2 md:mt-0">
              {/* Item 1 - Current */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 sm:mr-0 sm:mb-3 flex-shrink-0">
                  <FiBriefcase className="text-gray-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Freelance</div>
                  <div className="text-gray-500 text-sm">2025 - Now</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 sm:mr-0 sm:mb-3 flex-shrink-0">
                  <FiCode className="text-gray-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Fullstacktics</div>
                  <div className="text-gray-500 text-sm">2025 - 2025</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 sm:mr-0 sm:mb-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Graduation</div>
                  <div className="text-gray-500 text-sm">2022 - 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 - Edumanager */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Edumanager</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive school management system built with Next.js,
                featuring student tracking, attendance management, and grade
                reporting capabilities.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Next.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">TypeScript</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Prisma</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">PostgreSQL</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Tailwind CSS</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/EduManager" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://edu-manager-sms.vercel.app/" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>

            {/* Project 2 - Go-Bankify */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Go-Bankify</h3>
              <p className="text-gray-400 mb-4">
                A robust banking service system built in Go, enabling account creation,
                balance management, and currency handling with secure transaction
                processing.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Go</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">PostgreSQL</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Docker</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">REST API</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">JWT</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/go-bankify" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://github.com/Ali-Hasan-Khan/go-bankify" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>

            {/* Project 3 - Dialogue Summarizer */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Dialogue Summarizer</h3>
              <p className="text-gray-400 mb-4">
                An ML-powered dialogue summarization tool using the SAMSum
                Corpus dataset. Transforms complex conversations into concise,
                meaningful summaries.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Python</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">PyTorch</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Transformers</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">NLTK</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Streamlit</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/dialogue-summarizer" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://github.com/Ali-Hasan-Khan/dialogue-summarizer" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>

            {/* Project 4 - Whoscored Data Scraper */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Whoscored Data Scraper</h3>
              <p className="text-gray-400 mb-4">
                A sophisticated web scraping tool that extracts and visualizes football
                match data from Whoscored.com using Selenium and mplsoccer library.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Python</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400  ">Selenium</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Pandas</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">mplsoccer</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">BeautifulSoup</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://github.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="text-gray-400 mb-4">You can check these links if you wish to</div>
          <div className="flex flex-wrap gap-2">
            <Link href="https://x.com/rockingAli5"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="pl-1 pt-1.5">Twitter</span>
            </Link>

            <Link href="https://github.com/Ali-Hasan-Khan"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="pl-1 pt-1.5">Github</span>
            </Link>



            <Link
              href="https://drive.google.com/file/d/1HrVtTOBTWZl7OxY_2JUUtD4iYOcnTYqG/view"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="pl-1 pt-1.5">Resume</span>
            </Link>

            <Link
              href="https://discordapp.com/users/alihasankhan88086835"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
              </svg>
              <span className="pl-1 pt-1.5">Discord</span>
            </Link>

            <Link
              href="https://t.me/rockingAli"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.92 2.286 4.368.613 1.323 1.468 2.068 2.285 2.286.652.177 1.323-.12 1.884-.648.282-.262 1.476-1.46 2.286-2.286.937-.932 2.1-2.137 3.636-3.635l5.478-5.478a2.226 2.226 0 0 0 .633-1.62c-.054-1.052-.95-1.918-1.666-2.09z"></path>
              </svg>
              <span className="pl-1 pt-1.5">Telegram</span>
            </Link>

            <Link
              href="https://peerlist.io/alihasank86"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <span className="pl-1 pt-1.5">Peerlist</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            Made with ❤️ by Ali Hasan © 2025. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <Link href="https://github.com/Ali-Hasan-Khan" className="text-gray-500 hover:text-white transition-colors">
              <FiGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/ali-hasan-khan" className="text-gray-500 hover:text-white transition-colors">
              <FiLinkedin />
            </Link>
            <Link href="mailto:alihasank86@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <FiMail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
