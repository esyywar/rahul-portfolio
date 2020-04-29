import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'


function WorkExp(props) {
    // Update background colour state on render
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    })

    return (
        <h1 className="page-title">Professional Experience</h1>
    )
}

export default WorkExp
