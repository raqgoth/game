import React from "react";
import Nav from '../components/Nav'
import '../styles/Landing.css'

const Landing = () => {
    return (
        <div className="Landing">
            <Nav />  
        
            <div className = "welcome">
            <h3> Welcome to our game!</h3>
            </div>
        </div>
    )
    
}

export default Landing