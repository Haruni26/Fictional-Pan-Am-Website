import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const key = process.env.AVIATIONSTACK_KEY;

  if (!key) {
    console.error("AVIATIONSTACK_KEY is missing");
    return NextResponse.json(
      { error: "Server API key not configured" },
      { status: 500 }
    );
  }

  const url = `http://api.aviationstack.com/v1/flights?access_key=${key}&dep_iata=${from}&arr_iata=${to}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
