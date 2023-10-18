import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  strict: false,
  schema: "./src/db/schema",
  out: "./drizzle/migrations",
  driver: "libsql",
  breakpoints: true,
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
  },
} satisfies Config;
