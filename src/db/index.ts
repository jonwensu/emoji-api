import { createClient } from "@libsql/client";
import { Environment } from "@/environment";
import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/libsql";

const env = Environment();

const client = createClient({
  url: env.TURSO_DB_URL,
  authToken: env.TURSO_DB_AUTH_TOKEN,
});

export default drizzle(client, { schema });
