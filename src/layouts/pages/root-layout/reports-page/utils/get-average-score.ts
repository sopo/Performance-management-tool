import { Answer } from "@/types/types";

export const getAverageScore = (answers: Answer[]) => {
    if(!answers || answers === undefined){
        return
    }
    const validScores = answers.filter((answer) => answer.score !== null && answer.score !== undefined);
    const scores = validScores.map((answer) => answer.score);
    const sum = scores.reduce((acc: number, score: number | null | undefined) => {
      return acc + (score || 0); // Safely add score, defaulting to 0 if it's null or undefined
    }, 0);
  
    const average = scores.length > 0 ? sum / scores.length : 0;
  
    return average;
  };
  