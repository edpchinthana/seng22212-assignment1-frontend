import React from 'react';
import NoName from "../../data-fetch/NoName";

const About: React.FC = () => {
    document.title = 'weatherApp | about'
    return (
        <div className='min-vh-100'>
            <br/><br/>
            <h2 className='pt-4'>About</h2>
            <NoName/>
        </div>
    );
}

export default About;
