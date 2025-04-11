import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 })
  }
  
  try {
    // GitHub GraphQL API query to fetch contribution data
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `
    
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    
    const data = await response.json()
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }
    
    const calendarData = data.data.user.contributionsCollection.contributionCalendar
    const totalCount = calendarData.totalContributions
    
    // Flatten the contribution data
    const contributions = calendarData.weeks.flatMap((week: any) => 
      week.contributionDays.map((day: any) => day.contributionCount)
    )
    
    return NextResponse.json({ contributions, totalCount })
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub contributions' }, { status: 500 })
  }
} 