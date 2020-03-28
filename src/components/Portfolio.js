import React from 'react'

import { CSSTransition } from 'react-transition-group'


function Portfolio(props) {
    console.log(props.match)
    return (
        <CSSTransition in={props.match != null} timeout={500} classNames="page-change-out" unmountOnExit>
            <div className="resume-window">
                <h1> Home Page</h1>
                <h2>{props.word}</h2>
            </div>
        </CSSTransition>
    )
}

export default Portfolio
