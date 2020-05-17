import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'
import { setTypeAnim } from '../actions/setTypeAnim'

import '../css/welcome.css'


function Welcome(props) {
    /************* REDUX STORE MANAGEMENT *******************/

    const doTypeAnim = useSelector(state => state.isTypeAnim)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    /********** TYPEWRITER ANIMATION *******************/

    // Text to display with typewriter animation
    const typeWriteItems = [
        {
            id: 0,
            charDelay: 40,
            itemDelay: 300,
            text: "My name is Rahul and I am a systems and computing engineer with a passion for electrical and embedded system design.",
            htmlId: "type-target-1"
        },
        {
            id: 1,
            charDelay: 40,
            itemDelay: 300,
            text: "Have a look around to learn more about my projects and background.",
            htmlId: "type-target-2"
        },
        {
            id: 2,
            charDelay: 40,
            itemDelay: 300,
            text: "Feel free to contact me on any social platforms :)",
            htmlId: "type-target-3"
        }
    ]

    // Used to store and clear timeout functions for type write effect
    var activeTimeouts

    function typeWriteAnim(htmlId, text, charIdx, delay) {
        try {
            // Place character at the destination
            if (text.length > 0)
            {
                document.getElementById(htmlId).innerHTML += text.charAt(charIdx)
            }
            
            // Increment charIdx and recurse if more characters to display
            if (++charIdx < text.length)
            {
                setTimeout(() => typeWriteAnim(htmlId, text, charIdx, delay), delay)
            }
        }
        catch {
            dispatch(setTypeAnim(false))
            for (let i = 0; i < 5; i++)
            {
                window.clearTimeout(i)
            }
            return
        }

    }

    function typeAnimDriver(callback) {
        // 1. Check that the html elements are rendered and animation request is set
        if ((document.getElementById(typeWriteItems[0].htmlId) != null) && doTypeAnim)
        {
            // 2. Check that html element is currently empty (otherwise this function has already been triggered)
            if (document.getElementById(typeWriteItems[0].htmlId).innerHTML === "")
            {
                var typeWriteDelay = 0;
                for (let i = 0; i < typeWriteItems.length; i++)
                {
                    let element = typeWriteItems[i]
                    setTimeout(() => typeWriteAnim(element.htmlId, element.text, 0, element.charDelay), typeWriteDelay)
                    typeWriteDelay += element.text.length * element.charDelay + element.itemDelay;
                }

                setTimeout(() => callback(), typeWriteDelay)
            }
        }
    }


    return (
        <div className="intro">
            <h1 className="page-title">Welcome</h1>
            <div className="intro-container">
                <div className="intro-desc">
                    {/* Map paragraphs that will be filled by typewrite animation */}
                    {typeWriteItems.map((element) => {
                        return (
                        <p key={element.id} id={element.htmlId} className="intro-desc-para">{!doTypeAnim && element.text}</p>
                        )
                    })}
                    {doTypeAnim && typeAnimDriver(() => dispatch(setTypeAnim(false)))}
                </div>
            </div>
        </div>
        
    )
}

export default Welcome
