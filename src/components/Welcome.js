import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setTypeAnim } from '../actions/setTypeAnim'

import '../css/welcome.css'


function Welcome(props) {
    /************* REDUX STORE MANAGEMENT *******************/

    const doTypeAnim = useSelector(state => state.isTypeAnim)

    const dispatch = useDispatch()


    /********** TYPEWRITER ANIMATION CONTENT *******************/

    // Text to display with typewriter animation - Place all list items at start, paragraphs at end
    const typeWriteItems = [
        {
            id: 0,
            charDelay: 40,
            itemDelay: 200,
            text: "Electrical Circuit Design",
            htmlId: "type-target-1",
            listItem: true,
            color: "red"
        },
        {
            id: 1,
            charDelay: 40,
            itemDelay: 200,
            text: "Embedded Sytems Dev",
            htmlId: "type-target-2",
            listItem: true,
            color: "blue"
        },
        {
            id: 3,
            charDelay: 40,
            itemDelay: 200,
            text: "UI/UX Design",
            htmlId: "type-target-3",
            listItem: true,
            color: "green"
        },
        {
            id: 4,
            charDelay: 40,
            itemDelay: 200,
            text: "Front End Web Dev",
            htmlId: "type-target-4",
            listItem: true,
            color: "black"
        },
        {
            id: 5,
            charDelay: 40,
            itemDelay: 200,
            text: "Have a look around to learn more about my projects and background.",
            htmlId: "type-target-5",
            listItem: false
        },
        {
            id: 6,
            charDelay: 40,
            itemDelay: 200,
            text: "Feel free to contact me on any social platforms :)",
            htmlId: "type-target-6",
            listItem: false
        }
    ]


    /*************** TYPEWRITER ANIMATION FUNCTIONS ****************/

    // Used to store and clear timeout functions for type write effect
    var timeoutIds = []

    // Apply the typewriter animation
    function typeWriteAnim(htmlId, text, charIdx, delay) {
        try {
            // Place character at the destination
            if (text.length > document.getElementById(htmlId).innerHTML.length)
            {
                document.getElementById(htmlId).innerHTML += text.charAt(charIdx)
            }
            
            // Increment charIdx and recurse if more characters to display
            if (++charIdx < text.length)
            {
                let id = setTimeout(() => typeWriteAnim(htmlId, text, charIdx, delay), delay)
                timeoutIds.push(id)
            }
        }
        catch {
            dispatch(setTypeAnim(false))
            for (let i = 0; i < timeoutIds.length; i++)
            {
                window.clearTimeout(timeoutIds[i])
            }
            return
        }

    }

    // Call this function to drive the typeWriter animation performed by function above - Give callback as arguement
    function typeAnimDriver(callback) {
        var typeWriteDelay = 0;

        // 2. Check that the html elements are rendered and animation request is set
        if ((document.getElementById(typeWriteItems[0].htmlId) != null) && doTypeAnim)
        {
            // 3. Check that html element is currently empty (otherwise this function has already been triggered)
            if (document.getElementById(typeWriteItems[0].htmlId).innerHTML === "")
            {
                
                for (let i = 0; i < typeWriteItems.length; i++)
                {
                    let element = typeWriteItems[i]
                    let id = setTimeout(() => typeWriteAnim(element.htmlId, element.text, 0, element.charDelay), typeWriteDelay)
                    timeoutIds.push(id)
                    typeWriteDelay += element.text.length * element.charDelay + element.itemDelay;
                }
            }

            // 4. When all animations complete, fire callback (set animation request OFF in redux store)
            setTimeout(() => callback(), typeWriteDelay)
        }
    }


    /************** MOBILE CHECK FUNCTION FOR SWIPE ARROW **********************/

    // On load show "enter" or "swipe" depending on user device
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    // Conditional render of swipe arrow depending on if mobile client platform
    function showSwipeArrow(isDisplay) {
        if (isDisplay) {
            // Apply bounce animation after entrance animation time    
            let id = setTimeout(() => {
                try {
                    document.getElementById("swipe-arrow-container").style.animation = "swipeBounce 2s linear infinite alternate-reverse"
                }
                catch { 
                    clearTimeout(id) 
                }
            }, 1000)

            return (
                <div id="swipe-arrow-container">
                    <p>Swipe Up!</p>
                    <div className="swipe-arrow">&#10095;</div>
                </div>
            )
        }
    }


    return (
        <div id="intro-page">
            <h1 className="page-title name-header">RAHUL ESWAR</h1><hr />
            <div className="intro-container">
                    {/* Typewriter animated list items */}
                    <ul className="desc-list">
                        {typeWriteItems
                            .filter((element) => {
                                return element.listItem
                            })
                            .map((element) => {
                                return (
                                    <li 
                                        key={element.id} 
                                        id={element.htmlId}
                                        style={{color: element.color}}
                                    >
                                        {!doTypeAnim && element.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                    {/* Typewriter animated paragraph items */}
                    <div className="desc-paras">
                        {typeWriteItems
                            .filter((element) => {
                                return !element.listItem
                            })
                            .map((element) => {
                                return (
                                    <p 
                                        key={element.id} 
                                        id={element.htmlId} 
                                        className={element.listItem ? "intro-desc-list" : "intro-desc-para"}
                                    >
                                        {!doTypeAnim && element.text}
                                    </p>
                                )
                            })
                        }
                    </div>

                    {/* Call animation driver if first render - callback to change animation state */}
                    {doTypeAnim && typeAnimDriver(() => dispatch(setTypeAnim(false)))}

                    {/* Swipe up arrow to display for mobile devices */}
                    {showSwipeArrow(isMobileDevice())}
            </div>
        </div>
    )
}

export default Welcome
