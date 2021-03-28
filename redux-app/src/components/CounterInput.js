import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from '../Action';

const CounterInput = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <button onClick={() => dispatch({ type: 'INCREMENT', payload: { value: 5 } })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: { value: 5 } })}>-</button> */}
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <button onClick={() => dispatch(decrementAction())}>-</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
  );
};

export default CounterInput;
