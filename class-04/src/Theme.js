import React, { useState } from 'react';
import './App.css';

function Theme() {
  const [light, setLight] = useState(true);
  let [temp, setTemp] = useState(22);
  return (
    <div className={`container ${light ? 'light' : 'dark'}`}>
      <div>
        <button onClick={() => setLight(true)}>ON</button>
        <button onClick={() => setLight(false)}>OFF</button>
        <h3>Light Status : {light ? 'lit' : 'dark'}</h3>
      </div>
      <div>
        <h3>
          Temperature : {temp}
          <sup>o</sup>C
        </h3>
        <button onClick={() => setTemp(++temp)}>+</button>
        <button onClick={() => setTemp(--temp)}>-</button>
      </div>
    </div>
  );
}

export default Theme;
