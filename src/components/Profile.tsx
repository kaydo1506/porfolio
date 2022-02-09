import React from 'react';
import { EmailOutlined, LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const Profile = () => {
    return (
        <div>
            <div className='profile-container' id='profile'>
                <div className='profile container '>
                    <img className='profile-photoID' alt='photoID' src='/imgs/photo.jpeg'></img>
                    <div className='profile-text'>
                        <h1>Ifeoma Okedo</h1>
                        <h2>Front-end Developer</h2>
                        <div className='profile-socials'>
                            <a href='mailto:okedo.ifeoma@gmail.com' target='_blank' rel='noreferrer'>
                                <EmailOutlined />
                            </a>
                            <a href='https://www.linkedin.com/in/ify-okedo-846799197/' target='_blank' rel='noreferrer'>
                                <LinkedIn />
                            </a>
                            <a href='https://github.com/kaydo1506' target='_blank' className='btn' rel='noreferrer'>
                                <GitHub />
                            </a>
                            <a href='https://twitter.com/IfyyyyO' target='_blank' className='btn' rel='noreferrer'>
                                <Twitter />
                            </a>
                        </div>
                        <p>
                            Front-End Developer with a track record of maintaining and optimising websites and user
                            interfaces. With a passion for both personal growth and for software development, I dedicate
                            hours each day learning new technologies while sharpening existing skills. Ready to apply my
                            passion for coding to a talented engineering team to develop quality solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
