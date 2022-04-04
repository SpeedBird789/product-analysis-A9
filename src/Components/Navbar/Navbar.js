import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
       <div>
            <nav className='navbar'>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/reviews'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
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