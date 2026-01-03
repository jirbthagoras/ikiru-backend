import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const tail = pgTable("tails", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t.integer().notNull(),
  logfileId: t.integer().notNull(),
  createdAt: t.timestamp().defaultNow(),
}));

export type Tail = InferSelectModel<typeof tail>;
export type NewTail = InferInsertModel<typeof tail>;
