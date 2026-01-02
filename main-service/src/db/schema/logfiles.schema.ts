import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { userSchema } from "./user.schema";

export const logFileSchema = pgTable("logfiles", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t
    .integer()
    .notNull()
    .references(() => userSchema.id),
  name: t.varchar().notNull(),
  description: t.text().notNull(),
  createdAt: t.timestamp().defaultNow(),
}));

export const logFileRelations = relations(logFileSchema, ({ one }) => ({
  user: one(userSchema, {
    fields: [logFileSchema.userId],
    references: [userSchema.id],
  }),
}));

export type LogFile = InferSelectModel<typeof logFileSchema>;
export type NewLogFile = InferInsertModel<typeof logFileSchema>;
