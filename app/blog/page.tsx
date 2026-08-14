import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <div className="max-w-4xl mx-0 md:mx-auto md:ml-16 px-4 py-10 md:py-20">
        <div className="mt-10 sm:mt-20 md:mt-0 md:mb-0">
          <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
          <p className="text-gray-400 mb-10">
            Notes, tutorials, and things I'm thinking about.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-gray-800 shadow-md shadow-slate-600 rounded-md p-6 bg-black/30 hover:bg-gray-900/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h2 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {post.wip && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-900/60 text-yellow-400 flex items-center gap-1">
                      WIP
                    </span>
                  )}
                  <FiArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <FiClock />
                  {post.readingTime}
                </span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-gray-900/60 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
