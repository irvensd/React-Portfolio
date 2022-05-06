import React, { useState } from 'react';
import Project from "./Project";
import { capitalizeFirstLetter } from '../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'trax',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://aneslin.github.io/trax-crypto-stock-tracker/",
            repo: "https://github.com/aneslin/trax-crypto-stock-tracker"
        },
        {
            name: 'gadget',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://group9-grab-gadget.herokuapp.com/",
            repo: "https://github.com/aneslin/grab-and-go-gadgets"
        },
        {
            name: 'personalinfolocker',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://sleepy-cove-57890.herokuapp.com/",
            repo: "https://github.com/Zacharycampanelli/Personal_Info_Locker"
        },

        {
            name: 'run-buddy',
            description: 'HTML/CSS',
            link: "https://irvensd.github.io/run-buddy/",
            repo: "https://github.com/irvensd/run-buddy"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://irvensd.github.io/weather-dashboard/",
            repo: "https://github.com/irvensd/weather-dashboard"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://irvensd.github.io/password-generator/",
            repo: "https://github.com/irvensd/password-generator"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://irvensd.github.io/Work-Day-scheduler/",
            repo: "https://github.com/irvensd/Work-Day-scheduler"
        },
        {
            name: 'taskmaster-pro',
            description: 'HTML/CSS/JavaScript',
            link: "https://irvensd.github.io/taskmaster-pro/",
            repo: "https://github.com/irvensd/taskmaster-pro"
        },
        {
            name: 'git-it-done',
            description: 'HTML/Bootstrap/JavaScript',
            link: "https://irvensd.github.io/git-it-done/",
            repo: "https://github.com/irvensd/git-it-done"
        },

    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;