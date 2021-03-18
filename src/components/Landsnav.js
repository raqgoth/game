import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const LandsNav = () => {
    return (    
            <nav className='navbar navbar-expand-sm bg-dark'>
           <div className="container">
            <div className="row row-cols-4">
            <NavLink exact to='/create lands'>
                   Create Lands
            </NavLink>
            
            <NavLink exact to='/Update lands'>
                    Update Lands
            </NavLink>
            <NavLink exact to='/Delete lands'>
                    Delete Lands
            </NavLink>
                
           
            <NavLink exact to='/' >
                Home
            </NavLink>
            </div>
            </div>
            </nav>
     
        
    )
    
}

export default LandsNav