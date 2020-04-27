import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

function Nav() {

    const navLinks = [
        {
            name: "Main Page",
            text: "Summary",
            path: "/myresume"
        },
        {
            name: "Work Experience",
            text: "Experience",
            path: "/workexp"
        },
        {
            name: "Education",
            text: "Education",
            path: "/edu"
        },
        {
            name: "Projects",
            text: "Projects",
            path: "/projects"
        },
        {
            name: "Skills",
            text: "Skills",
            path: "/techskills"
        }
    ]

    return (
        <div className="full-nav-container">
            <div className="nav-bar">            
                {navLinks.map(({ text, path}, index) => {
                    return (
                        <div className="nav-link-container">
                            <NavLink key={index} to={path} className="nav-link">
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

