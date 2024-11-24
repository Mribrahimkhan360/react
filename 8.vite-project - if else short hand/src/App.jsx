import React from "react";
import Header from "./component/Header";
import Hero from "./component/hero";
import Footer from "./component/footer";

const App = () => {
  let marks=80;
  return (
    <div>
        <Header/>
        <Hero/>
        <Footer/>
        <p>
          { marks>80
          ?<h1>Briligent Result</h1>
          :<h1>Avarage Result</h1> }
        </p>
    </div>
  );
};

export default App;
