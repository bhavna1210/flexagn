import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'rgb(9, 104, 247)' : 'black'
        }
    }

    return (
        <>
            <nav>
                <div id='navbar'>
                    <div className='logo'>
                        Flexagn
                    </div>
                    <div className='navMenu'>
                        <ul>
                            <li><NavLink to='/' style={navLinkStyles}>Home</NavLink></li>
                            <li><NavLink to='/about' style={navLinkStyles}>About</NavLink></li>
                            <li><a>Pricing</a></li>
                            <li><a>Teacher Login</a></li>
                            <li><a>Parenet Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav