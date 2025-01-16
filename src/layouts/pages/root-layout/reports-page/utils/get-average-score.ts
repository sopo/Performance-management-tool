import { Answer } from "@/types/types";
import mean from "lodash/mean";
export const getAverageScore = (answers: Answer[]) => {
  if (!answers || answers === undefined) {
    return;
  }
  const validAnswers = answers.filter(
    (answer) => answer.score !== null && answer.score !== undefined,
  );
  const scores = validAnswers.map((answer) => answer.score);

  const average = mean(scores);

  return average;
};
