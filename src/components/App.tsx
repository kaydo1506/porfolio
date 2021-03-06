import React from 'react';
import Navbar from './Navbar';
import Experience from './Experience';
import Education from './Education';
import Profile from './Profile';

import Projects from './Projects';
import SkillsQualities from './SkillsQualities';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Profile />
            <Experience />
            <SkillsQualities />
            <Education />

            <Projects />
            <div className='copyright'>
                <p>Ify Okedo &#169; 2022</p>
            </div>
        </div>
    );
}

export default App;
