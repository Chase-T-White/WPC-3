import { NextResponse } from "next/server";
import services from "./services.json";

export async function GET(request) {
  return NextResponse.json(services);
}
