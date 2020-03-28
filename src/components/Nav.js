import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

function Nav() {

    const navLinks = [
        {
            name: "Main Page",
            text: "Profile Card",
            to: "/myresume"
        },
        {
            name: "Work Experience",
            text: "Professionl Experience",
            to: "/workexp"
        },
        {
            name: "Education",
            text: "Education",
            to: "/edu"
        },
        {
            name: "Projects",
            text: "My Projects",
            to: "/projects"
        },
        {
            name: "Skills",
            text: "Technical Skills",
            to: "/techskills"
        }
    ]

    return (
        <div className="container">
            <div className="nav-bar">
                <h1>I am the navbar!</h1>
            </div>
        </div>
    )
}

export default Nav

