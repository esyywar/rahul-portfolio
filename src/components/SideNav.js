import React, { useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { sideNavSet, sideNavToggle } from '../actions/setSideNav'
import { setActiveComp } from '../actions/setActiveComp'

import { isMobileScrWidth } from '../util/mobileCheck'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/sideNav.css'


function SideNav(props) {    
    const dispatch = useDispatch()

    /************** LEAVE NAV OPEN IF SCREEN WIDTH > 1024PX ****************/

    useEffect(() => {
        /* Open nav when window size large enough - attach to resize event listener */
        function handleResize() {
            if (!isMobileScrWidth()) { dispatch(sideNavSet(true)) }
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => { window.removeEventListener("resize", handleResize) }
    }, [dispatch])


    /************** NAVIGATION MENU FUNCTINALITY ****************/

    /* Ref will be used for side nav for tracking if user clicks outside the nav */
    const navRef = useRef()

    /* Read state to determine if sideNav open or closed */
    let isSideNavOpen = useSelector(state => state.sideNavOpen)

    function handleScreenClick(e)
    {
        if (!navRef.current.contains(e.target) && isMobileScrWidth())
        {
            dispatch(sideNavToggle())
        }
    }

    /* useEffect to run on state change of nav open/close status */
    useEffect(() => {
        /* Animate nav open/close and burger icon on change */
        if (isSideNavOpen)
        {
            /* Give width to the side nabigation bar */
            document.getElementById("side-nav").style.width = "100%"
            document.getElementById("side-nav").classList.add("side-nav-border")

            /* Animate the burger icon, horizontal rule */
            document.getElementById("burger-icon").classList.add("burger-change")
            document.getElementById("nav-hr").style.animation = "hrFill 200ms ease 250ms forwards"
            
            /* Animate profile links to appear when nav opens */
            Array.from(document.getElementsByClassName("profile-link")).forEach((element, index) => {
                element.style.animation = "itemsAppear 400ms ease " + (250 + index * 100) + "ms forwards"
            })

            // Animate nav links to appear when nav opens
            Array.from(document.getElementsByClassName("nav-link-container")).forEach((element, index) => {
                element.style.animation = "itemsAppear 300ms ease " + (250 + index * 80) + "ms forwards" 
            })

            // Set event listener for click -> close nav if user clicks away from nav
            document.addEventListener("mousedown", handleScreenClick)
        }
        else
        {
            // Remove animations added to side navigation, burger icon, horizontal rule and profile links
            document.getElementById("side-nav").style.width = "0"
            document.getElementById("side-nav").classList.remove("side-nav-border")
            document.getElementById("burger-icon").classList.remove("burger-change")
            document.getElementById("nav-hr").style.animation = ""

            // Remove profile links animations
            Array.from(document.getElementsByClassName("profile-link")).forEach(element => {
                element.style.animation = ""
            })

            // Remove nav-link animations
            Array.from(document.getElementsByClassName("nav-link-container")).forEach(element => {
                element.style.animation = "" 
            })
        }

        return (isSideNavOpen => {
            // Callback function removes event listener for user click
            if (!isSideNavOpen) document.removeEventListener("mousedown", handleScreenClick)
        })

        // Removing here warning for useEffect dependency on handleScreenClick which must be kept outside useEffect scope
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSideNavOpen])


    /****************** NAVIGATION LINK CLICK HANDLING ********************/

    /* Linked to onClick event only for screen sizes < 1024px */
    function handleLinkClick(linkId) {
        dispatch(setActiveComp(linkId))
        if (isMobileScrWidth()) { dispatch(sideNavSet(false)) }
    }

    /* Burger icon only available for click when screen size >= 1024 px*/
    function handleBurgerClick() {
        dispatch(sideNavToggle())
    }

    
    return (
        <div className="navigation" ref={navRef}>
            {/* burger menu icon for opening side nav - dispatch state change on click */}
            <div id="burger-icon" className="burger-change" onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        
            <div id="side-nav">
                {/* Side navigation bar - pulled open on click for mobile */}
                <div className="headshot-container">
                    {/* Headshot image put as bg in this div by sideNav.css */}
                </div>

                <div className="profile-link-container">
                    <a className="profile-link" href="https://ca.linkedin.com/in/rahul-eswar?trk=pub-pbmap" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    </a>
                    <a className="profile-link" href="https://twitter.com/BringMeTandoori" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                    </a>
                    <a className="profile-link" href="https://github.com/esyywar" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fab", "github"]} size="lg"/>
                    </a>
                    <a className="profile-link" href="https://www.rahulscorner.me" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="book" size="lg"/>
                    </a>
                </div>

                {/* horizontal rule divider beneath image */}
                <hr id="nav-hr" />
                
                <div className="side-nav-link-container">
                    {/* map the navLinks array to generate nav bar route links */}          
                    {props.navLinks.map(({ id, text, path }) => {
                        return (
                            <div key={id} className="nav-link-container">
                                <h4 to={path} className="nav-link" onClick={() => handleLinkClick(id)}>{text}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SideNav
