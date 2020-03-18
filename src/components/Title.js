import React from 'react'

import '../css/title.css'

function Title() {
    function makeBars(numBars) {
        const bars = []
        for (let i = 0; i < numBars; i++) {
            bars[i] = (
                <div className="bar">

                </div>
            )
        }
        return bars
    }

    return (
        <div className="title-page">
            <div className="background">

            </div>
            <div className="profile-block">
                <div className="name-block">
                    <div className="left-line">
                        <hr />
                    </div>
                    <h1>Rahul Eswar</h1>
                    <div className="right-line">
                        <hr />
                    </div>
                </div>
                <h3>Systems and Computing Engineer</h3>
                <p>Background in Biomedical Engineering with a passion for electrical design and embedded systems. Experienced working on electronics of medical devices and researching micro-electromechanical systems.</p>
                <h4>Toronto, Canada</h4>
            </div>
        </div>
    )
}

export default Title