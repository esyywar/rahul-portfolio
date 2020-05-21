import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Redirect } from 'react-router-dom'

import '../css/title.css'


function Title() {
    // Number of bars for animation
    const numBars = 14;

    const [doRedirect, setRedirect] = useState(false)

    // On load show "enter" or "swipe" depending on user device
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    // Calling this function will create the number of bars given in props
    function makeBars(numBars) {
        var bars = []
        for (let i = 1; i < numBars + 1; i++) {
            bars[i] = (
                <div key={i} className="fill-bar" style={{gridRow: `${i} / ${i + 1}`}}></div>
            )
        }
        return bars
    }

    // Calling will start the bars animation
    function barAnimation() {
        document.getElementById("title-content").style.animation = "slideOutLeft linear 200ms forwards"
        document.getElementById("background").style.animationPlayState = "paused"

        var fillBars = document.getElementsByClassName("fill-bar")

        for (var i = 0; i < fillBars.length; i++)
        {
            fillBars[i].style.animation = "barsFillIn ease-in 600ms forwards " + (i * 50) + "ms"
        }
    }

    // Bar function called and page redirected after
    function enterSite(e) {
        barAnimation();

        setTimeout(() => setRedirect(true), numBars * 50 + 600)
    }

    
    return (
        <div className="title-page">
            <div id="background">
                {makeBars(numBars)}
            </div>
            <div id="title-content">
                <div className="profile-block">
                    <div className="name-block">
                        <div className="left-line">
                            <hr />
                        </div>
                        <h1>Rahul Eswar</h1>
                        <div className="right-line">
                            <hr />
                        </div>
                    </div>
                    <h3>Systems and Computing Engineer</h3>
                    <p>Background in Biomedical Engineering with a passion for electrical design and embedded systems. Experienced working on electronics of medical devices and researching micro-electromechanical systems.</p>
                    <h4>Toronto, Canada</h4>
                </div>

                <button className="entry-button" onClick={() => enterSite()}>
                    <h4>{isMobileDevice() ? "Swipe " : "Click "} To Enter!  <span><FontAwesomeIcon icon={faArrowRight} /></span></h4>
                </button>
                
                {// Redirect page when triggered by button press (and after delay)
                (doRedirect && <Redirect exact from="/" to="/portfolio" />)}
            </div>
        </div>
    )
}

export default Title