import React from "react";

const Hero = (props) => {
  return (
    <div>
      <ul>
        <li onClick={props.item}>click me</li>
      </ul>
    </div>
  );
};

export default Hero;
