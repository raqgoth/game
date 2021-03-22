import React from "react";
import Nav from '../components/Nav'
import '../styles/Landing.css'

const About = () => {
    return (
        <div className="about">
            <Nav />  
        
            <div className = "welcome">
            <h3> Aleph and Beyond</h3>
            <h5>Our mission</h5>
            <p>To empower students to reach their full potential and continue to develop their judaic roots and traditions </p>
            <p>To offer students multisensory methods of learning judaic studies by involving the whole child.</p>
            <p>created by parents and educators of children with learning disabilities.</p></div>
        </div>
    )
    
}

export default About