export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-start lg:items-end pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-16 lg:pb-20">
      {/* ── Name (wall of type) ──────────────────────────── */}
      <div>
        <h1 className="font-display font-bold text-text-primary tracking-tight leading-[0.9] text-[clamp(2.75rem,8vw,7.5rem)]">
          ALI HASAN
          <br />
          KHAN
        </h1>
      </div>

      {/* ── Value statement + metadata + CTAs ─────────────── */}
      <div className="flex flex-col gap-8">
        <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
          Backend engineer building distributed systems in{" "}
          <span className="text-text-primary font-medium">Go</span> and{" "}
          <span className="text-text-primary font-medium">TypeScript</span>.
        </p>

        <div className="flex items-center gap-3 font-mono text-xs text-text-tertiary tracking-wider">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-text-primary opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-text-primary" />
            </span>
            Available for work
          </span>
          <span aria-hidden="true" className="text-border">
            /
          </span>
          <span>IST (UTC+5:30)</span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:alihasank86@gmail.com"
            className="group/link inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 w-fit"
          >
            <span className="relative">
              Email
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-text-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
            </span>
            <span className="text-text-tertiary group-hover/link:text-text-primary transition-colors duration-200 group-hover/link:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
          <a
            href="https://github.com/Ali-Hasan-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 w-fit"
          >
            <span className="relative">
              GitHub
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-text-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
            </span>
            <span className="text-text-tertiary group-hover/link:text-text-primary transition-colors duration-200 group-hover/link:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
