import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import EduCard from './subComponents/EduCard'

import education from '../content/education.json'

import '../css/education.css'


function Education(props) {

    /************ STATE FROM REDUX STORE **********************/

    const dispatch = useDispatch()

    // Used in this component to show/remove side arrows on component change
    const activeComp = useSelector(state => state.activeComp)

    const isLeftSwipe = useSelector(state => state.swipeLeftEv)
    const isRightSwipe = useSelector(state => state.swipeRightEv)


    /************ LOCAL STATE INITIALIZATION ******************/
    const [cardElement, setCardElement] = useState(0)


    /******************* ANIMATION EFFECT ON ARROW CLICKS *********************/

    function nextArrowClick() {
        if (cardElement < education.length - 1)
        {
            try {
                // Make current element exit and set up for next animation
                document.getElementById("edu-item-container").style.animation = "exitLeft 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement + 1)
                    document.getElementById("edu-item-container").style.animation = "slideFromRight 300ms ease-in forwards"
                }, 300)
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    function prevArrowClick() {
        if (cardElement > 0)
        {
            try {
                document.getElementById("edu-item-container").style.animation = "exitRight 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement - 1)
                    document.getElementById("edu-item-container").style.animation = "slideFromLeft 300ms ease-in forwards"
                }, 300)  
            } catch (error) {
                console.log(error.message)
            }
        } 
    }


    /********* FIRE ARROW CLICKS IF SWIPES RECORDED ***************/

    if (isLeftSwipe)
    {
        dispatch(resetSwipeL())
        nextArrowClick()        
    }

    if (isRightSwipe)
    {
        dispatch(resetSwipeR())
        prevArrowClick()        
    }


    return (
        <div className="education-page">
            <h1 className="page-title">Education</h1>

            {/* Render the currently active education card */}
            <EduCard eduItem={education[cardElement]}/>

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(cardElement > 0 && activeComp === props.id) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(cardElement + 1 < education.length && activeComp === props.id) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Education
