import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setActiveComp } from '../actions/setActiveComp'

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

    // Change background colour on render and animate buttons to appear
    useEffect(() => {
        dispatch(setActiveComp(props.id))
    }, [props.id, dispatch])


    /************ LOCAL STATE INITIALIZATION ******************/

    // Enum for active window state
    const windows = {
        MENU: "MENU",
        HWTOOLS: "HWTOOLS",
        PLANGS: "PLANGS",
        SWTOOLS: "SWTOOLS"
    }
    Object.freeze(windows)

    // State of active window switching between skill components
    const [activeWnd, setActiveWnd] = useState(windows.MENU)

    // State of page title to be displayed
    const [pageTitle, setPageTitle] = useState("Technical Skills")


    /************ DATA ARRAY OF SUB-COMPONENTS TO BE LINKED **************/
    const skillComponents = [
        {
            id: 0,
            Component: HWTools,
            btnColour: "primary",
            faIcon: "plug",
            wndName: windows.HWTOOLS,
            wndTitle: "Hardware Tools"
        },
        {
            id: 1,
            Component: SWTools,
            btnColour: "amber",
            faIcon: "tools",
            wndName: windows.SWTOOLS,
            wndTitle: "Software Tools"
        },
        {
            id: 2,
            Component: CodeLangs,
            btnColour: "deep-orange",
            faIcon: "keyboard",
            wndName: windows.PLANGS,
            wndTitle: "Progamming"
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
                <MDBBtn size="lg" color="mdb-color" className="back-btn slide-right" onClick={backToMenu}>Back to Menu</MDBBtn>
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
        setActiveWnd(windows.MENU)
        setPageTitle("Technical Skills")
    }


    return (
        <div className="skills-page">
            <h1 className="page-title">{pageTitle}</h1>

            <div className="skills-content">
                {/* Mapping skill component items accessible from menu buttons */}
                {skillComponents.map(({ id, Component, wndName }) => {
                    return (
                        (activeWnd === wndName) && (
                            <div key={id} className="skill-entrance-animation">
                                <Component />
                            </div>
                        )
                    )
                })}

                {/* Render menu screen if active window is menu */}
                {(activeWnd === "MENU") && (
                <div className="menu-screen">
                    {/* Mapping buttons to skill components on menu screen */}
                    {skillComponents.map(({ id, btnColour, faIcon, wndTitle }) => {
                        return (
                            <div key={id} className="btn-container">
                                <MDBBtn className="menu-btn" color={btnColour} onClick={() => handleBtnClick(id)}>
                                        <span><FontAwesomeIcon icon={faIcon} size="lg" /> {wndTitle}</span>
                                </MDBBtn>
                            </div>
                        )
                    })}
                </div>)}
            </div>

            <div className="skills-footer">
                {skillsFooter(activeWnd)}
            </div>
        </div>
    )
}

export default Skills;
