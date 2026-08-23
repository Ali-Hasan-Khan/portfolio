export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  period: string;
  stack: string[];
  tags: string[];
  status: "Shipped" | "In Progress";
  github: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "dsend",
    title: "Dsend",
    description:
      "Built a RabbitMQ-inspired message broker in Go with custom TCP protocol, persistent connections, at-least-once delivery, retries, DLQ, and WAL-based recovery.",
    year: "2026",
    period: "May 2026 - Present",
    stack: ["Golang", "Distributed Systems", "Message Queue"],
    tags: [],
    status: "In Progress",
    github: "https://github.com/Ali-Hasan-Khan/dsend",
    demo: "https://dsend.alihk.tech",
    image: "/dsend-thumbnail.png",
  },
  {
    slug: "pastel",
    title: "Pastel",
    description:
      "Built a journaling platform that allows users to record memories and schedule them for future delivery using Next.js, Clerk, and PostgreSQL.",
    year: "2025",
    period: "May 2025 - Dec 2025",
    stack: ["NextJS", "PostgreSQL"],
    tags: ["Full Stack Web Development"],
    status: "Shipped",
    github: "https://github.com/Ali-Hasan-Khan/pastel",
    demo: "https://pastel.alihk.tech",
    image: "/pastel-thumbnail.png",
  },
  {
    slug: "edumanager",
    title: "EduManager",
    description:
      "Deployed a responsive school ERP using Next.js and Supabase PostgreSQL Database to support admins, teachers, and students.",
    year: "2024",
    period: "Sep 2024 - Dec 2024",
    stack: ["NextJS", "Supabase"],
    tags: ["Full Stack Web Development"],
    status: "Shipped",
    github: "https://github.com/Ali-Hasan-Khan/EduManager",
    demo: "https://edumanager.alihk.tech",
    image: "/edumanager-thumbnail.png",
  },
  {
    slug: "go-bankify",
    title: "Go-Bankify",
    description:
      "Built a Golang backend for account management and transactional money transfers with PostgreSQL, sqlc, and REST APIs.",
    year: "2024",
    period: "Feb 2024 - Apr 2024",
    stack: ["Golang", "Docker"],
    tags: ["Backend Development"],
    status: "Shipped",
    github: "https://github.com/Ali-Hasan-Khan/go-bankify",
  },
  {
    slug: "whoscored-scraper",
    title: "Whoscored.com Data Scraper",
    description:
      "Automated event data scraping from Whoscored.com using Selenium, Python, and BeautifulSoup for 500+ football matches.",
    year: "2023",
    period: "May 2023 - Dec 2023",
    stack: ["Python", "Selenium"],
    tags: ["Web Scraping", "Data Analytics", "30+ GitHub Stars"],
    status: "Shipped",
    github:
      "https://github.com/Ali-Hasan-Khan/Scrape-Whoscored-Event-Data",
    demo: "https://whoscoredscraper.alihk.tech",
    image: "/whoscored-scraper-thumbnail.png",
  },
];
