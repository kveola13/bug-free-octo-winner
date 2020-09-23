import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Ola" />
      <CounterExample />
    </div>
  );
}

export default App;