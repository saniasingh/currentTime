import React, { useState } from 'react';
import { ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';
import currentTime from "./components/time";

function App() {

 setInterval(TIME, 1000);

 const now = new Date().toLocaleString();
 
 const [time, setTime] = useState(now)

 function TIME() {
  const newTime = new Date().toLocaleString();
  return setTime(newTime);
 }

  return (
    <div className='App'>
      <h1>{time}</h1>
      <button type='button' className='btn btn-primary' onClick={TIME}>Show Time</button>
    </div>
  )
}

export default App;
