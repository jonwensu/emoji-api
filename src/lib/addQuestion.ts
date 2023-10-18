import db from "@/db";
import { answers, questions } from "@/db/schema";
import { z } from "zod";

export const questionSchema = z.object({
  content: z.string(),
  answers: z.string().array().min(1),
});

export type Question = z.infer<typeof questionSchema>;

export default async function addQuestion(data: Question) {
  questionSchema.parse(data);

  const [newQuestion] = await db.insert(questions).values(data).returning();

  const answerValues = data.answers.map((answer) => ({
    content: answer,
    questionId: newQuestion.id,
  }));

  const [newAnswers] = await db
    .insert(answers)
    .values(answerValues)
    .returning({ id: answers.id, content: answers.content });

  return {
    ...newQuestion,
    answers: newAnswers,
  };
}
