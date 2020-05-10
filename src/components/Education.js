import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import education from '../content/education.json'

import '../css/education.css'


function Education(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])

    const testItem = education[0]

    const backImg = require(`../img/education/${testItem.photo}`)

    return (
        <div className="education-page">
            <h1 className="page-title">Education</h1>

            {/* Display card for each education item */}
            <div className="edu-item-container">

                <div className="school-and-study">
                    <p>{testItem.institution}</p>
                    <p>{testItem.degree}</p>
                </div>

                {/* Show image in center of the page */}
                <div className="image-container">
                    <img alt="Uni-of-Guelph" src={backImg} />
                </div>

                {/* Show dates and major */}
                <div className="dates-and-major">
                    
                </div>

            </div>

        </div>
    )
}

export default Education
