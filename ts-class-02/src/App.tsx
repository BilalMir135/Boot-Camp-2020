import React, { useEffect, useState } from 'react';
import { getQuizDetail } from './services/quizService';
import { Quiz } from './types/quizTypes';
import './App.css';

const App = () => {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  useEffect(() => {
    const getQuizData = async () => {
      const data: Quiz[] = await getQuizDetail(5, 'easy');
      setQuiz(data);
      console.log(quiz);
    };
    getQuizData();
  }, []);

  return (
    <div>
      <h1>Hello React TS</h1>
    </div>
  );
};

export default App;
