import { table } from "console";
import {
  timestamp,
  integer,
  pgTable,
  uuid,
  boolean,
  text,
  index,
} from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());

export const EventTable = pgTable(
  "events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    durationInMinutes: integer("durationInMinutes").notNull(),
    cleckUserId: text("cleckUserId").notNull(),
    isActive: boolean("isActive").notNull().default(true),
    createdAt,
    updatedAt,
  },
  (table) => [index("cleakUserIdIndex").on(table.cleckUserId)]
);

export const ScheduleTable = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  timezone: text("timezone").notNull(),
  cleckUserId: text("cleckUserId").notNull(),
  createdAt,
  updatedAt,
});
