import React from 'react';
import { EmailOutlined, LinkedIn, GitHub, Twitter } from '@mui/icons-material';

const Profile = () => {
    return (
        <div>
            <div className='profile-container' id='profile'>
                <div className='profile container '>
                    <img
                        className='profile-photoID'
                        alt='photoID'
                        src='/imgs/photo.jpeg'
                    ></img>
                    <div className='profile-text'>
                        <h1>Ifeoma Okedo</h1>
                        <h2>MERN Stack Developer</h2>
                        <div className='profile-socials'>
                            <a
                                href='mailto:okedo.ifeoma@gmail.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <EmailOutlined />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/ify-okedo-846799197/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <LinkedIn />
                            </a>
                            <a
                                href='https://github.com/kaydo1506'
                                target='_blank'
                                className='btn'
                                rel='noreferrer'
                            >
                                <GitHub />
                            </a>
                            <a
                                href='https://twitter.com/IfyyyyO'
                                target='_blank'
                                className='btn'
                                rel='noreferrer'
                            >
                                <Twitter />
                            </a>
                        </div>
                        <p>
                            Full-stack developer specialized in React and
                            NodeJS.
                            <br /> I have a track record of designing and
                            developing responsive and engaging web applications,
                            API integration and development and database design.
                            With a passion for both personal growth and for
                            software development, I dedicate hours each day
                            learning new technologies while sharpening existing
                            skills. <br /> I consider myself creative and
                            hardworking, as my stats show. If you like my
                            profile, drop me a message and we'll discuss
                            how I can be useful to your project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
