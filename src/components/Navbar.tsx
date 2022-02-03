import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='nav'> 
    <Link to='/'>Home</Link>
    <Link to='/Contact'>Contact</Link>
    <Link to='/Projects'>Projects</Link>
  </div>
 
)
export default Navbar;
