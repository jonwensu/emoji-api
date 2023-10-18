import db from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getQuestionById(id: number, withAnswers = false) {
  return db.query.questions.findFirst({
    where: eq(questions.id, id),
    ...(withAnswers && {
      with: { answers: { columns: { id: true, content: true } } },
    }),
  });
}
