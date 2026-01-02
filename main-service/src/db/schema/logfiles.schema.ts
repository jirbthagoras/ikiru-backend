import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { user } from "./user.schema";

export const logfile = pgTable("logfiles", (t) => ({
  id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t
    .integer()
    .notNull()
    .references(() => user.id),
  name: t.varchar().notNull(),
  description: t.text().notNull(),
  createdAt: t.timestamp().defaultNow(),
}));

export const logFileRelations = relations(logfile, ({ one }) => ({
  user: one(user, {
    fields: [logfile.userId],
    references: [user.id],
  }),
}));

export type LogFile = InferSelectModel<typeof logfile>;
export type NewLogFile = InferInsertModel<typeof logfile>;
