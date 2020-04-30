import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'


function WorkExp(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])

    return (
        <h1 className="page-title">Professional Experience</h1>
    )
}

export default WorkExp
