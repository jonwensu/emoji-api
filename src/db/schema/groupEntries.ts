import { sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { groups } from "./groups";
import { questions } from "./questions";
import { relations } from "drizzle-orm";

export const groupEntries = sqliteTable("group_entries", {
  id: integer("id").primaryKey(),
  groupId: integer("group_id").references(() => groups.id),
  questionId: integer("question_id").references(() => questions.id),
});

export const groutEntriesRelations = relations(groupEntries, ({ one }) => ({
  group: one(groups, {
    fields: [groupEntries.groupId],
    references: [groups.id],
  }),
  question: one(questions, {
    fields: [groupEntries.questionId],
    references: [questions.id],
  }),
}));
