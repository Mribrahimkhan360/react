import {useRef} from 'react';

const App = () => {
  const formFun = (event) => {
    event.preventDefault();
  };
  let myHead=useRef();
 

 const change=()=>{
  myHead.current.innerText="Hello";
 }
  return (
    <div>
      <h1 ref={myHead}>Form Valiadition</h1>
      <form onSubmit={formFun}>
        <input type="text" placeholder="Enter text" />
        <button type="submit" onClick={change}>Submit</button>
      </form>
    
    </div>
  );
};

export default App;
