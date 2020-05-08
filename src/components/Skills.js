import React, { useState, useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import CodeLangs from './subComponents/CodeLangs'
import SWTools from './subComponents/SWTools'
import HWTools from './subComponents/HWTools'

import { MDBBtn } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/skills.css'
import 'mdbreact/dist/css/mdb.css' 


function Skills(props) {

    /************ STATE MANAGEMENT FROM REDUX STORE **************/

    const dispatch = useDispatch()

    // Change background colour on render
    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/

    // State of active window switching between skill components
    const [activeWnd, setActiveWnd] = useState("MENU")

    // State of page title to be displayed
    const [pageTitle, setPageTitle] = useState("Technical Skills")


    /************ DATA ARRAY OF SUB-COMPONENTS TO BE LINKED **************/

    const skillComponents = [
        {
            id: 0,
            Component: HWTools,
            btnColour: "primary",
            faIcon: "plug",
            wndName: "HWTOOLS",
            wndTitle: "Hardware"
        },
        {
            id: 1,
            Component: CodeLangs,
            btnColour: "deep-orange",
            faIcon: "keyboard",
            wndName: "PLANGS",
            wndTitle: "Coding"
        },
        {
            id: 2,
            Component: SWTools,
            btnColour: "amber",
            faIcon: "tools",
            wndName: "SWTOOLS",
            wndTitle: "Software Tools"
        }
    ]


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    // Render back button or user prompt depending on active window state
    function skillsFooter(activeWnd) {
        if (activeWnd === "MENU")
        {
            return (
                <p className="slide-left">Click on a category to see my skill profile!</p>
            )
        }
        else
        {
            return (
                <MDBBtn size="lg" color="mdb-color" className="slide-right" onClick={backToMenu}>Back to Menu</MDBBtn>
            )
        }
    }

    // Handle user clicking on menu button
    function handleBtnClick(id) {
        var clickedSkill = skillComponents.find(element => element.id === id)
        setActiveWnd(clickedSkill.wndName)
        setPageTitle(clickedSkill.wndTitle)
    }

    function backToMenu() {
        setActiveWnd("MENU")
        setPageTitle("Technical Skills")
    }


    return (
        <div className="skills-page">
            <h1 className="page-title">{pageTitle}</h1>

            <div className="skills-content">
                {/* Mapping CSS Transitions to skill component items accessible from menu buttons */}
                {skillComponents.map(({ id, Component, wndName }) => {
                    return (
                        <CSSTransition 
                            key={id}
                            in={activeWnd === wndName}
                            timeout={500}
                            classNames="skills-component-transition"
                            exit={false}
                            unmountOnExit
                        >
                            <Component />
                        </CSSTransition>
                    )
                })}

                {/* Creating main skill menu screen with button links to other components */}
                <CSSTransition 
                    in={activeWnd === "MENU"}
                    timeout={500}
                    classNames="skills-menu-transition"
                    exit={false}
                    unmountOnExit
                >
                    <div className="menu-screen">
                        {/* Mapping buttons to skill components on skill menu screen */}
                        {skillComponents.map(({ id, btnColour, faIcon, wndTitle }) => {
                            return (
                                <div key={id} className="btn-container">
                                    <MDBBtn color={btnColour} onClick={() => handleBtnClick(id)}>
                                         <span><FontAwesomeIcon icon={faIcon} size="lg" /> {wndTitle}</span>
                                    </MDBBtn>
                                </div>
                            )
                        })}
                    </div>
                </CSSTransition>
            </div>

            <div className="skills-footer">
                {skillsFooter(activeWnd)}
            </div>
        </div>
    )
}

export default Skills;
