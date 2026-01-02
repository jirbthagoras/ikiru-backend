import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const userSchema = pgTable("users", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  username: t.varchar().notNull(),
  email: t.varchar().notNull(),
  password: t.varchar().notNull(),
  verified: t.boolean().default(false),
  verifiedAt: t.timestamp(),
}));

export type User = InferSelectModel<typeof userSchema>;
export type NewUser = InferInsertModel<typeof userSchema>;
