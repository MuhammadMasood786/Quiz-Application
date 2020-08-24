import { QuizType, QuestionType } from ".././Type/quiz_type";


const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetail = async (totalQuestion: number, level: string): Promise<QuizType[]> => {

  const res =  await fetch( `https://opentdb.com/api.php?amount=${totalQuestion}&category=23&difficulty=${level}&type=multiple`);
  const { results } = await res.json();
  const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
    
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      correct_answer: questionObj.correct_answer,
      option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
    };
  });
  return quiz;
};
