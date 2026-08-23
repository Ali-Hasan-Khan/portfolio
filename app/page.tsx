import Hero from "@/components/Hero";
import ContributionGraph from "@/components/ContributionGraph";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="mt-8 border-t border-border pt-6">
        <span className="font-mono text-xs text-text-tertiary tracking-wider uppercase">
          Contributions
        </span>
        <div className="mt-6">
          <ContributionGraph />
        </div>
      </section>
    </div>
  );
}
