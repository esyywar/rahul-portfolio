import React, { useState, useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import ProgramLangs from './subComponents/ProgramLangs'
import SWTools from './subComponents/SWTools'
import HWTools from './subComponents/HWTools'

import { MDBBtn } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/skills.css'
import 'mdbreact/dist/css/mdb.css' 


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
                <MDBBtn size="lg" color="mdb-color" className="slide-right" onClick={() => setActiveWnd("MENU")}>Back to Menu</MDBBtn>
            )
        }
    }


    return (
        <div className="skills-page">
            <h1 className="page-title">Technical Skills</h1>

            <div className="skills-content">
                {/* Mapping the skill component items accessible from menu buttons */}
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

                <CSSTransition 
                    in={activeWnd === "MENU"}
                    timeout={500}
                    classNames="skills-menu-transition"
                    exit={false}
                    unmountOnExit
                >
                    <div className="menu-screen">
                        <div className="btn-container">
                            <MDBBtn color="primary" onClick={() => setActiveWnd("HWTOOLS")}>
                                <span><FontAwesomeIcon icon="plug" size="lg" /> Hardware</span>
                            </MDBBtn>
                        </div>
                        <div className="btn-container">
                            <MDBBtn color="deep-orange" onClick={() => setActiveWnd("PLANGS")}>
                                <span><FontAwesomeIcon icon="keyboard" size="lg" /> Coding</span>
                            </MDBBtn>
                        </div>
                        <div className="btn-container">
                            <MDBBtn color="amber" onClick={() => setActiveWnd("SWTOOLS")}>
                                <span><FontAwesomeIcon icon="tools" size="lg" /> SW Tools</span>
                            </MDBBtn>
                        </div>
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
