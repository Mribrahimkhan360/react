import React from "react";
import Header from "./component/Header";
import Hero from "./component/hero";
import Footer from "./component/footer";

const App = () => {
  const items =['Dhaka', 'RajShai','Chottogong','Joshor']

  return (
    <div>
      <Header />
      <Hero />
      <ul>
        {
          items.map((item,i)=>{
                return <li key={i.toString()}>{item}</li>
          })
        }
      </ul>
      <Footer />
    </div>
  );
};

export default App;
