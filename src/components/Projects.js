import React, { useState } from 'react'

import ProjTag from './subComponents/ProjTag'
import ProjCard from './subComponents/ProjCard'

import { useSelector, useDispatch } from 'react-redux'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import projects from '../content/projects.json'

import '../css/projects.css'


function Projects(props) {

    /************ STATE FROM REDUX STORE ******************/
    
    const dispatch = useDispatch()

    /* Used in this component to show/remove side arrows on component change */
    const activeComp = useSelector(state => state.activeComp)

    const isLeftSwipe = useSelector(state => state.swipeLeftEv)
    const isRightSwipe = useSelector(state => state.swipeRightEv)


    /**************** LOCAL STATE *****************/

    /* Initialize tag-list to all unique tags in projects */
    const [tagList, setTagList] = useState([])

    /* Active project card element */
    const [cardElement, setCardElement] = useState(0)


    /************* TAGS FROM PROJECTS *******************/

    /* Get all unique tags from projects */
    var projTags = []

    /* Filling projTags array with unique tag values from project items */
    projects.forEach((element) => {
        element.tags.forEach((element) => {
            if (!projTags.includes(element))
            {
                projTags.push(element)
            }
        })
    })


    /**************** TOGGLING THE ACTIVE TAGS ******************/

    /* Toggle the tag's being included in the tagList */
    function tagToggle(tag) {
        let newList = [...tagList]
        if (tagList.includes(tag))
        {
            newList = tagList.filter((element) => element !== tag)
        }
        else 
        {
            newList.push(tag)
        }
        setTagList(newList)
    }


    /*********** COUNT NUMBER PROJECTS WITH ACTIVE TAGS **************/

    var projCnt = 0

    /* If any tags are used to filter -> show only relevant projects. Otherwise, show all */
    if (tagList.length === 0)
    {
        projCnt = projects.length
    }
    else
    {
        projects.forEach((element) => {
            if (element.tags.some((element) => tagList.includes(element)))
            {
                projCnt++
            }
        })
    }


    /*************** ANIMATION EFFECT ON ARROW CLICKS **************/

    function nextArrowClick() {
        if (cardElement < projects.length - 1)
        {
            try {
                // Make current element exit and set up for next animation
                document.getElementById("proj-card").style.animation = "exitLeft 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement + 1)
                    document.getElementById("proj-card").style.animation = "slideFromRight 300ms ease-in forwards"
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
                document.getElementById("proj-card").style.animation = "exitRight 300ms ease-in forwards"
                setTimeout(() => {
                    setCardElement(cardElement - 1)
                    document.getElementById("proj-card").style.animation = "slideFromLeft 300ms ease-in forwards"
                }, 300)  
            } catch (error) {
                console.log(error.message)
            }
        }
    }


    /*************** FIRE ARROW CLICKS IF SWIPES RECORDED ***************/

    if (isLeftSwipe)
    {
        dispatch(resetSwipeL())
        // Left swipe action here
    }

    if (isRightSwipe)
    {
        dispatch(resetSwipeR())
        // Right swipe action here    
    }


    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>

            {/* Render the active project item card */}
            <ProjCard projItem={projects[cardElement]} />

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(cardElement > 0 && activeComp === props.id) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(cardElement + 1 < projects.length && activeComp === props.id) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}

            {/* Listing all tag items selectable by user */}
            <div className="tags-list">
                <p className="tag-prompt">Click on tags to filter projects!</p>
                {projTags.map((element, index) => {
                    return (
                        <ProjTag
                            key={index}
                            active={tagList.includes(element)} 
                            tag={element} 
                            onClick={tagToggle}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
