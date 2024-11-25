import {useRef} from 'react';

const App = () => {
  let myImg=useRef();

  const change =  ()=>{
    myImg.current.src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
    myImg.current.setAttribute('height','200px')
    myImg.current.setAttribute('width','300')
  }
  return (
    <div>
      <img ref={myImg} src="https://wiki.tripwireinteractive.com/TWIimages/4/47/Placeholder.png" alt="" />
      <button onClick={change}>Button</button>
    </div>
  );
};

export default App;