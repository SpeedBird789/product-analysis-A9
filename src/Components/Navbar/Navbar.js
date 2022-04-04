import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
       <div>
            <nav className='navbar'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blogs'>Blogs</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            {/* <a href="">Home</a>
            <a href="">Reviews</a>
            <a href="">Dashboard</a>
            <a href="">Blogs</a>
            <a href="">About</a> */}
        </nav>
       </div>
    );
};

export default Navbar;