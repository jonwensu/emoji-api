import addQuestion, { Question } from "./src/lib/addQuestion";
import data from "./data.json";

type Data = typeof data;

function constructBody(pool: Data): Question[] {
  return pool.map(({ emoji, answer }) => ({
    content: emoji,
    answers: Array.isArray(answer) ? answer : [answer],
  }));
}

async function main() {
  const bodies = constructBody(data);

  // for (const body of bodies) {
  //   console.log("sending", body);
  //   await addQuestion(body);
  //   console.log("done");
  // }

  console.log("success", bodies.length);
}

main();
