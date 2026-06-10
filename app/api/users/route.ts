import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "users" });
}

export async function POST() {
  return NextResponse.json({ status: "ok", service: "users" });
}
