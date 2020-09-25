import React from 'react';
import CounterExample from './Components/CounterExample';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Ola" />
      <CounterExample />
      <Footer/>
    </div>
  );
}

export default App;