import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import '../css/welcome.css'


function Welcome(props) {
    const dispatch = useDispatch()

    // Text to display with typewriter animation
    const textTypeAnim = "Feel free to contact me on any social platforms :)"

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))

        // Type writer animation call
        typeWriteAnim(textTypeAnim, 0, 40)
    }, [props.bgColour, dispatch])


    /********** TYPEWRITER ANIMATION *******************/

    function typeWriteAnim(text, charIdx, delay) {
        // Place character at the destination
        if (text.length > 0)
        {
            document.getElementById("type-target").innerHTML += text.charAt(charIdx)
        }
        
        // Increment charIdx and recurse if more characters to display
        if (++charIdx < text.length)
        {
            setTimeout(() => typeWriteAnim(text, charIdx, delay), delay)
        }
    }

    return (
        <div className="intro">
            <h1 className="page-title">Welcome</h1>
            <div className="intro-container">
                <div className="intro-desc">
                    <p>My name is Rahul and I am a systems and computing engineer with a passion for electrical and embedded system design.</p>
                    <p>Have a look around to learn more about my projects and background.</p>
                    <p id="type-target"></p>
                </div>
            </div>
        </div>
        
    )
}

export default Welcome
