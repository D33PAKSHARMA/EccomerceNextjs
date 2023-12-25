import { NextRequest, NextResponse } from "next/server";

export async function POST(Request) {
  try {
    console.log("env", process.env.SERVER_PATH);
    const { name, email, password } = await Request.json();

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error.message);
  }
}
