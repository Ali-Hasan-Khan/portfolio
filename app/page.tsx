'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiBriefcase, FiStar } from 'react-icons/fi'
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"

export default function Home() {
  const [contributionData, setContributionData] = useState<number[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const contributionMonths = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth(); // 0-11

    // Get 12 months starting from next month of previous year
    const orderedMonths = [];
    for (let i = 0; i < 12; i++) {
      const monthIndex = (currentMonth + 1 + i) % 12;
      orderedMonths.push(months[monthIndex]);
    }

    return orderedMonths;
  }, []);
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
          className="absolute inset-0 z-0 size-full h-[7200px] sm:h-[6500px] md:h-[3500px]"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          width={800}
        />
      </div>
      <div className="max-w-4xl mx-0 md:mx-auto md:ml-16 px-4 py-10 md:py-20">

        {/* Header Section */}
        <div className="mt-10 sm:mt-20 md:mt-0 md:mb-0">
          <div className="text-gray-400 mb-2">Hey, It's me 👋</div>
          <h1 className="text-4xl font-bold tracking-wider text-white mb-6 font-['Courier_New']">
            ALI HASAN KHAN
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
            <Link 
              href="mailto:alihasank86@gmail.com" 
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center
                hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-500
                active:scale-95 active:translate-y-0.5
                transition-all duration-200 ease-in-out"
            >
              <FiBriefcase className="mr-2" />
              <span className="pt-1">Hire Me</span>
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
              className={`md:px-4 px-2 md:py-1.5 py-1 text-sm rounded-md border border-gray-700 bg-black text-white transition-colors duration-300`}
            >
              Client
            </button>
          </div>

          {/* Processing */}
          <div className="relative z-10 flex flex-col items-center space-y-1 pt-4">
            <div className="md:w-10 md:h-10 w-8 h-8 rounded-md border border-gray-700 bg-black flex items-center justify-center">
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
              className={`md:px-4 px-2 md:py-1.5 py-1 text-sm rounded-md border border-gray-700 bg-black text-white transition-colors duration-300`}
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
            duration={8}  // Slower animation
            reverse={false}  // Will automatically reverse due to animation settings
          />
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
            duration={8}  // Slower animation
            reverse={true}  // Will automatically reverse due to animation settings
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
            {Array.from({ length: 7 }).map((_, dayOfWeek) => (
              // For each day of week (0-6)
              Array.from({ length: 52 }).map((_, week) => {
                const index = week * 7 + dayOfWeek;
                return (
                  <div
                    key={index}
                    className={`md:w-3 md:h-3 w-1.5 h-1.5 rounded-sm ${contributionData[index] === 0 ? 'bg-gray-900' :
                      contributionData[index] === 1 ? 'bg-gray-700' :
                      contributionData[index] === 2 ? 'bg-gray-500' :
                      contributionData[index] === 3 ? 'bg-gray-400' : 'bg-gray-200'
                    }`}
                  ></div>
                );
              })
            ))}
          </div>

          <div className="text-xs text-gray-500 mt-2">
            Total {totalContributions} contributions in the last year
          </div>
        </div>

        {/* Timeline - Horizontal */}
        <div className="mb-8 md:mb-16">
          <div className="relative">
            {/* Horizontal Line with Dots - Responsive */}
            <div className="hidden md:flex items-center z-10 justify-between mb-6 px-0">
              <div className="w-3 h-3 ml-4 z-10 bg-white rounded-full flex-shrink-0"></div>
              <div className="w-3 h-3 ml-8 z-10 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="w-3 h-3 ml-8 z-10 bg-gray-700 rounded-full flex-shrink-0"></div>
              <div className="text-gray-500 text-xs flex items-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Vertical Line with Dots for Mobile */}
            <div className="md:hidden absolute left-[21px] top-4 bottom-0" style={{
              width: '2px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(75,85,99,1) 15%, rgba(31,41,55,1) 100%)',
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
            }}></div>

            {/* Horizontal line (desktop only) */}
            <div className="hidden md:block absolute top-1.5 left-4 right-8 h-0.5" style={{
              top: '0.375rem',
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(75,85,99,1) 15%, rgba(31,41,55,1) 100%)'
            }}></div>

            {/* Timeline Items - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 mt-0">
              {/* Item 1 - Current */}
              <div className="flex items-start relative">
                <div className="md:hidden w-3 h-3 absolute left-4 top-4 bg-white rounded-full z-10"></div>
                <div className="flex flex-row md:flex-col items-center md:items-start pl-16 md:pl-0">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 md:mr-0 md:mb-3 flex-shrink-0">
                    <FiBriefcase className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Freelance</div>
                    <div className="text-gray-500 text-sm">2025 - Now</div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start relative">
                <div className="md:hidden w-3 h-3 absolute left-4 top-4 bg-gray-500 rounded-full z-10"></div>
                <div className="flex flex-row md:flex-col items-center md:items-start pl-16 md:pl-0">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 md:mr-0 md:mb-3 flex-shrink-0">
                    <FiCode className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Fullstacktics</div>
                    <div className="text-gray-500 text-sm">2025 - 2025</div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start relative">
                <div className="md:hidden w-3 h-3 absolute left-4 top-4 bg-gray-700 rounded-full z-10"></div>
                <div className="flex flex-row md:flex-col items-center md:items-start pl-16 md:pl-0">
                  <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center mr-4 md:mr-0 md:mb-3 flex-shrink-0">
                    <FiCode className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Graduation</div>
                    <div className="text-gray-500 text-sm">2022 - 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <div className="text-gray-400 mb-4">Technologies I work with</div>
          <div className="flex flex-wrap gap-2">
            {/* Frontend */}
            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <span className="pl-1 pt-1">NextJS</span>
            </div>

            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-4 h-4"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" /><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" /></svg>
              <span className="pl-1 pt-1">TypeScript</span>
            </div>

            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38B2AC" className="w-4 h-4">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              <span className="pl-1 pt-1">Tailwind</span>
            </div>

            {/* Backend */}

            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" className="w-4 h-4"><defs><path id="go-original-a" d="M18.8 1h90.5v126H18.8z"/></defs><clipPath id="go-original-b"><use xlinkHref="#go-original-a" overflow="visible"/></clipPath><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9" clipPath="url(#go-original-b)"/><path d="M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M21.1 68.7c.5-.2 1.1-.3 1.4-.8" clipPath="url(#go-original-b)"/><path d="M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z" clipPath="url(#go-original-b)"/><path d="M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z" clipPath="url(#go-original-b)"/><path d="M97.5 25.3L89.2 11l.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3" clipPath="url(#go-original-b)"/><path d="M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zm9.1 5.5c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6" clipPath="url(#go-original-b)"/><path d="M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zm.2.7c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" d="M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zm64.9-1.8c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9" clipPath="url(#go-original-b)"/><path d="M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zM99.8 63c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8V68l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M107.1 68.2c-.5-.2-1.1-.3-1.4-.8" clipPath="url(#go-original-b)"/><path d="M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1C34.5 8.5 48.1 5.1 62.8 4" clipPath="url(#go-original-b)"/><path d="M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6C76 3.6 89.3 5.5 96 18.8c4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zM62.8 4.3c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1C92.7 13 88.2 9 82 6.7c-6.4-2.1-13.6-2.4-19.2-2.4z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9" clipPath="url(#go-original-b)"/><path d="M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2" clipPath="url(#go-original-b)"/><path d="M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5C39.2 30 44 32 48 32c3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z" clipPath="url(#go-original-b)"/><path d="M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" d="M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" d="M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z" clipPath="url(#go-original-b)"/><path d="M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z" clipPath="url(#go-original-b)"/><path fill="#231F20" d="M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zM64.1 38c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z" clipPath="url(#go-original-b)"/><path fillRule="evenodd" clipRule="evenodd" d="M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4" clipPath="url(#go-original-b)"/></svg>

              <span className="pl-1 pt-1">Golang</span>
            </div>

            {/* Database */}
            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-4 h-4"><path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"/><path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 01-4.962 1.568c-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129 27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529a270.708 270.708 0 0110.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z"/><path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"/><path fill="#fff" d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 011.64-1.55 1.594 1.594 0 011.55 1.639c-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 011.71-1.472 1.597 1.597 0 011.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466a6.71 6.71 0 01-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 01-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517A245.272 245.272 0 0145.88 73.046a1.596 1.596 0 012.304 2.208c-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zm69.429-13.445a1.596 1.596 0 01-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 01.631-2.025c.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zm.76 10.21c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 11-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6.162 6.162 0 01-.54-.401c-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zm-45.562 8.915c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009a41.146 41.146 0 00-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zm12.269-7.36a1.596 1.596 0 01-1.575-1.354 8.218 8.218 0 01-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 01-1.335 1.819l-.244.02zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zm9.63-.677c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zm2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81a5.823 5.823 0 00-.821-.059c-.812 0-1.243.183-1.345.282zm43.605-1.245c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zm-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zm3.965 32.843a1.594 1.594 0 01-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31a1.595 1.595 0 113.186-.172c.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411a1.596 1.596 0 01-1.328.708z"/></svg>
              <span className="pl-1 pt-1">PostgreSQL</span>
            </div>

            {/* Tools */}
            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05032" className="w-4 h-4">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </svg>
              <span className="pl-1 pt-1">Git</span>
            </div>

            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2496ED" className="w-4 h-4">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
              </svg>
              <span className="pl-1 pt-1">Docker</span>
            </div>


            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#049688" className="w-4 h-4">
                <path d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 00-2.375-.5 36.042 36.042 0 01-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563-2.875-1.172-8.172-3.91-9.984-5.156-.496-.344-.96-.621-1.031-.621-.07 0-1.23-.816-2.578-1.813-8.57-6.343-15.004-14.043-19.653-23.527-.8-1.629-1.453-3.074-1.453-3.21 0-.134-.144-.505-.32-.817-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 00-.625-1.813c-.195-.46-.352-1.02-.352-1.246 0-.227-.195-.965-.433-1.645-.238-.675-.43-1.472-.43-1.77 0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894.23-.957.418-2 .418-2.32 0-.321.145-.95.32-1.4.18-.448.41-1.253.516-1.788.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813.11-.238.539-1.21.957-2.16.676-1.535 2.125-4.43 2.972-5.945.309-.555.426-.739 2.098-3.352 2.649-4.148 7.176-9.309 11.39-12.988 1.485-1.297 6.446-5.063 6.669-5.063.062 0 .53-.281 1.043-.625 1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 001.836-.953c.285-.164.82-.41 3.567-1.64.605-.27 1.257-.516 3.136-1.173.414-.144 1.246-.449 1.84-.672.598-.222 1.301-.406 1.563-.406.258 0 .937-.18 1.508-.402.57-.223 1.605-.477 2.304-.563.696-.082 1.621-.277 2.055-.43.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 003.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 003.781.445c.953.079 2.168.278 2.703.442.535.16 1.461.36 2.055.433.594.079 1.594.325 2.222.551.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625.594.18 1.613.535 2.27.797.652.261 1.527.605 1.945.761.77.29 6.46 3.137 7.234 3.622 6.281 3.917 9.512 6.476 13.856 10.964 5.238 5.414 8.715 10.57 12.254 18.16.25.536.632 1.329.851 1.758.215.434.395.942.395 1.13 0 .19.18.76.402 1.269.602 1.383 1.117 2.957 1.36 4.16.12.59.343 1.32.495 1.621.153.3.332 1.063.403 1.688.07.624.277 1.648.453 2.269 1.02 3.531 1.527 13.934.91 18.535-.183 1.367-.39 3.02-.46 3.672-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809-1.172 2.07-5.101 7.668-5.843 8.324-.067.058-.399.45-.735.863-.336.418-1.414 1.586-2.39 2.594-4.301 4.441-7.77 7.187-13.86 10.969-.722.449-6.847 3.441-7.992 3.906-.594.238-1.586.64-2.203.89-.613.247-1.297.454-1.512.458-.215.003-.781.195-1.258.425-.476.23-1.082.422-1.351.426-.266.004-1.043.192-1.727.418-.683.23-1.633.477-2.11.55-.476.075-1.495.278-2.269.45-.773.172-3.11.508-5.187.746a59.06 59.06 0 01-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027.18-.723 29.234-58.97 29.781-59.7.461-.617.504-1.605.082-1.953-.222-.187-3.004-.246-10.43-.234-5.57.012-10.253.016-10.406.012-.226-.008-.273-3.73-.25-19.672.016-10.817-.035-19.766-.113-19.89-.078-.126-.383-.227-.68-.227-.418 0-.613.18-.87.808-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 00-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 00-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039-.41.496-.633 1.64-.402 2.07.21.394.629.41 11.043.394 5.953-.007 10.863.024 10.914.07.137.141.086 37.31-.055 38.196-.093.582-.031.89.235 1.156.46.461.586.457 1.25-.066zm0 0" fill="#049688" />
              </svg>
              <span className="pl-1 pt-1">FastAPI</span>
            </div>

            <div className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-4 h-4"><path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z" /><path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" /><path fill="#A41E11" d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z" /><path fill="#D82C20" d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" /><path fill="#A41E11" d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z" /><path fill="#D82C20" d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z" /><path fill="#fff" d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z" /><ellipse fill="#fff" cx="38.4" cy="35.4" rx="15.5" ry="6" /><path fill="#7A0C00" d="M93.3 27.7l17.2 6.8-17.2 6.8z" /><path fill="#AD2115" d="M74.3 35.3l19-7.6v13.6l-1.9.8z" /></svg>
              <span className="pl-1 pt-1">Redis</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 - Pastel */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <img src="/pastel-logo.ico" alt="Pastel Logo" className="w-8 h-8 rounded-md" />
                <h3 className="text-xl font-semibold text-white">Pastel</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A personal memory vault that lets users write letters to their future selves,
                capture special moments, and receive AI-generated summaries of their emotional journey.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Next.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">TypeScript</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">PostgreSQL</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Clerk Auth</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/pastel" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://pastel-seven.vercel.app" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>

            {/* Project 2 - Edumanager */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <img src="/edumanager-logo.svg" alt="Edumanager Logo" className="w-8 h-8 rounded-md" />
                <h3 className="text-xl font-semibold text-white">Edumanager</h3>
              </div>
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

            {/* Project 3 - Whoscored Data Scraper */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <img src="/whoscored-logo.jpg" alt="Whoscored Logo" className="w-8 h-8 rounded-md" />
                <h3 className="text-xl font-semibold text-white">Whoscored Data Scraper</h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-900/60 text-yellow-400 flex items-center gap-1"><FiStar />30+</span>
              </div>
              <p className="text-gray-400 mb-4">
                A sophisticated web scraping tool that extracts and visualizes football
                match data from Whoscored.com using Selenium and mplsoccer library.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Python</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Selenium</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Pandas</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">Matplotlib</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400">BeautifulSoup</span>
              </div>

              <div className="flex space-x-4">
                <Link href="https://github.com/Ali-Hasan-Khan/whoscored-data-scraper" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiGithub />
                  <span className="text-sm">Code</span>
                </Link>
                <Link href="https://github.com/Ali-Hasan-Khan/whoscored-data-scraper" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FiExternalLink />
                  <span className="text-sm">Demo</span>
                </Link>
              </div>
            </div>

            {/* Project 4 - Go-Bankify */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <img src="/go-bankify-logo.png" alt="Go-Bankify Logo" className="w-8 h-8 rounded-md" />
                <h3 className="text-xl font-semibold text-white">Go-Bankify</h3>
              </div>
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

            {/* Project 5 - Dialogue Summarizer */}
            <div className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <img src="/dialogue-logo.png" alt="Dialogue Summarizer Logo" className="w-8 h-8 rounded-md" />
                <h3 className="text-xl font-semibold text-white">Dialogue Summarizer</h3>
              </div>
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
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="text-gray-400 mb-4">You can check these links if you wish to</div>
          <div className="flex flex-wrap gap-2">
            <Link href="https://x.com/rockingAli5"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="pl-1 pt-1">Twitter</span>
            </Link>

            <Link href="https://github.com/Ali-Hasan-Khan"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="pl-1 pt-1">Github</span>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1HrVtTOBTWZl7OxY_2JUUtD4iYOcnTYqG/view"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="pl-1 pt-1">Resume</span>
            </Link>

            <Link
              href="https://discordapp.com/users/alihasankhan88086835"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
              </svg>
              <span className="pl-1 pt-1">Discord</span>
            </Link>

            <Link
              href="https://t.me/rockingAli"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.92 2.286 4.368.613 1.323 1.468 2.068 2.285 2.286.652.177 1.323-.12 1.884-.648.282-.262 1.476-1.46 2.286-2.286.937-.932 2.1-2.137 3.636-3.635l5.478-5.478a2.226 2.226 0 0 0 .633-1.62c-.054-1.052-.95-1.918-1.666-2.09z"></path>
              </svg>
              <span className="pl-1 pt-1">Telegram</span>
            </Link>

            <Link
              href="https://peerlist.io/alihasank86"
              target="_blank"
              className="bg-black border border-gray-700 rounded-md px-2 shadow-md shadow-slate-600 py-1 flex items-center hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <span className="pl-1 pt-1">Peerlist</span>
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


