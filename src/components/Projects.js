import React, { useState } from 'react'

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

    // List of tags selected to filter projects
    const [tagList, setTagList] = useState([])


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


    return (
        <div className="projects-page">
            <h1 className="page-title">Projects</h1>

            {/* Listing all tag items selectable by user */}
            <div className="tags-list">
                {projTags.map((element, index) => {
                    return (
                        <div key={index} className="tag-item">
                            <p>{element}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Projects
