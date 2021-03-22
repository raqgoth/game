import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const NavBar = () => {
    return (    
            <nav className='navbar navbar-expand-sm bg-dark'>
           <div className="container">
            <div className="row row-cols-4">
            <NavLink exact to='/' >
                Home
            </NavLink>
            <NavLink exact to='/about'>
                    About us
            </NavLink>
            <NavLink exact to='/remote' >
                Remote Learning
            </NavLink>
            
            </div>
            </div>
            </nav>
     
        
    )
    
}

export default NavBar   