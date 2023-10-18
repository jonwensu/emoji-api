import { z } from "zod";
import "dotenv/config";

export const envSchema = z.object({
  TURSO_DB_URL: z.string(),
  TURSO_DB_AUTH_TOKEN: z.string(),
});

export const Environment = () => envSchema.parse(process.env);
