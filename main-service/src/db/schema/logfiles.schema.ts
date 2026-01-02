import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const logFileSchema = pgTable("logfiles", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t.integer().notNull(),
  name: t.varchar().notNull(),
  description: t.text().notNull(),
  createdAt: t.timestamp().defaultNow(),
}));

export type LogFile = InferSelectModel<typeof logFileSchema>;
export type NewLogFile = InferInsertModel<typeof logFileSchema>;
