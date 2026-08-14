import { FiBook, FiBookOpen } from "react-icons/fi";
import { books, type Book } from "@/lib/books";

function BookListItem({ book }: { book: Book }) {
  return (
    <li className="border border-gray-800 shadow-md shadow-slate-600 rounded-md p-5 bg-black/30 hover:bg-gray-900/30 transition-colors">
      <div className="flex items-start gap-3">
        {book.status === "reading" ? (
          <FiBookOpen className="text-gray-500 mt-1 flex-shrink-0" />
        ) : (
          <FiBook className="text-gray-500 mt-1 flex-shrink-0" />
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{book.title}</h3>
            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-900/60 text-gray-400">
              {book.genre}
            </span>
          </div>
          <div className="text-gray-500 text-sm mt-0.5">{book.author}</div>
          {book.note && (
            <p className="text-gray-400 text-sm mt-2">{book.note}</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default function BooksPage() {
  const reading = books.filter((book) => book.status === "reading");
  const read = books.filter((book) => book.status === "read");

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <div className="max-w-4xl mx-0 md:mx-auto md:ml-16 px-4 py-10 md:py-20">
        <div className="mt-10 sm:mt-20 md:mt-0 md:mb-0">
          <h1 className="text-3xl font-bold text-white mb-2">Books</h1>
          <p className="text-gray-400 mb-10">
            What I'm reading right now and what I've finished.
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FiBookOpen className="text-gray-400" />
            <h2 className="text-xl font-semibold text-white">
              Currently Reading
            </h2>
            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-900/60 text-gray-400">
              {reading.length}
            </span>
          </div>
          <ul className="flex flex-col gap-4">
            {reading.map((book) => (
              <BookListItem key={book.title} book={book} />
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <FiBook className="text-gray-400" />
            <h2 className="text-xl font-semibold text-white">Read</h2>
            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-900/60 text-gray-400">
              {read.length}
            </span>
          </div>
          <ul className="flex flex-col gap-4">
            {read.map((book) => (
              <BookListItem key={book.title} book={book} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
