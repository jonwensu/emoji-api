import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { questions } from "./questions";
import { relations } from "drizzle-orm";

export const answers = sqliteTable("answers", {
  id: integer("id").primaryKey(),
  content: text("content").notNull(),
  questionId: integer("question_id").references(() => questions.id),
});

export const answersRelations = relations(answers, ({ one }) => ({
  question: one(questions, {
    fields: [answers.questionId],
    references: [questions.id],
  }),
}));
