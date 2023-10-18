import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { groupEntries } from "./groupEntries";

export const groups = sqliteTable("groups", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
});

export const groupsRelations = relations(groups, ({ many }) => ({
  groupEntries: many(groupEntries),
}));
