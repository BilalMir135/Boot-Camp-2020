import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './MediaCard';
import pic from './images/pic_01.jfif';
import Gate from './Gate';

function Hello() {
  return <div>Hello Bilal!</div>;
}

function HelloBold() {
  return (
    <div>
      Hello <strong>Bilal</strong>
    </div>
  );
}

function List() {
  return (
    <div>
      <h5>Ordered List</h5>
      <ol>
        <li>Karachi</li>
        <li>Lahore</li>
        <li>Islamabad</li>
      </ol>
    </div>
  );
}

function JSX() {
  return <p className='dummyClass'>Sum = {10 + 5}</p>;
}

function App() {
  return (
    <div>
      <Hello />
      <HelloBold />
      <List />
      <JSX />
      <MediaCard
        title='React'
        body='React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
        imageUrl={pic}
      />
      <Gate isOpen={false} />
    </div>
  );
}

export default App;
