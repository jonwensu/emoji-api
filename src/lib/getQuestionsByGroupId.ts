import db from "@/db";
import { groups } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getQuestionsByGroup(
  groupId: number,
  withAnswer = false,
) {
  const result = await db.query.groups.findFirst({
    where: eq(groups.id, groupId),
    with: {
      groupEntries: {
        with: {
          question: {
            columns: { id: true, content: true },
            ...(withAnswer && {
              with: { answers: { columns: { id: true, content: true } } },
            }),
          },
        },
      },
    },
  });

  if (!result) {
    return null;
  }

  const { groupEntries, ...rest } = result;
  return {
    ...rest,
    questions: groupEntries.map(({ question }) => question),
  };
}
