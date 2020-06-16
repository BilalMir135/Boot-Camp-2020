import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import CounterContext from './components/CounterContext';

function App() {
  let countState = useState(2);
  return (
    <div className='App'>
      <CounterContext.Provider value={countState}>
        <Parent />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
