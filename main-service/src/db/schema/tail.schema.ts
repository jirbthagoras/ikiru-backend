import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const tailSchema = pgTable("tails", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: t.integer().notNull(),
  log_file_id: t.integer().notNull(),
  created_at: t.timestamp().defaultNow(),
}));

export type Tail = InferSelectModel<typeof tailSchema>;
export type NewTail = InferInsertModel<typeof tailSchema>;
