import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "@/components/Markdown";

const contentDir = path.join(process.cwd(), "content/blog");

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { meta: {} as Record<string, unknown>, body: raw };

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

  const body = raw.slice(match[0].length).trim();
  return { meta: fm, body };
}

function getPost(slug: string) {
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return null;

  const raw = fs.readFileSync(mdxPath, "utf-8");
  const { meta, body } = parseFrontmatter(raw);

  return {
    slug,
    source: body,
    title: (meta.title as string) ?? "Untitled",
    date: (meta.date as string) ?? "",
    tags: (meta.tags as string[]) ?? [],
    readingTime: (meta.readingTime as string) ?? "",
    wip: (meta.wip as boolean) ?? false,
  };
}

function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Ali Hasan Khan`,
    description: post.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-12 sm:pt-16 md:pt-20">
      <div className="mb-8">
        <Link
          href="/blog"
          className="font-mono text-xs text-text-tertiary hover:text-text-secondary transition-colors"
        >
          ← All Posts
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary tracking-tight leading-tight">
          {post.title}
          {post.wip && (
            <span className="ml-3 font-mono text-sm text-text-tertiary">
              [WIP]
            </span>
          )}
        </h1>

        <div className="mt-4 flex items-center gap-4">
          <span className="font-mono text-xs text-text-tertiary tabular-nums">
            {post.date}
          </span>
          <span className="font-mono text-xs text-text-tertiary">
            {post.readingTime}
          </span>
          <div className="flex items-center gap-2">
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
      </header>

      <div className="border-t border-border mb-12" />

      <div className="max-w-[65ch]">
        <Markdown source={post.source} />
      </div>
    </article>
  );
}
