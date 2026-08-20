import { projects } from "@/lib/projects";
import { experiences } from "@/lib/experience";
import ProjectRow from "@/components/ProjectRow";

export const metadata = {
  title: "Work | Ali Hasan Khan",
  description: "Experience and selected projects.",
};

export default function WorkPage() {
  return (
    <section>
      <header className="mb-12 md:mb-16 pt-12 sm:pt-16 md:pt-20">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
          Work
        </h1>
        <p className="mt-3 text-text-secondary text-base md:text-lg max-w-lg">
          Experience and selected projects.
        </p>
      </header>

      <div className="mb-16">
        <h2 className="font-mono text-[11px] text-text-tertiary tracking-widest uppercase mb-6">
          Experience
        </h2>

        <div>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="py-6 border-b border-border first:border-t"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[48px_1fr_200px] gap-3 lg:gap-8 items-start">
                <span className="font-mono text-xs text-text-tertiary tabular-nums hidden lg:block pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {exp.role}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed max-w-2xl"
                      >
                        <span className="font-mono text-text-tertiary mt-1 text-[10px] select-none">
                          /
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile: period */}
                  <div className="mt-3 flex items-center gap-3 lg:hidden">
                    <span className="font-mono text-xs text-text-tertiary tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {exp.stack.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-text-tertiary tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop: period */}
                <div className="hidden lg:flex flex-col items-end gap-1 text-right">
                  <span className="font-mono text-xs text-text-tertiary tracking-wider">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="font-mono text-[11px] text-text-tertiary tracking-widest uppercase mb-6">
          Projects
        </h2>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
