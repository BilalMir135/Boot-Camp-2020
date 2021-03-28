import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
  let count = useContext(CounterContext);
  return (
    <div>
      <h1>Using Conetxt</h1>
      <h2>Count: {count[0]}</h2>
      <button onClick={() => count[1](++count[0])}>Increment</button>
    </div>
  );
};

export default Child;
