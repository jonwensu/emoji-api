import { NextResponse } from "next/server";
import getAllGroups from "@/lib/getAllGroups";

export async function GET() {
  const groups = await getAllGroups();
  return NextResponse.json(groups);
}
