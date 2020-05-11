import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import education from '../content/education.json'

import '../css/education.css'


function Education(props) {

    /************ STATE MANAGEMENT FROM REDUX STORE **************/
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/
    const [activeElement, setActiveElement] = useState(0)


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    // Called yb 'renderEduItem' to display date
    function dateDisplay(eduItem)
    {
        if (eduItem.current)
        {
            return (
                <p style={{color: "#2cf54e"}}>{eduItem.startDate + " - Present"}</p>
            )
        }
        else
        {
            return (
                <p>{eduItem.startDate + " - " + eduItem.endDate}</p>
            )
        }
    }

    // Called by 'renderEduItem' to show degree field
    function displayDegree(eduItem)
    {
        if (eduItem.abbrevDegree)
        {
            return (
                <p>{eduItem.degree + " - " + eduItem.abbrevDegree}</p>
            )
        }
        else
        {
            return (
                <p>{eduItem.degree}</p>
            )
        }
    }

    // Renders the active education element to DOM
    function renderEduItem(activeElement) {
        const eduItem = education[activeElement]
        const backImg = require(`../img/education/${eduItem.photo}`)

        return (
                <div id="edu-item-container">

                <div className="school-and-date">
                    <p>{eduItem.institution}</p>

                    {/* Show date differently depending on if current or not */}
                    {dateDisplay(eduItem)}
                </div>

                {/* Show image in center of the page */}
                <div className="image-container">
                    <img alt="Uni-of-Guelph" src={backImg} />
                </div>

                {/* Show dates and major */}
                <div className="degree-and-major">
                    {displayDegree(eduItem)}
                    {eduItem.major && <p>{eduItem.major}</p>}
                    {eduItem.allocades && <p style={{color: "orange"}}>{eduItem.allocades[0]}</p>}
                </div>
            </div>
        )
    }


    /******************* ANIMATION EFFECT ON ARROW CLICKS *********************/

    function nextArrowClick() {
        // Make current element exit and set up for next animation
        document.getElementById("edu-item-container").style.animation = "exitLeft 300ms ease-in forwards"
        setTimeout(() => {
            setActiveElement(activeElement + 1)
            document.getElementById("edu-item-container").style.animation = "slideFromRight 300ms ease-in forwards"
        }, 300)
    }

    function prevArrowClick() {
        document.getElementById("edu-item-container").style.animation = "exitRight 300ms ease-in forwards"
        setTimeout(() => {
            setActiveElement(activeElement - 1)
            document.getElementById("edu-item-container").style.animation = "slideFromLeft 300ms ease-in forwards"
        }, 300)   
    }


    return (
        <div className="education-page">
            <h1 className="page-title">Education</h1>

            {/* Render the currently active education card */}
            {renderEduItem(activeElement)}

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(activeElement > 0) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(activeElement + 1 < education.length) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Education
