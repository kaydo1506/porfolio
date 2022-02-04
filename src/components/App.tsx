import React from 'react';
import Experience from './Experience';
import Education from './Education';
import { EmailOutlined, PhoneIphoneOutlined } from '@mui/icons-material';

import Projects from './Projects';
import SkillsQualities from './SkillsQualities';

function App() {
    return (
        <div className='App'>
            <div className='profile-container'>
                <div className='profile container '>
                    <img className='profile-photoID' alt='photoID' src='/imgs/photo.jpeg'></img>
                    <div className='profile-text'>
                        <h1>Ifeoma Okedo</h1>
                        <h2>Front-end Developer</h2>
                        <div className='profile-socials'>
                            <a href='tel:+2348185613374' target='_blank' rel='noreferrer'>
                                <PhoneIphoneOutlined />
                            </a>
                            <a href='mailto:okedo.ifeoma@gmail.com' target='_blank' rel='noreferrer'>
                                <EmailOutlined />
                            </a>
                        </div>
                        <p>
                            Front-End Developer with a track record of maintaining and optimising of websites and user
                            interfaces. With a passion for both personal growth and for software development, I dedicate
                            hours each day learning new technologies while sharpening existing skills. Ready to apply my
                            passion for coding to a talented engineering team to develop quality solutions.
                        </p>
                    </div>
                </div>
            </div>

            <Experience />
            <SkillsQualities />
            <Education />

            <Projects />
        </div>
    );
}

export default App;
