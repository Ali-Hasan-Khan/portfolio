import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { getPostBySlug, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <div className="max-w-4xl mx-0 md:mx-auto md:ml-16 px-4 py-10 md:py-20">
        <div className="mt-10 sm:mt-20 md:mt-0 md:mb-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8"
          >
            <FiArrowLeft />
            <span className="text-sm">Back to Blog</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-white">{post.title}</h1>
            {post.wip && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-900/60 text-yellow-400 flex items-center gap-1">
                WIP
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-8">
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

          <div className="border-l-2 border-gray-700 pl-6 space-y-4">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
