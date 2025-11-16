import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSQLite3({ url: process.env.DATABASE_URL });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "js",
  adapter: () => Promise.resolve(adapter),
});
