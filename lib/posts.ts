export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  content: string[];
  wip?: boolean;
};

export const posts: Post[] = [
  {
    slug: "building-a-message-broker-in-go",
    title: "Building a Message Broker in Go",
    date: "June 2026",
    excerpt:
      "A walkthrough of Dsend, a concurrent message broker I built from scratch — covering at-least-once delivery, ack-based processing, retries, and dead-letter queues.",
    readingTime: "8 min read",
    tags: ["Go", "Distributed Systems", "Backend"],
    wip: true,
    content: [
      "Message brokers sit at the heart of most distributed systems, decoupling producers from consumers and making your architecture resilient to failure. Building one from scratch is one of the best ways to truly understand how they work under the hood.",
      "In this post I walk through Dsend, a message broker I built in Go. The core design decisions revolved around three guarantees: at-least-once delivery, acknowledgment-based processing, and a dead-letter queue for poison messages.",
      "For delivery, every message persisted to an append-only log before being acknowledged to the producer. Consumers ack messages explicitly, so if a consumer crashes mid-processing the message is redelivered to another worker.",
      "Retries were implemented with exponential backoff and a maximum attempt count. After that, the message is routed to a dead-letter queue where it can be inspected and replayed later.",
      "The result is a small but production-shaped system that taught me a lot about concurrency in Go, channels, and the trade-offs involved in building reliable systems.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
