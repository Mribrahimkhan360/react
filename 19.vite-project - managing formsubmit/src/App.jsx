import {useRef} from 'react';

const App = () => {
  const formFun = (event) => {
    event.preventDefault();
  };
  let myHead=useRef();
 

 const change=()=>{
  myHead.current.innerHTML=`<ul>
  <li>list a</li>
  <li>list b</li>
  </ul>`;
 }
 // eslint-disable-next-line no-undef
 //disable
  return (
    <div>
      <h1 ref={(h1)=>myHead=h1}>Form Valiadition</h1>
      <form onSubmit={formFun}>
        <input type="text" placeholder="Enter text" />
        <button type="submit" onClick={change}>Submit</button>
      </form>
    </div>
  );
};

export default App;
