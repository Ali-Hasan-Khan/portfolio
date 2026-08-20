export type Book = {
  title: string;
  author: string;
  genre: string;
  status: "reading" | "read";
  note?: string;
};

export const books: Book[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    genre: "Distributed Systems",
    status: "reading",
    note: "Chapter 5: Replication. Learning how distributed systems stay consistent at scale.",
  },
  {
    title: "Root Cause",
    author: "Hussein Nasser",
    genre: "System Design",
    status: "reading",
    note: "Following the path of a single request through an entire system, from the moment you hit enter to the database query.",
  },
  {
    title: "System Design Handbook Vol 1",
    author: "Alex Xu",
    genre: "System Design",
    status: "read",
    note: "Solid overview of the classic system design interview questions and how to approach them.",
  },
];
