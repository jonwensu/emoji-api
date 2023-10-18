import db from "@/db";

export default async function getGroups() {
  return db.query.groups.findMany({
    columns: { id: true, name: true, description: true },
  });
}
