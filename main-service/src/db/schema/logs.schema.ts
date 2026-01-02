import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const logSchema = pgTable("logs", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  logfileId: t.integer().notNull(),
  userId: t.integer().notNull(),
  content: t.text().notNull(),
  createdAt: t.timestamp().defaultNow(),
}));

export type Log = InferSelectModel<typeof logSchema>;
export type NewLog = InferInsertModel<typeof logSchema>;
