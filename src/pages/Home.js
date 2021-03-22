import React from "react"
import GuideNav from "../components/GuideNav"
import Nav from "../components/Nav"


const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <div>
                <h2>Aleph and Beyond</h2>
                <h5>For students to continue their Judaic Learning experience</h5>
            </div>
            <GuideNav />
        </div> 
    )
}

export default Home