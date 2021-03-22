import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const GuideNav = () => {
    return (    
            <nav className='navbar navbar-expand-sm bg-dark'>
           <div className="container">
            <div className="row row-cols-4">
            <NavLink exact to='/caregivers'>
                   Caregivers
            </NavLink>
            <NavLink exact to='/student'>
                   Students
            </NavLink>

            </div>
            </div>
            </nav>
     
        
    )
    
}

export default GuideNav