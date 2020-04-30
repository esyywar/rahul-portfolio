import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

function Skills(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        const bgClr = props.bgColour
        dispatch(bgClrSwitch(props.bgColour))
        console.log("set")
    }, [props.bgColour, dispatch])

    return (
        <h1 className="page-title">Skills</h1>
    )
}

export default Skills;
