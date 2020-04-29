import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'


function Nav(props) {
    return (
        <div className="top-nav-container">
            {/* burger menu icon for opening side nav */}
            <div className="burger-icon">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="nav-bar">  
                {/* map the navLinks array to generate nav bar route links */}          
                {props.navLinks.map(({ text, path}, index) => {
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

