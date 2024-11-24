import React from 'react';

const Hero = (props) => {
    return (
        <div>
           <p>{props.title}</p>
           <p>{props.des}</p>
        </div>
    );
};

export default Hero;