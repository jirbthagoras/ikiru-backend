import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { logfile } from "./logfiles.schema";

export const user = pgTable("users", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  username: t.varchar().notNull(),
  email: t.varchar().notNull(),
  password: t.varchar().notNull(),
  verified: t.boolean().default(false),
  verifiedAt: t.timestamp(),
}));

// userRelation needed so that I am not refetching the logfiles again soon.
export const userRelations = relations(user, ({ many }) => ({
  logfiles: many(logfile),
}));

export type User = InferSelectModel<typeof user>;
export type NewUser = InferInsertModel<typeof user>;
