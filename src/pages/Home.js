import React from "react"
import Nav from "../components/Nav"
import '../styles/index.css'

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <div>
                <h3>Just for Grownups! Build your child's learning experience</h3>
            </div>
            <Lands />
        </div> 
    )
}

export default Home