import React from 'react';
import { useSelector } from 'react-redux';

const CounterOutput = () => {
  const counter = useSelector((state) => state.counter);
  /*  const obj = useSelector((state) => ({ counter: state.counter, name: state.name })); */
  return <div>Counter = {counter}</div>;
};

export default CounterOutput;
