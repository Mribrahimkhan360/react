import React from 'react';
import Hero from './component/Hero';


const App = () => {
  const ItemObj = {
    name: 'Ibrahim Khan',
    age: 17,
    city: 'Dhaka'
  }
  return (
    <div>
      <Hero item={ItemObj}/>
    </div>
  );
};

export default App;