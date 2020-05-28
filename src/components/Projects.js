import React, { useState, useEffect } from 'react'

import ProjTag from './subComponents/ProjTag'
import ProjCard from './subComponents/ProjCard'

import { useSelector, useDispatch } from 'react-redux'
import { sideNavToggle } from '../actions/setSideNav'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import projects from '../content/projects.json'

import '../css/projects.css'


function Projects(props) {

    /************ STATE FROM REDUX STORE ******************/
    
    const dispatch = useDispatch()

    /* Used in this component to show/remove side arrows on component change */
    const activeComp = useSelector(state => state.activeComp)

    const sideNavOpen = useSelector(state => state.sideNavOpen)

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


    /************** ON LOAD ANIMATION FOR TAGS ***************/

    /* Classname is used in ProjCard.js */
    useEffect(() => {
        Array.from(document.getElementsByClassName("tag-item")).forEach((element, index) => {
            element.style.animation = "slideFromRight 300ms ease-in " + (500 + index * 75) + "ms forwards"
        })
    }, [])


    /*********** FILTER PROJECTS TO SHOW ONLY THOSE WITH SELECTED TAGS **************/

    var filtProjList

    /* If any tags are used to filter -> show only relevant projects. Otherwise, show all */
    if (tagList.length === 0)
    {
        filtProjList = projects
    }
    else
    {
        filtProjList = projects.filter(element => 
            element.tags.some(tagItem => tagList.includes(tagItem))
        )
    }


    /**************** TOGGLING THE ACTIVE TAGS ******************/

    /* Toggle the tag's being included in the tagList */
    function tagToggle(tag) {
        let newTagList = [...tagList]

        if (tagList.includes(tag))
        {
            /* Removing the tag from the list */
            newTagList = tagList.filter(element => element !== tag)
        }
        else 
        {
            newTagList.push(tag)
        }

        /* If the first element changes with new list, call a transition animation */
        let newFirstProj = (projects.filter(element => element.tags.some(tagItem => newTagList.includes(tagItem))))[0]
        newFirstProj = (newFirstProj) ? newFirstProj : projects[0] 
        if (newFirstProj !== filtProjList[cardElement])
        {
            return projCardTrans(newTagList)
        }

        setCardElement(0)
        setTagList(newTagList)
    }

    /* If project card changes with tag change, use this transition animation */
    function projCardTrans(newTagList) {
        document.getElementById("proj-card").style.animation = "fallBack 500ms ease forwards"

        setTimeout(() => {
            setCardElement(0)
            setTagList(newTagList)
            document.getElementById("proj-card").style.animation = "slideFromRight 300ms ease forwards"
        }, 500)
    }


    /*************** ANIMATION EFFECT ON ARROW CLICKS **************/

    function nextArrowClick() {
        if (cardElement < filtProjList.length - 1)
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


    /*************** FIRE ARROW CLICKS AND NAV TOGGLE ON SWIPES ***************/

    if (isLeftSwipe)
    {
        dispatch(resetSwipeL())
        if (sideNavOpen)
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
        if (cardElement === 0 && !sideNavOpen)
        {
            dispatch(sideNavToggle())
        }
        else 
        {
            prevArrowClick()  
        }     
    }


    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>

            {/* Render the active project item card */}
            <ProjCard projItem={filtProjList[cardElement]} />

            {/* Display next and previous arrows only if elements exist in each direction */}
            {(cardElement > 0 && activeComp === props.id) && <span className="prev-arrow" onClick={prevArrowClick}>&#10094;</span>}
            {(cardElement + 1 < filtProjList.length && activeComp === props.id) && <span className="next-arrow" onClick={nextArrowClick}>&#10095;</span>}

            {/* Listing all tag items selectable by user */}
            <div className="tags-list">
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
