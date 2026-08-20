import fs from "fs";
import path from "path";
import Link from "next/link";

const contentDir = path.join(process.cwd(), "content/blog");

type BlogFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  readingTime: string;
  wip?: boolean;
};

function getPosts(): (BlogFrontmatter & { slug: string })[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const fm: Record<string, unknown> = {};
    match[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) {
        const val = rest.join(":").trim();
        if (val.startsWith("[")) {
          fm[key.trim()] = val
            .replace(/[\[\]"]/g, "")
            .split(",")
            .map((s) => s.trim());
        } else if (val === "true") {
          fm[key.trim()] = true;
        } else {
          fm[key.trim()] = val.replace(/^["']|["']$/g, "");
        }
      }
    });

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: fm.title as string,
      date: fm.date as string,
      tags: (fm.tags as string[]) || [],
      readingTime: fm.readingTime as string,
      wip: fm.wip as boolean | undefined,
    };
  });

  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as (BlogFrontmatter & { slug: string })[];
}

export const metadata = {
  title: "Blog | Ali Hasan Khan",
  description: "Writing about systems, code, and the decisions in between.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section>
      <header className="mb-12 md:mb-16 pt-12 sm:pt-16 md:pt-20">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
          Blog
        </h1>
        <p className="mt-3 text-text-secondary text-base md:text-lg max-w-lg">
          Writing about systems, code, and the decisions in between.
        </p>
      </header>

      <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-5 border-b border-border first:border-t transition-colors duration-150 hover:bg-surface"
          >
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-2 md:gap-6 items-baseline">
              <span className="font-mono text-xs text-text-tertiary tabular-nums">
                {post.date}
              </span>

              <div className="min-w-0">
                <h2 className="font-display text-lg md:text-xl font-semibold text-text-primary tracking-tight group-hover:translate-x-2 transition-transform duration-200 ease-out">
                  {post.title}
                  {post.wip && (
                    <span className="ml-2 font-mono text-xs text-text-tertiary">
                      [WIP]
                    </span>
                  )}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-text-tertiary">
                  {post.readingTime}
                </span>
                <div className="hidden md:flex items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-text-tertiary tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
