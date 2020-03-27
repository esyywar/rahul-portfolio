import React from 'react'

import { CSSTransition } from 'react-transition-group'

import '../css/portfolio.css'

function Portfolio(props) {
    console.log(props.match)
    return (
        <div className="portfolio">
            <h1> Home Page</h1>
            <h2>{props.word}</h2>
        </div>
    )
}

export default Portfolio
