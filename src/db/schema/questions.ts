import { relations } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { groupEntries } from "./groupEntries";
import { answers } from "./answers";

export const questions = sqliteTable("questions", {
  id: integer("id").primaryKey(),
  content: text("content").notNull(),
});

export const questionsRelations = relations(questions, ({ many }) => ({
  answers: many(answers),
  groupEntries: many(groupEntries),
}));
