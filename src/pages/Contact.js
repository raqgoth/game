import React from "react";
import Nav from '../Components/Nav'

const Contact = () => {
    return (
        <div>
            <Nav />
            <article>
                <div class="row g-0">
                    <div class="col-md-2">
                    </div>
                    <div class="card-body">
                        <h5 className="header-about">Contact Information</h5>
                        <p className="card-text"> 
                            Name: Raquel Gothardt 
                        </p>
                        <p className="card-text">
                            email: raquelgothardt@gmail.com
                        </p>
                        
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Contact