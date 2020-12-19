import React from 'react';

const About: React.FC = () => {
    document.title = 'weatherApp | about'
    return (
        <div className='vh-100'><br/><br/>
            <h2 className='pt-4'>About</h2>
        </div>
    );
}

export default About;
