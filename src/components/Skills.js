import React, { useState, useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import ProgramLangs from './subComponents/ProgramLangs'
import SWTools from './subComponents/SWTools'
import HWTools from './subComponents/HWTools'

import '../css/skills.css'


function Skills(props) {
    const dispatch = useDispatch()

    // Change background colour on render
    useEffect(() => {
        dispatch(bgClrSwitch(props.bgColour))
    }, [props.bgColour, dispatch])

    // For switching between skill components
    const [activeWnd, setActiveWnd] = useState("MENU")

    const skillComponents = [
        {
            id: 0,
            Component: ProgramLangs,
            wndName: "PLANGS"
        },
        {
            id: 1,
            Component: SWTools,
            wndName: "SWTOOLS"
        },
        {
            id: 2,
            Component: HWTools,
            wndName: "HWTOOLS"
        }
    ]


    return (
        <div className="skills-page">
            <h1 className="page-title">Technical Skills</h1>

            <CSSTransition 
                in={activeWnd === "MENU"}
                timeout={300}
                classNames="skills-menu-transition"
                unmountOnExit
            >
                <div className="skills-btns">
                    <div className="btn-container"><button onClick={() => setActiveWnd("PLANGS")}>Programming Languages</button></div>
                    <div className="btn-container"><button onClick={() => setActiveWnd("SWTOOLS")}>Software Tools</button></div>
                    <div className="btn-container"><button onClick={() => setActiveWnd("HWTOOLS")}>Hardware Tools</button></div>
                </div>
            </CSSTransition>

            {
                skillComponents.map(({ id, Component, wndName }) => {
                    return (
                    <CSSTransition 
                        key={id}
                        in={activeWnd === wndName}
                        timeout={300}
                        classNames="skills-component-transition"
                        unmountOnExit
                    >
                        <Component />
                    </CSSTransition>
                    )
                })
            }


            {/* If not at menu screen, display 'Back to Menu' button */}
            <CSSTransition 
                in={activeWnd !== "MENU"}
                timeout={700}
                classNames="back-btn-transition"
                unmountOnExit
            >
                <div className="back-btn">
                    <button onClick={() => setActiveWnd("MENU")}>Back to Menu</button>
                </div>
            </CSSTransition>

            
        </div>
    )
}

export default Skills;
