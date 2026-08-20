import { books } from "@/lib/books";

export const metadata = {
  title: "Books | Ali Hasan Khan",
  description: "What I'm reading and what I've finished.",
};

export default function BooksPage() {
  return (
    <section>
      <header className="mb-12 md:mb-16 pt-12 sm:pt-16 md:pt-20">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
          Books
        </h1>
        <p className="mt-3 text-text-secondary text-base md:text-lg max-w-lg">
          What I&apos;m reading right now and what I&apos;ve finished.
        </p>
      </header>

      <div>
        {books.map((book) => (
          <div
            key={book.title}
            className="py-5 border-b border-border first:border-t"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-text-tertiary mt-1">
                {book.status === "reading" ? "●" : "○"}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {book.title}
                  </h3>
                  <span className="font-mono text-[11px] text-text-tertiary tracking-wide">
                    {book.genre}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mt-0.5">
                  {book.author}
                </p>
                {book.note && (
                  <blockquote className="mt-3 pl-4 border-l border-border text-text-secondary text-sm italic">
                    {book.note}
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
