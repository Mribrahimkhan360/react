import {useRef} from 'react';

const App = () => {
  let firstName=useRef();
  let LastName=useRef();
  // let firstName,firstName=useRef();
  const change =  ()=>{
    let fName = firstName.value;
    let lName = LastName.value;
    alert(fName+" "+lName);
  }
  return (
    <div>
      <input type="text" name="" ref={firstName} id="" /><br/>
      <input type="text" ref={LastName} name="" id="" />
      
      {/* <input type="text" name="" ref={(a)=>firstName=a} id="" /><br/>
      <input type="text" ref={(a)=>LastName=a} name="" id="" />
       */}
      <button onClick={change}>Button</button>
    </div>
  );
};

export default App;