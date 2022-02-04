import React from 'react';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='socials-container'>
            <div className=' socials'>
                <h2>Let's Keep In Touch</h2>
                <div className='socials--link'>
                    <a
                        href='https://www.linkedin.com/in/ify-okedo-846799197/'
                        target='_blank'
                        className='btn'
                        rel='noreferrer'
                    >
                        <LinkedIn />
                    </a>
                    <a href='https://github.com/kaydo1506' target='_blank' className='btn' rel='noreferrer'>
                        <GitHub />
                    </a>
                    <a href='https://twitter.com/IfyyyyO' target='_blank' className='btn' rel='noreferrer'>
                        <Twitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
