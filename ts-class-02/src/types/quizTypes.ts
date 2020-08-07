export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Question = {
  question: string;
  answer: string;
  options: string[];
};

export type QuestionCardType = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
