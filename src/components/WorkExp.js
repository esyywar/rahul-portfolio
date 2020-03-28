import React from 'react'

import { CSSTransition } from 'react-transition-group'

function WorkExp(props) {
    return (
        <CSSTransition in={props.match != null} timeout={500} classNames="portfolio" unmountOnExit>
            <div className="container">
                <div className="resume-window">
                    <h1>Education</h1>
                </div>
            </div>
        </CSSTransition>
    )
}

export default WorkExp
