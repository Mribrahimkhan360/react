import React from "react";
import Header from "./component/Header";
import Hero from "./component/hero";
import Footer from "./component/footer";

const App = () => {
  let marks=70;
  return (
    <div>
       {(
        ()=>{
          if(marks>=80 && marks<100){
            return 'A+';
          }
          else if(marks>=70 && marks<=79){
            return 'A';
          }
          else if(marks>=60 && marks<=69){
            return 'A-';
          }
          else{
            return 'B';
          }
        }
       )()}
    {(
      ()=>{

      }
    )()}
    </div>
  );
};

export default App;
