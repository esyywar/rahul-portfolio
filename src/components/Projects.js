import React, { useState } from 'react'

import ProjTag from './subComponents/ProjTag'

import { useSelector, useDispatch } from 'react-redux'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import projects from '../content/projects.json'

import '../css/projects.css'


function Projects(props) {

    /************ STATE FROM REDUX STORE ******************/
    
    const dispatch = useDispatch()

    // Used in this component to show/remove side arrows on component change
    const activeComp = useSelector(state => state.activeComp)

    const isLeftSwipe = useSelector(state => state.swipeLeftEv)
    const isRightSwipe = useSelector(state => state.swipeRightEv)


    /************* TAGS FROM PROJECTS *******************/

    // Get all unique tags from projects
    var projTags = []

    // Filling projTags array with unique tag values from project items
    projects.forEach((element) => {
        element.tags.forEach((element) => {
            if (!projTags.includes(element))
            {
                projTags.push(element)
            }
        })
    })    

    // Initialize tag-list to all unique tags in projects
    const [tagList, setTagList] = useState([])


    /*********** COUNT NUMBER PROJECTS WITH ACTIVE TAGS **************/

    var projCnt = 0

    // If any tags are used to filter -> show only relevant projects. Otherwise, show all
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


    /********* FIRE ARROW CLICKS IF SWIPES RECORDED ***************/

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


    // Toggle the tag's being included in the tagList
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


    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>

            <div className="proj-counter">
                <h4>{projCnt}</h4>
            </div>

            {/* Listing all tag items selectable by user */}
            <div className="tags-list">
                <h4 className="tag-prompt">Click on tags to filter projects!</h4>
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
