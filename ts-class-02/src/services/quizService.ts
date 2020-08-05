import { Quiz } from '../types/quizTypes';

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizDetail = async (
  totalQuestion: number,
  level: string
): Promise<Quiz[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}`
  );
  const { results } = await response.json();
  const quiz: Quiz[] = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};
