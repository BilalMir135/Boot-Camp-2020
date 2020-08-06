import React, { useEffect, useState } from 'react';
import { getQuizDetail } from './services/quizService';
import { Question } from './types/quizTypes';
import QuestionCard from './components/QuestionCard';
import './App.css';

const App = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    const getQuizData = async () => {
      const data: Question[] = await getQuizDetail(5, 'easy');
      setQuiz(data);
      console.log(quiz);
    };
    getQuizData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    currentQuestion !== quiz.length - 1 &&
      setCurrentQuestion(currentQuestion + 1);
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
