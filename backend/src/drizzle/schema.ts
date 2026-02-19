// src/db/schema.ts
import { 
  pgTable, text, timestamp, uniqueIndex, boolean, 
  foreignKey, jsonb, pgEnum, integer, uuid, bigint, 
  numeric, primaryKey 
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

// Enums
export const role = pgEnum("role", ['USER', 'ADMIN'])
export const rarity = pgEnum("rarity", ['COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY', 'MYTHIC', 'IMMORTAL'])

// Users table (only permanent user data)
export const users = pgTable("users", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  firebaseUid: text().notNull().unique(),
  username: text().notNull().unique(),
  email: text().notNull().unique(),
  emailVerified: boolean().default(false).notNull(),
  displayName: text(),
  photoURL: text(),
  
  // Permanent stats (never changes during gameplay)
  level: integer().default(1).notNull(),
  totalExperience: bigint({ mode: 'bigint' }).default(BigInt(0)).notNull(), // Fixed: Add mode parameter
  gold: bigint({ mode: 'bigint' }).default(BigInt(1000)).notNull(),
  gems: integer().default(100).notNull(),
  
  // Lifetime statistics (updated after dungeon completion)
  totalPlayTime: integer().default(0).notNull(), // seconds
  totalDungeons: integer().default(0).notNull(),
  totalBossesKilled: bigint({ mode: 'bigint' }).default(BigInt(0)).notNull(),
  totalMobsKilled: bigint({ mode: 'bigint' }).default(BigInt(0)).notNull(),
  highestWave: integer().default(0).notNull(),
  highestScore: bigint({ mode: 'bigint' }).default(BigInt(0)).notNull(),
  
  // Account status
  role: role().default('USER').notNull(),
  banned: boolean().default(false),
  banReason: text(),
  banExpires: timestamp(),
  
  // Timestamps
  lastDungeonPlayed: timestamp(),
  lastLogin: timestamp(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

// User characters owned (permanent)
export const userCharacters = pgTable("user_characters", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  characterId: text().notNull(),
  unlockedAt: timestamp().defaultNow().notNull(),
  stars: integer().default(1).notNull(),
  isFavorite: boolean().default(false),
}, (table) => [
  uniqueIndex("user_characters_unique").on(table.userId, table.characterId),
]);

// User inventory (permanent items)
export const userInventory = pgTable("user_inventory", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  itemId: text().notNull(),
  quantity: integer().default(1).notNull(),
  rarity: rarity().notNull(),
  acquiredAt: timestamp().defaultNow().notNull(),
}, (table) => [
  uniqueIndex("user_inventory_unique").on(table.userId, table.itemId, table.rarity),
]);

// Dungeon completions (record of completed dungeons)
export const dungeonCompletions = pgTable("dungeon_completions", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  dungeonId: text().notNull(),
  difficulty: text().notNull(),
  wave: integer().notNull(),
  score: bigint({ mode: 'bigint' }).notNull(),
  mobsKilled: integer().notNull(),
  bossesKilled: integer().notNull(),
  duration: integer().notNull(),
  rewards: jsonb().default({}).notNull(),
  completedAt: timestamp().defaultNow().notNull(),
});

// Daily rewards claimed
export const dailyRewards = pgTable("daily_rewards", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  day: integer().notNull(),
  claimedAt: timestamp().defaultNow().notNull(),
  rewards: jsonb().default({}).notNull(),
}, (table) => [
  uniqueIndex("daily_rewards_unique").on(table.userId, table.day),
]);

// User purchases (premium currency transactions)
export const userPurchases = pgTable("user_purchases", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  productId: text().notNull(),
  amount: numeric().notNull(),
  currency: text().notNull(),
  transactionId: text().unique(),
  status: text().default('COMPLETED').notNull(),
  purchasedAt: timestamp().defaultNow().notNull(),
});

// Friends system
export const userFriends = pgTable("user_friends", {
  id: uuid().primaryKey().default(sql`gen_random_uuid()`),
  userId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  friendId: uuid().notNull().references(() => users.id, { onDelete: 'cascade' }),
  status: text().default('PENDING').notNull(),
  createdAt: timestamp().defaultNow().notNull(),
}, (table) => [
  uniqueIndex("user_friends_unique").on(table.userId, table.friendId),
]);