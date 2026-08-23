"use client";

import { useEffect, useMemo, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
}

interface Week {
  days: ContributionDay[];
}

function getColor(count: number, max: number): string {
  if (count === 0) return "var(--border)";
  const ratio = Math.min(count / max, 1);
  const grey = Math.round(30 + ratio * 225);
  return `rgb(${grey}, ${grey}, ${grey})`;
}

export default function ContributionGraph() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [total, setTotal] = useState(0);
  const [hovered, setHovered] = useState<ContributionDay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        if (data.weeks) {
          setWeeks(data.weeks);
          setTotal(Number(data.total) || 0);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const maxCount = useMemo(() => {
    let max = 0;
    for (const week of weeks) {
      for (const day of week.days) {
        if (day.count > max) max = day.count;
      }
    }
    return max || 1;
  }, [weeks]);

  return (
    <div className="w-full">
      {/* Header: total */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-sm text-text-primary font-medium">
          {loading ? "—" : total.toLocaleString()} contributions in the past year
        </span>
      </div>

      {/* Hover tooltip */}
      <div className="h-5 mb-2">
        {hovered && (
          <span className="font-mono text-xs text-text-secondary">
            {hovered.count} contribution{hovered.count !== 1 ? "s" : ""} on{" "}
            {new Date(hovered.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        )}
      </div>

      {/* Contribution grid */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="inline-flex gap-[3px] min-w-max">
          {loading ? (
            <div className="flex gap-[3px]">
              {Array.from({ length: 52 }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, d) => (
                    <div
                      key={d}
                      className="w-[10px] h-[10px] rounded-sm bg-surface animate-pulse"
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.days.map((day, di) => (
                  <div
                    key={di}
                    className="w-[10px] h-[10px] rounded-sm cursor-pointer transition-all duration-100 hover:ring-1 hover:ring-text-secondary"
                    style={{ backgroundColor: getColor(day.count, maxCount) }}
                    onMouseEnter={() => setHovered(day)}
                    onMouseLeave={() => setHovered(null)}
                    title={`${day.count} contributions`}
                  />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
