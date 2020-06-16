import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer = () => {
  const [state, dispatch] = useReducer(CounterReducer, 4);
  return (
    <div>
      <h1>Using Reducer</h1>
      <h2>Count: {state}</h2>
      <button onClick={() => dispatch('INCREMENT')}>Increment</button>
    </div>
  );
};

export default ChildReducer;
