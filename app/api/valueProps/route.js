import { NextResponse } from "next/server";
import valueProps from "./valueProps.json";

export async function GET(request) {
  return NextResponse.json(valueProps);
}
