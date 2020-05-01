import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { sideNavToggle } from '../actions/sideNavToggle'

import { NavLink } from 'react-router-dom'

import '../css/sideNav.css'


function SideNav(props) {
    const dispatch = useDispatch()

    let isSideNavOpen = useSelector(state => state.sideNavOpen)

    useEffect(() => {
        console.log((isSideNavOpen) ? "Its open!" : "Its closed!")
    }, [isSideNavOpen])

    return (
        <div className="navigation">
            {/* burger menu icon for opening side nav */}
            <div className="burger-icon" onClick={() => dispatch(sideNavToggle())}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        
            <div className="side-nav">
                {/* Side navigation bar - pulled open on click for mobile */}
                <div className="headshot-container">
                    {/* Headshot image put as bg in this div by sideNav.css */}
                </div>

                {/* horizontal rule divider beneath image */}
                <hr />

                <div className="profile-links">

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
        </div>
    )
}

export default SideNav
