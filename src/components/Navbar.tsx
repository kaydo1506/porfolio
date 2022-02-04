import React from 'react';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

const Navbar = () => (
    <>
        <div className='nav'>
            <Link to='profile' activeClass='active' spy={true} smooth={true}>
                Profile
            </Link>

            <Link to='experience' spy={true} smooth={true}>
                Experience
            </Link>

            <Link to='portfolio' spy={true} smooth={true}>
                Portfolio
            </Link>
        </div>
        <div>
            <label>&nbsp;</label>
        </div>
    </>
);
export default Navbar;
