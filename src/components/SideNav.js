import React from 'react'

import { NavLink } from 'react-router-dom'

import '../css/sideNav.css'


function SideNav(props) {
    return (
        <div className="side-nav">
            {/* Side navigation bar - pulled open on click for mobile */}
            <div className="headshot-container">
                <img src="" alt="rahul-headshot" className="headshot" />
            </div>
            <hr />

            <div className="profile links">

            </div>
            
            <div className="side-nav-link-container">
                {/* map the navLinks array to generate nav bar route links */}          
                {props.navLinks.map(({ id, text, path }) => {
                    return (
                        <div key={id} className="nav-link-container">
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

export default SideNav
