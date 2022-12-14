import React from 'react'
import './Navbar.scss'

const Navbar = () => (
    <nav className='nav_container'>
        <div className='nav_title'>
            <a href='#Home'>
                AnimeBinge
            </a>
        </div>
        <div className='nav_list'>
            {['Home', 'Discover', 'About Us'].map((item, index) => (
                <div key={index}>
                    <a href={`#${item}`} key={item} className='nav_link'>{item}</a>
                </div>
            ))}
            <div className='nav_signUp'><a href='#signUp'>Sign Up</a> </div>
            <div className='nav_logIn'><a href='#login'>Log In</a></div>
        </div>
    </nav>
)

export default Navbar