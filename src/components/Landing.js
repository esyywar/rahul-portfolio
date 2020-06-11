import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { resetSwipeU, resetSwipeD, resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import { isMobileDevice } from '../util/mobileCheck'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Redirect } from 'react-router-dom'

import { MDBBtn } from "mdbreact";

import 'mdbreact/dist/css/mdb.css' 
import '../css/landing.css'


function Landing() {

    /***************** STATE MANAGEMENT *******************/

    const dispatch = useDispatch()

    const [doRedirect, setRedirect] = useState(false)

    const isSwipeUp = useSelector(state => state.swipeUpEv)
    const isSwipeDown = useSelector(state => state.swipeDownEv)
    const isSwipeLeft = useSelector(state => state.swipeLeftEv)
    const isSwipeRight = useSelector(state => state.swipeRightEv)


    /**************** ENTER MAIN SITE BAR ANIMATION *******************/

    /* Number of bars for animation */
    const numBars = 14;

    /* Calling this function will create the number of bars given in props */
    function makeBars(numBars) {
        var bars = []
        for (let i = 1; i < numBars + 1; i++) {
            bars[i] = (
                <div key={i} className="fill-bar" style={{gridRow: `${i} / ${i + 1}`}}></div>
            )
        }
        return bars
    }

    /* Calling will start the bars animation */
    function barAnimation() {
        document.getElementById("landing-content").style.animation = "slideOutLeft linear 200ms forwards"

        var fillBars = document.getElementsByClassName("fill-bar")

        for (var i = 0; i < fillBars.length; i++)
        {
            fillBars[i].style.animation = "barsFillIn ease-in 600ms forwards " + (i * 50) + "ms"
        }
    }

    /* Bar function called and page redirected after */
    function enterSite() {
        barAnimation();

        setTimeout(() => setRedirect(true), numBars * 50 + 600)
    }


    /***************** ANIMATING DESCRIPTOR TITLES ******************/

    const titles = ["Test Engineer", "Embedded Systems Dev", "Researcher"]

    useEffect(() => {
        let delayTicks = 900

        Array.from(document.getElementsByClassName("title-item")).forEach((element, index) => {
            element.style.animation = "fadeAppear 500ms ease " + (index * 150 + delayTicks) + "ms forwards"
        })

        delayTicks += titles.length * 150

        document.getElementById("location-item").style.animation = "slideInRight 300ms ease " + (delayTicks) + "ms forwards"
    }, [titles])



    /******************* HANDLING SWIPE EVENTS (TO ENTER SITE) ********************/

    function resetAllSwipes() {
        dispatch(resetSwipeU())
        dispatch(resetSwipeD())
        dispatch(resetSwipeL())
        dispatch(resetSwipeR())
    }

    if (isSwipeUp || isSwipeDown|| isSwipeLeft || isSwipeRight)
    {
        resetAllSwipes()
        enterSite()
    }

    
    return (
        <div className="landing-page">
            {makeBars(numBars)}

            <div className="bg-photo">
                {/* Background photo placed here from css */}
            </div>

            {/* Naame-block, information and site entry button */}
            <div id="landing-content">
                <div className="profile-block">
                    <div className="name-block">
                        {/* Left and right lines here used for hover effect */}
                        <div className="left-line">
                            <hr />
                        </div>
                        <h1>Rahul Eswar</h1>
                        <div className="right-line">
                            <hr />
                        </div>
                    </div>
                    
                    {/* Mapping titles */}
                    <p>
                        {titles.map((element, index) => {
                            let output = element + ((index < titles.length - 1) ? " | " : "")
                            return (
                                <span key={index} className="title-item">{output}</span>
                            )
                        })}
                    </p>

                    <h4 id="location-item">Toronto, Canada</h4>
                </div>

                <MDBBtn className="entry-btn" color="amber" onClick={enterSite}>
                    <span>
                        {isMobileDevice() ? "Swipe " : "Click "} To Enter!
                        <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} size="lg" />
                    </span>
                </MDBBtn>
                
                {// Redirect page when triggered by button press (and after delay)
                (doRedirect && <Redirect exact from="/" to="/portfolio" />)}
            </div>
        </div>
    )
}

export default Landing