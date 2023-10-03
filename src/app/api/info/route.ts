import { NextResponse } from "next/server";

export async function GET() {
  // const { searchParams } = new URL(request.url)
  const res = {
    title: "Soma",
    button_text: "Click!",
    v0: "0",
  };

  return NextResponse.json(res);
}
