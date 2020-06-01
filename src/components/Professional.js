import React, { useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { sideNavToggle } from '../actions/setSideNav'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import ProExpCard from './subComponents/ProExpCard'

import { isMobileScrWidth } from '../util/mobileCheck'

import professional from '../content/professional.json'

import '../css/professional.css'


function Professional(props) {
    /************ STATE FROM REDUX STORE *****************/

    const dispatch = useDispatch()

    const activeComp = useSelector(state => state.activeComp)

    const sideNavOpen = useSelector(state => state.sideNavOpen)

    const isLeftSwipe = useSelector(state => state.swipeLeftEv)
    const isRightSwipe = useSelector(state => state.swipeRightEv)


    /************ LOCAL STATE INITIALIZATION ******************/
    const [cardElement, setCardElement] = useState(0)


    /******************* ANIMATION EFFECT ON ARROW CLICKS *********************/

    function nextArrowClick() {
        if (cardElement < professional.length - 1)
        {
            try {
                // Make current element exit and set up for next animation
                document.getElementById("pro-content-card").style.animation = "exitLeft 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement + 1)
                    document.getElementById("pro-content-card").style.animation = "slideFromRight 300ms ease-in forwards"
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
                document.getElementById("pro-content-card").style.animation = "exitRight 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement - 1)
                    document.getElementById("pro-content-card").style.animation = "slideFromLeft 300ms ease-in forwards"
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
        if (sideNavOpen && isMobileScrWidth())
        {
            dispatch(sideNavToggle())
        }
        else
        {
            nextArrowClick() 
        }        
    }

    if (isRightSwipe)
    {
        dispatch(resetSwipeR())
        if (cardElement === 0 && !sideNavOpen && isMobileScrWidth())
        {
            dispatch(sideNavToggle())
        }
        else
        {
            prevArrowClick() 
        }     
    }


    return (
        <div className="professional-exp-page">
            <h1 className="page-title">Professional Experience</h1>

            {/* Render the active professional experience card */}
            <ProExpCard proExpItem={professional[cardElement]} />

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(cardElement > 0 && activeComp === props.id) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(cardElement < professional.length - 1 && activeComp === props.id) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Professional
