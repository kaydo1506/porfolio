import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <>
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Projects'>Portfolio</Link>
        </div>
        <div>
            <label>&nbsp;</label>
        </div>
    </>
);
export default Navbar;
