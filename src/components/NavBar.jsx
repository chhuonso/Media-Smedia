import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                <h3 className='text-light'><i className="fa fa-camera-retro"></i>Media Smedia</h3>
                <div className='nav-links text-light'>
                    <Link className='text-light' to='/'>Home</Link> |
                    <Link className='text-light' to='/images/show'>Gallery</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar