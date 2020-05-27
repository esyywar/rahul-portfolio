import React, { useState, useEffect } from 'react'

import CodeLangs from './subComponents/CodeLangs'
import SWTools from './subComponents/SWTools'
import HWTools from './subComponents/HWTools'

import { MDBBtn } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/skills.css'
import 'mdbreact/dist/css/mdb.css' 


function Skills(props) {

    /************ LOCAL STATE INITIALIZATION ******************/

    /* Enum for active window state */
    const skillComps = {
        MENU: "MENU",
        HWTOOLS: "HWTOOLS",
        PLANGS: "PLANGS",
        SWTOOLS: "SWTOOLS"
    }
    Object.freeze(skillComps)

    /* State of active window switching between skill components */
    const [activeWnd, setActiveWnd] = useState(skillComps.MENU)

    /* State of page title to be displayed */
    const [pageTitle, setPageTitle] = useState("Technical Skills")


    /************ DATA ARRAY OF SUB-COMPONENTS TO BE LINKED **************/
    const skillComponents = [
        {
            id: 0,
            Component: HWTools,
            btnColour: "primary",
            faIcon: "plug",
            wndName: skillComps.HWTOOLS,
            wndTitle: "Hardware Tools"
        },
        {
            id: 1,
            Component: SWTools,
            btnColour: "amber",
            faIcon: "tools",
            wndName: skillComps.SWTOOLS,
            wndTitle: "Software Tools"
        },
        {
            id: 2,
            Component: CodeLangs,
            btnColour: "deep-orange",
            faIcon: "keyboard",
            wndName: skillComps.PLANGS,
            wndTitle: "Progamming"
        }
    ]


    /********************** ENTRANCE ANIMATION ***********************/

    useEffect(() => {
        Array.from(document.getElementsByClassName("menu-btn")).forEach((element, index) => {
            element.style.animation = "slideFromBtm 300ms ease-in " + (300 + index * 100) + "ms forwards"
        })
    }, [])


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    /* Render back button or user prompt depending on active window state */
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

    /* Handle user clicking on menu button */
    function handleBtnClick(id) {
        var clickedSkill = skillComponents.find(element => element.id === id)
        setActiveWnd(clickedSkill.wndName)
        setPageTitle(clickedSkill.wndTitle)
    }

    function backToMenu() {
        setActiveWnd(skillComps.MENU)
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
