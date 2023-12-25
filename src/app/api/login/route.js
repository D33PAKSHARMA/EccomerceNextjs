import { NextRequest, NextResponse } from "next/server";

export async function POST(Request) {
  try {
    const { email, password } = await Request.json();

    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.log(error.message);
  }
}
