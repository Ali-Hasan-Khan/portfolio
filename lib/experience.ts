export type Experience = {
  company: string;
  role: string;
  period: string;
  duration: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Mercari, Inc.",
    role: "Backend Engineer Intern",
    period: "Jan 2026 - Jun 2026",
    duration: "6 months",
    highlights: [
      "Delivered backend features for Mercari's global coupon and payments platform using Go, gRPC, Kubernetes, and distributed microservices, supporting multi-country expansion and foreign-currency coupon flows.",
      "Led the end-to-end implementation of the Mercard Limited Payment Coupon feature enabling coupon support for the bottom 5% of credit card users without credit limits, with a projected annual impact of 81M GMV across 2,500+ coupons.",
      "Improved reliability of time-sensitive notification pipelines by implementing Datadog monitoring/alerting, optimizing indexed query paths, and enabling timezone-aware processing across regional workers and Pub/Sub systems.",
      "Led API and Proto contract migrations across services, introducing currency-aware coupon handling and release-safety improvements that reduced rollout risk and improved cross-service compatibility.",
    ],
    stack: ["Go", "gRPC", "Kubernetes", "Pub/Sub", "Datadog"],
  },
  {
    company: "FullStacktics",
    role: "Freelance",
    period: "Mar 2025 - Apr 2025",
    duration: "2 months",
    highlights: [
      "Engineered a production-ready Google Trends API using FastAPI, reducing response latency by 35% using Redis caching.",
    ],
    stack: ["Python", "FastAPI", "Redis"],
  },
];
