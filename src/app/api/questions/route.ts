import addQuestion, { questionSchema } from "@/lib/addQuestion";
import getAllQuestions from "@/lib/getAllQuestions";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const paramsSchema = z.coerce.number().min(0).max(1).optional().default(1);

export async function GET(request: NextRequest) {
  const withAnswers = paramsSchema.parse(
    request.nextUrl.searchParams.get("answers"),
  );

  const questions = await getAllQuestions(withAnswers === 1);
  return NextResponse.json(questions);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = await addQuestion(questionSchema.parse(body));

  return NextResponse.json(result);
}
