import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: Request) {
  return NextResponse.json({ 
    success: true,
    message: "Please use the client-side EmailJS implementation"
  });
}