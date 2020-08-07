import React, { useState } from 'react';
import { QuestionCardType } from '../types/quizTypes';

const QuestionCard: React.FC<QuestionCardType> = ({
  options,
  question,
  callback,
}) => {
  let [selectedAns, setSelectedAns] = useState('');
  const handleChange = (e: any) => {
    setSelectedAns(e.target.value);
  };
  return (
    <div>
      <p>{question}</p>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        {options.map((item: string, index: number) => (
          <div key={index}>
            <label>
              <input
                type='radio'
                name='option'
                required
                checked={selectedAns === item}
                value={item}
                onChange={handleChange}
              />
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
