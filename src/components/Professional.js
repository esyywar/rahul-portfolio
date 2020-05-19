import React, { useState, useEffect} from 'react'

import ProExpCard from './subComponents/ProExpCard'

import { useDispatch } from 'react-redux'
import { setActiveComp } from '../actions/setActiveComp'

import professional from '../content/professional.json'

import '../css/professional.css'


function Professional(props) {

    /************ STATE MANAGEMENT FROM REDUX STORE **************/
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveComp(props.id))
    }, [props.id, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/
    const [activeElement, setActiveElement] = useState(0)


    /******************* ANIMATION EFFECT ON ARROW CLICKS *********************/

    function nextArrowClick() {
        // Make current element exit and set up for next animation
        document.getElementById("pro-content-card").style.animation = "exitLeft 300ms ease-in forwards"
        setTimeout(() => {
            setActiveElement(activeElement + 1)
            document.getElementById("pro-content-card").style.animation = "slideFromRight 300ms ease-in forwards"
        }, 300)
    }

    function prevArrowClick() {
        document.getElementById("pro-content-card").style.animation = "exitRight 300ms ease-in forwards"
        setTimeout(() => {
            setActiveElement(activeElement - 1)
            document.getElementById("pro-content-card").style.animation = "slideFromLeft 300ms ease-in forwards"
        }, 300)   
    }



    return (
        <div className="professional-exp-page">
            <h1 className="page-title">Professional Experience</h1>

            {/* Render the active professional experience card */}
            <ProExpCard proExpItem={professional[activeElement]} />

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(activeElement > 0) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(activeElement + 1 < professional.length) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Professional
