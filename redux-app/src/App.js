import React from 'react';
import CounterInput from './components/CounterInput';
import CounterOutput from './components/CounterOutput';
import './App.css';

const App = () => {
  return (
    <div>
      <CounterOutput />
      <br />
      <CounterInput />
    </div>
  );
};

export default App;
