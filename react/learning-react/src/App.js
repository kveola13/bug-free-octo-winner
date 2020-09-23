import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name="Ola" />
      <CounterExample />
    </div>
  );
}

export default App;