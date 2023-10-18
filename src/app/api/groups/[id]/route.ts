import { z } from "zod";
import getGroupById from "@/lib/getGroupById";
import { NextRequest, NextResponse } from "next/server";

const paramSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

type Context = z.infer<typeof paramSchema>;

export async function GET(_request: NextRequest, context: Context) {
  const id = paramSchema.parse(context).params.id;
  const group = await getGroupById(id);

  return NextResponse.json(group);
}
