import React from 'react';

const Hero = () => {
    return (
        <div>
           <img src="https://rabbil.com/files/rabbilVai.png" alt="" />
           <p>{new Date().getTime()}</p>
           <a href="" onClick={()=>alert("Hello")}>click</a>
           <p style={
            {color:'red',
            fontSize: '40px'
            }
           }>font style</p>
        </div>
    );
};

export default Hero;