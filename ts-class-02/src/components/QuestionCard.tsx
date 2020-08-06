import React from 'react';
import { QuestionCardType } from '../types/quizTypes';

const QuestionCard: React.FC<QuestionCardType> = ({
  options,
  question,
  callback,
}) => {
  return (
    <div>
      <p>{question}</p>
      <form onSubmit={callback}>
        {options.map((item: string, index: number) => (
          <div key={index}>
            <label>
              <input type='radio' name='option' value={item} />
              {item}
            </label>
          </div>
        ))}
        <input type='submit' />
      </form>
    </div>
  );
};

export default QuestionCard;
