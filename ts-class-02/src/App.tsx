import React, { useEffect, useState } from 'react';
import { getQuizDetail } from './services/quizService';
import { Question } from './types/quizTypes';
import QuestionCard from './components/QuestionCard';
import './App.css';

const App = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuizData = async () => {
      const data: Question[] = await getQuizDetail(5, 'easy');
      setQuiz(data);
    };
    getQuizData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const question: Question = quiz[currentQuestion];
    if (userAns === question.answer) {
      setScore(score + 1);
    }
    if (currentQuestion !== quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Your Score = ${score}/${quiz.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  if (!quiz.length) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <QuestionCard
          options={quiz[currentQuestion].options}
          question={quiz[currentQuestion].question}
          callback={handleSubmit}
        />
      </div>
    );
  }
};

export default App;
