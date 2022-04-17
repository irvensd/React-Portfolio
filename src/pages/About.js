import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (

        
        <div className="masthead text-center text-black d-flex">
            <div className="container my-auto">
                <div className="row">
                    
                    <div className="col-lg-10 mx-auto">

                    <header>Hello, I'm <h1><span className="orange">Irvens Dupuy</span></h1></header>
        <h2>I'm a full stack</h2><h1 className="developer"> <span className="orange">developer</span></h1>
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">
                            
                        Highly motivated software developer specializing in building and designing exceptional digital experiences.. Constantly seeking out inovating solutions to everyday problems.
                        I am recently earning a Certificate in Full Stack Web Development from the University of University of Connecticut, where I developed skills in MERN Stack and SQL Server.</p>
                    
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/portfolio">Check Out My Work</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About