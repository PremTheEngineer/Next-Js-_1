import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json(
      { error: "Missing endpoint" },
      { status: 400 },
    );
  }

  const response = await fetch(endpoint, {
    headers: {
      "User-Agent": "Mozilla/5.0", // important for Swiggy
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch Swiggy data" },
      { status: response.status },
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
