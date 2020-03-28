import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

function Nav() {

    const navLinks = [
        {
            name: "Main Page",
            text: "Profile Card",
            path: "/myresume"
        },
        {
            name: "Work Experience",
            text: "Professionl Experience",
            path: "/workexp"
        },
        {
            name: "Education",
            text: "Education",
            path: "/edu"
        },
        {
            name: "Projects",
            text: "My Projects",
            path: "/projects"
        },
        {
            name: "Skills",
            text: "Technical Skills",
            path: "/techskills"
        }
    ]

    return (
        <div className="nav-bar">
            {navLinks.map(({ text, path}, index) => {
                return (
                    <div className="nav-link">
                        <NavLink key={index} to={path}>
                            {text}
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Nav

