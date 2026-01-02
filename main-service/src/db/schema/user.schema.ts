import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { logFileSchema } from "./logfiles.schema";

export const userSchema = pgTable("users", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  username: t.varchar().notNull(),
  email: t.varchar().notNull(),
  password: t.varchar().notNull(),
  verified: t.boolean().default(false),
  verifiedAt: t.timestamp(),
}));

// userRelation needed so that I am not refetching the logfiles again soon.
export const userRelations = relations(userSchema, ({ many }) => ({
  logfiles: many(logFileSchema),
}));

export type User = InferSelectModel<typeof userSchema>;
export type NewUser = InferInsertModel<typeof userSchema>;
