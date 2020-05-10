import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import education from '../content/education.json'

import '../css/education.css'
import { act } from 'react-dom/test-utils'


function Education(props) {

    /************ STATE MANAGEMENT FROM REDUX STORE **************/
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/
    const [activeElement, setActiveElement] = useState(0)


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    function renderActiveElement(activeElement) {
        const eduItem = education[activeElement]
        const backImg = require(`../img/education/${eduItem.photo}`)

        return (
                <div className="edu-item-container">

                <div className="school-and-study">
                    <p>{eduItem.institution}</p>
                    <p>{eduItem.degree}</p>
                </div>

                {/* Show image in center of the page */}
                <div className="image-container">
                    <img alt="Uni-of-Guelph" src={backImg} />
                </div>

                {/* Show dates and major */}
                <div className="dates-and-major">
                    <p>{eduItem.major}</p>
                    <p>{eduItem.startDate + " - " + ((eduItem.current) ? "Present" : eduItem.endDate)}</p>
                </div>
            </div>
        )
    }


    return (
        <div className="education-page">
            <h1 className="page-title">Education</h1>

            {/* Render the currently active education card */}
            {renderActiveElement(activeElement)}
        </div>
    )
}

export default Education
