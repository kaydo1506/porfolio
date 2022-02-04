import React from 'react';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='socials-container'>
            <div className=' socials'>
                <h2>Let's Keep In Touch</h2>
                <div className='socials--link'>
                    <a href='/' target='_blank' className='btn btn--white' rel='noreferrer'>
                        <LinkedIn />
                    </a>
                    <a href='/'>
                        <GitHub />
                    </a>
                    <a href='/'>
                        <Twitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
