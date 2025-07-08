import {
  timestamp,
  integer,
  pgTable,
  uuid,
  boolean,
  text,
  index,
  pgEnum,
} from "drizzle-orm/pg-core";
import { DAYS_OF_WEEK_IN_ORDER } from "../constants";
import { relations } from "drizzle-orm";

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
  table => [index("cleakUserIdIndex").on(table.cleckUserId)]
);

export const ScheduleTable = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  timezone: text("timezone").notNull(),
  cleckUserId: text("cleckUserId").notNull(),
  createdAt,
  updatedAt,
});

export const scheduleRelations = relations(ScheduleTable, ({ many }) => ({
  availabilities: many(ScheduleAvailanilityTable),
}));

export const scheduleDayOfWeekEnum = pgEnum("day", DAYS_OF_WEEK_IN_ORDER);

export const ScheduleAvailanilityTable = pgTable(
  "scheduleAvailabilities",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    scheduleId: uuid("scheduleId")
      .notNull()
      .references(() => ScheduleTable.id, { onDelete: "cascade" }),
    startTime: text("startTime").notNull(),
    endTime: text("endTime").notNull(),
    dayOfWeek: scheduleDayOfWeekEnum("dayOfWeek").notNull(),
  },
  table => [index("scheduleIdIndex").on(table.scheduleId)]
);

export const ScheduleAvailabilityRelations = relations(
  ScheduleAvailanilityTable,
  ({ one }) => ({
    schedule: one(ScheduleTable, {
      fields: [ScheduleAvailanilityTable.scheduleId],
      references: [ScheduleTable.id],
    }),
  })
);
