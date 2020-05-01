import React from 'react'

import { useDispatch } from 'react-redux'
import { sideNavToggle } from '../actions/sideNavToggle'

import { NavLink } from 'react-router-dom'

import '../css/navbar.css'


function Nav(props) {
    
    // TODO - render side nav depending on sideNavOpen state
    const dispatch = useDispatch()

    return (
        <div className="top-nav-container">
            {/* burger menu icon for opening side nav */}
            <div className="burger-icon" onClick={() => dispatch(sideNavToggle())}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="nav-bar">  
                {/* map the navLinks array to generate nav bar route links */}          
                {props.navLinks.map(({ id, text, path}) => {
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

export default Nav

