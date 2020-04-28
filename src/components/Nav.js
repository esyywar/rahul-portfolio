import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

function Nav() {

    function sideNavToggle(e)
    {
        console.log("toggled")
    }

    const navLinks = [
        {
            name: "Main Page",
            text: "Summary",
            path: "/portfolio"
        },
        {
            name: "Work Experience",
            text: "Professional",
            path: "/portfolio/workexp"
        },
        {
            name: "Education",
            text: "Education",
            path: "/portfolio/edu"
        },
        {
            name: "Projects",
            text: "Projects",
            path: "/portfolio/projects"
        },
        {
            name: "Skills",
            text: "Skills",
            path: "/portfolio/techskills"
        }
    ]

    return (
        <div className="full-nav-container">
            {/* burger menu icon for opening side nav */}
            <div className="burger-icon" onClick={sideNavToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="nav-bar">  
                {/* map the navLinks array to generate nav bar route links */}          
                {navLinks.map(({ text, path}, index) => {
                    return (
                        <div key={index} className="nav-link-container">
                            <NavLink to={path} className="nav-link hover-underline">
                                {text}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav

