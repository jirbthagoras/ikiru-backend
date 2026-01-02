import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const logSchema = pgTable("logs", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  log_files_id: t.integer().notNull(),
  user_id: t.integer().notNull(),
  content: t.text().notNull(),
  created_at: t.timestamp().defaultNow(),
}));

export type Log = InferSelectModel<typeof logSchema>;
export type NewLog = InferInsertModel<typeof logSchema>;
