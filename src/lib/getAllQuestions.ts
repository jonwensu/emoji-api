import db from "@/db";

export default async function getAllQuestions(withAnswers = false) {
  return db.query.questions.findMany({
    ...(withAnswers && {
      with: { answers: { columns: { id: true, content: true } } },
    }),
  });
}
