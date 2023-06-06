import { NextResponse } from "next/server";
import testimonials from "./testimonials.json";

export async function GET(request) {
  return NextResponse.json(testimonials);
}
