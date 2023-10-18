import { z } from "zod";
import getQuestionsByGroupId from "@/lib/getQuestionsByGroupId";
import { NextRequest, NextResponse } from "next/server";

const paramSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

const queryParamsSchema = z.coerce.number().min(0).max(1).optional().default(1);

type Context = z.infer<typeof paramSchema>;

export async function GET(request: NextRequest, context: Context) {
  const id = paramSchema.parse(context).params.id;
  const withAnswers =
    queryParamsSchema.parse(request.nextUrl.searchParams.get("answers")) === 1;
  const questions = await getQuestionsByGroupId(id, withAnswers);

  return NextResponse.json(questions);
}
