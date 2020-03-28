import React from 'react'

import { CSSTransition } from 'react-transition-group'

function Skills(props) {
    return (
        <CSSTransition in={props.match != null} timeout={500} classNames="portfolio" unmountOnExit>
            <div className="container">
                <div className="resume-window">
                    <h1>Skills</h1>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Skills;
