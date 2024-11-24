import React from 'react';
const city = ['Name','Category']
const Footer = () => {
    return (
        <div>
            <p>copy right 2024</p>
            <ul>
                {
                    city.map((item,i)=>{
                        return <li key={toString()}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Footer;