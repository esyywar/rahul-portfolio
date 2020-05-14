import React, { useState, useEffect} from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import professional from '../content/professional.json'

import '../css/professional.css'


function Professional(props) {

    /************ STATE MANAGEMENT FROM REDUX STORE **************/
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/
    const [activeElement, setActiveElement] = useState(0)


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    // Called by 'makeProExpCard' to display date
    function dateDisplay(proExpItem)
    {
        if (proExpItem.current)
        {
            return (
                <p style={{color: "#2cf54e"}}>{proExpItem.startDate + " - Present"}</p>
            )
        }
        else
        {
            return (
                <p>{proExpItem.startDate + " - " + proExpItem.endDate}</p>
            )
        }
    }


    function makeProExpCard(activeElement)
    {
        const proExpItem = professional[activeElement]
        const proCardImg = require(`../img/professional/${proExpItem.photo}`)

        return (
            <div className="pro-content-card">      
                <div className="title-loc-and-company">
                    <h4 className="employer">{proExpItem.employer}</h4>
                    <p className="job-title">{proExpItem.jobTitle}</p>
                    <p className="location">{`${proExpItem.city}, ${proExpItem.country}`}</p>
                </div>

                <div className="image-container">
                    <img alt="office-building" src={proCardImg} />
                </div>

                <div className="date-and-description">
                    <h4 className="date">{dateDisplay(proExpItem)}</h4>
                    <p className="job-exp-desc">{proExpItem.description}</p>
                </div>
            </div>
        )
    }





    return (
        <div className="professional-exp-page">
            <h1 className="page-title">Professional Experience</h1>

            {/* Render the active professional experience card */}
            {makeProExpCard(activeElement)}
        </div>
    )
}

export default Professional
