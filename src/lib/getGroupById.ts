import db from "@/db";
import { groups } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getGroupById(id: number) {
  return db.query.groups.findFirst({
    where: eq(groups.id, id),
  });
}
