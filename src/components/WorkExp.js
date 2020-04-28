import React from 'react'

import { CSSTransition } from 'react-transition-group'

function WorkExp(props) {
    return (
        <CSSTransition in={props.match != null} timeout={700} classNames="page-change-out" unmountOnExit>
            <div className="resume-window">
                <h1 className="page-title">Professional Experience</h1>
            </div>
        </CSSTransition>
    )
}

export default WorkExp
