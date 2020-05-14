import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import professional from '../content/professional.json'

import '../css/professional.css'


function Professional(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    return (
        <div className="professional-exp-page">
            <h1 className="page-title">Professional Experience</h1>

            <div className="pro-content-card">
                
                <div className="title-and-company">
                    <h4 className="employer">{professional[0].employer}</h4>
                    <p className="job-title">{professional[0].jobTitle}</p>
                </div>

                <div className="image-container">
                    <img alt="office-building" src={require(`../img/professional/${professional[0].photo}`)} />
                </div>

                <div className="description">
                    <p className="job-exp-desc">{professional[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Professional
