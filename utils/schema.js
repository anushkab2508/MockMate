import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const mockmate = pgTable("mockmate", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExp: varchar("jobExp").notNull(),
  CreatedBy: varchar("CreatedBy").notNull(),
  CreatedAt: varchar("CreatedAt").notNull(),
  mockId: varchar("mockId").notNull(),
});

export const UserAnswer = pgTable("UserAnswer", {
  id: serial("id").primaryKey(),
  mockIdRef: varchar("mockId").notNull(),
  question: varchar("question").notNull(),
  correctAns: text("correctAns"),
  userAns: text("userAns"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});
