import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Header/> //props is Parrent to child componenet
      <Hero/>
      <Footer/>
    </div>
  );
};

export default App;