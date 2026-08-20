import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Markdown from "@/components/Markdown";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

const contentDir = path.join(process.cwd(), "content/work");

function getProjectBySlug(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}

function getMdxSource(slug: string): string | null {
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return null;
  const raw = fs.readFileSync(mdxPath, "utf-8");
  const match = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  return match ? match[1].trim() : raw;
}

function getAdjacentProject(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  return { prev, next };
}

export function generateStaticParams() {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Ali Hasan Khan`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const source = getMdxSource(slug);
  if (!source) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const { prev, next } = getAdjacentProject(slug);

  return (
    <article className="pt-12 sm:pt-16 md:pt-20">
      <header className="mb-12">
        <span className="font-mono text-xs text-text-tertiary tracking-wider">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Big thumbnail */}
        <div className="mt-4 mb-6 w-full aspect-video bg-surface border border-border rounded-lg overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} thumbnail`}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-sm text-text-tertiary">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {project.description}
        </p>

        {/* Metadata grid */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md border-t border-border pt-6">
          <div>
            <span className="font-mono text-[11px] text-text-tertiary tracking-wider uppercase block mb-1">
              Period
            </span>
            <span className="font-mono text-sm text-text-primary">
              {project.period}
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-text-tertiary tracking-wider uppercase block mb-1">
              Stack
            </span>
            <span className="font-mono text-sm text-text-primary">
              {project.stack.join(", ")}
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] text-text-tertiary tracking-wider uppercase block mb-1">
              Status
            </span>
            <span className="font-mono text-sm text-text-primary">
              {project.status === "Shipped" ? "●" : "○"} {project.status}
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-6">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-secondary hover:text-hover transition-colors"
          >
            GitHub →
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-text-secondary hover:text-hover transition-colors"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </header>

      <div className="border-t border-border mb-12" />

      <div className="max-w-[65ch]">
        <Markdown source={source} />
      </div>

      <div className="border-t border-border mt-16 mb-8" />

      <nav className="flex items-center justify-between">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="font-mono text-sm text-text-secondary hover:text-hover transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="font-mono text-sm text-text-secondary hover:text-hover transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <div className="mt-8">
        <Link
          href="/work"
          className="font-mono text-xs text-text-tertiary hover:text-text-secondary transition-colors"
        >
          ← All Projects
        </Link>
      </div>
    </article>
  );
}
