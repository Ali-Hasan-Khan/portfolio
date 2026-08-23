import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Ali-Hasan-Khan";
const GITHUB_API = "https://api.github.com/graphql";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface Week {
  days: ContributionDay[];
}

async function fetchContributions(token: string): Promise<{ total: number; weeks: Week[] }> {
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - 364);

  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: GITHUB_USERNAME,
        from: startDate.toISOString(),
        to: now.toISOString(),
      },
    }),
    next: { revalidate: 86400 },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  const cal =
    data.data.user.contributionsCollection.contributionCalendar;

  const total = cal.totalContributions;

  const weeks = cal.weeks.map(
    (week: { contributionDays: { date: string; contributionCount: number }[] }) => ({
      days: week.contributionDays.map(
        (day: { date: string; contributionCount: number }) => ({
          date: day.date,
          count: day.contributionCount,
          level: getLevel(day.contributionCount),
        })
      ),
    })
  );

  return { total, weeks };
}

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN" },
      { status: 500 }
    );
  }

  try {
    const result = await fetchContributions(token);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
