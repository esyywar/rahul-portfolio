import React, { useState } from 'react'

import SkillsMenu from './subComponents/SkillsMenu'
import CodeLangs from './subComponents/CodeLangs'
import SWTools from './subComponents/SWTools'
import HWTools from './subComponents/HWTools'

import { useSelector, useDispatch } from 'react-redux'
import { resetSwipeL, resetSwipeR } from '../actions/touchEventSet'
import { sideNavToggle } from '../actions/setSideNav'

import { MDBBtn } from "mdbreact";

import { isMobileScrWidth } from '../util/mobileCheck'

import '../css/skills.css'
import 'mdbreact/dist/css/mdb.css' 


function Skills(props) {

    /************ DATA ARRAY OF SUB-COMPONENTS TO BE LINKED **************/

    /* Enum for active window state */
    const skillComps = {
        MENU: "MENU",
        HWTOOLS: "HWTOOLS",
        PLANGS: "PLANGS",
        SWTOOLS: "SWTOOLS"
    }
    Object.freeze(skillComps)

    const skillComponents = [
        {
            id: 0,
            Component: HWTools,
            btnColour: "primary",
            faIcon: "plug",
            wndName: skillComps.HWTOOLS,
            wndTitle: "Hardware Expertise"
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


    /************ LOCAL STATE INITIALIZATION ******************/

    const dispatch = useDispatch()

    /* State of active window switching between skill components */
    const [activeWnd, setActiveWnd] = useState(skillComps.MENU)

    /* Is the side navigation open */
    const sideNavOpen = useSelector(state => state.sideNavOpen)

    const isLeftSwipe = useSelector(state => state.swipeLeftEv)
    const isRightSwipe = useSelector(state => state.swipeRightEv)


    /************** CONDITIONAL RENDERING BY STATE FUNCTIONS ***************/

    /* Get page title from activeWnd */
    const pageTitle = getPageTitle()

    function getPageTitle() {
        if (skillComponents.some(element => element.wndName === activeWnd))
        {
            return ((skillComponents.find((element => element.wndName === activeWnd))).wndTitle)
        }
        return "Technical Skills"
    }

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
    }

    function backToMenu() {
        setActiveWnd(skillComps.MENU)
    }


    /*************************** TOGGLE NAV ON SIDE SWIPES ***************************/

    if (isLeftSwipe)
    {
        dispatch(resetSwipeL())
        if (sideNavOpen && isMobileScrWidth())
        {
            dispatch(sideNavToggle())
        } 
    }

    if (isRightSwipe)
    {
        dispatch(resetSwipeR())
        if (!sideNavOpen && isMobileScrWidth())
        {
            dispatch(sideNavToggle())
        }
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
                {(activeWnd === "MENU") && <SkillsMenu comps={skillComponents} onClick={handleBtnClick} />}
            </div>

            <div className="skills-footer">
                {skillsFooter(activeWnd)}
            </div>
        </div>
    )
}

export default Skills;
