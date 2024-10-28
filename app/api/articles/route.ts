import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_BASE_URL;
    
    // Define a query and target specific domains
    const query = '("video games" OR "esports" OR "console gaming" OR "pc gaming")';
    const language = "en";
    const domains = "ign.com,gamespot.com,kotaku.com,polygon.com,pcgamer.com,gamesradar.com,destructoid.com,rockpapershotgun.com,vg247.com,theverge.com,techradar.com,nme.com,gizmodo.com,inverse.com";

    
    // Set a recent date range (e.g., from the past 7 days)
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);
    const fromDateString = fromDate.toISOString().split('T')[0];

    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${language}&from=${fromDateString}&sortBy=publishedAt&domains=${domains}&apiKey=${apiKey}`
    );

    const data = await res.json();

    console.log("API Response Data:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

