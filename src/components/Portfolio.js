import React from 'react'

import { CSSTransition } from 'react-transition-group'

import '../css/portfolio.css'

function Portfolio(props) {
    console.log(props.match)
    return (
        <CSSTransition in={props.match != null} timeout={500} classNames="portfolio" unmountOnExit>
            <div className="container">
                <div className="resume-window">
                    <h1> Home Page</h1>
                    <h2>{props.word}</h2>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Portfolio
