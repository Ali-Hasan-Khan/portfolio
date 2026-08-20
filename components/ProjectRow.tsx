import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="py-6 lg:py-7 border-b border-border first:border-t">
      <Link
        href={`/work/${project.slug}`}
        className="group block transition-colors duration-150 hover:bg-surface -mx-4 px-4 lg:-mx-0 lg:px-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[48px_1fr_200px] gap-3 lg:gap-8 items-baseline">
          {/* Index number */}
          <span className="font-mono text-xs text-text-tertiary tabular-nums hidden lg:block pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="min-w-0">
            {/* Big thumbnail */}
            <div className="mb-4 w-full aspect-video max-w-md bg-surface border border-border rounded-md overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  width={640}
                  height={360}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-xs text-text-tertiary">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary tracking-tight group-hover:translate-x-2 transition-transform duration-200 ease-out">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Mobile: year + status */}
            <div className="mt-3 flex items-center gap-3 lg:hidden">
              <span className="font-mono text-xs text-text-tertiary tracking-wider">
                {project.period}
              </span>
              <span className="font-mono text-xs text-text-tertiary">
                {project.status === "Shipped" ? "●" : "○"} {project.status}
              </span>
            </div>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-text-tertiary tracking-wide"
                >
                  {tag}
                </span>
              ))}
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-text-tertiary tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: year + status */}
          <div className="hidden lg:flex flex-col items-end gap-1 text-right">
            <span className="font-mono text-xs text-text-tertiary tracking-wider tabular-nums">
              {project.period}
            </span>
            <span className="font-mono text-xs text-text-tertiary">
              {project.status === "Shipped" ? "●" : "○"} {project.status}
            </span>
          </div>
        </div>
      </Link>

      {/* Mobile: demo/github buttons */}
      <div className="mt-4 flex items-center gap-4 lg:hidden">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          Github
        </Link>
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Docs
          </Link>
        )}
      </div>
    </div>
  );
}
