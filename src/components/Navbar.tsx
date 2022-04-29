import { Link } from 'react-scroll';

// import { Link } from 'react-router-dom';

const Navbar = () => (
    <>
        <div className='nav'>
            <Link
                to='profile'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-35}
            >
                Profile
            </Link>

            <Link to='experience' spy={true} smooth={true} offset={-35}>
                Experience
            </Link>

            <Link to='portfolio' spy={true} smooth={true} offset={-35}>
                Portfolio
            </Link>
        </div>
        <div>
            <label>&nbsp;</label>
        </div>
    </>
);
export default Navbar;
