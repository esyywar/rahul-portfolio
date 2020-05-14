import React, { useState, useEffect } from 'react'

import EduCard from './subComponents/EduCard'

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
            <EduCard eduItem={education[activeElement]}/>

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(activeElement > 0) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(activeElement + 1 < education.length) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Education
