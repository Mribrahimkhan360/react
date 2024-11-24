import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';

const App = () => {
  const btnClick=()=>{
    alert('hello world');
  }
  return (
    <div>
      <Header/>
      <Hero  item={btnClick}/>
    </div>
  );
};

export default App;