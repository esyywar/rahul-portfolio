import React, { useState} from 'react'

import { useSelector } from 'react-redux'

import ProExpCard from './subComponents/ProExpCard'

import professional from '../content/professional.json'

import '../css/professional.css'


function Professional(props) {

    /************ STATE FROM REDUX STORE *****************/

    const activeComp = useSelector(state => state.activeComp)


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
            {(activeElement > 0 && activeComp === props.id) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(activeElement + 1 < professional.length && activeComp === props.id) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}
        </div>
    )
}

export default Professional
