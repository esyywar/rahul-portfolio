import React from 'react'

import { CSSTransition } from 'react-transition-group'

function Education(props) {
    return (
        <CSSTransition in={props.match != null} timeout={500} classNames="page-change-out" unmountOnExit>
            <div className="resume-window">
                <h1>Education</h1>
            </div>
        </CSSTransition>
    )
}

export default Education
