import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from"); // IATA e.g. YHZ
  const to = searchParams.get("to"); // IATA e.g. JFK

  if (!from || !to) {
    return NextResponse.json(
      { error: "Missing from/to parameters" },
      { status: 400 }
    );
  }

  const url = `http://api.aviationstack.com/v1/flights?access_key=${process.env.AVIATIONSTACK_KEY}&dep_iata=${from}&arr_iata=${to}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
