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
            
            <h5>Why Aleph and Beyond</h5>
            <p>Students have multiple ways of learning. Every student learns a different way. Students have multiple intelligences.
                Students need to be actively engaged in their learning. The child will be able to tap into his/her prior knowledge and the learning experiences will be relatable to them. 
                Aleph and Beyond offers multiple ways of engagement, multiple ways of instruction and multiple ways of expression, for students to tap into their learning intelligence.
                  </p>
            <h5>How? </h5>
            <p>Children learn through play and building social experiences.</p>
            
            
           <h5>Our Story </h5>
               <p>We are parents and educators of children with learning disabilities.</p></div>
        </div>
    )
    
}

export default About