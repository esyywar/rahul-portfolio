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
            <div className="name-block">
                <h1>Rahul Eswar</h1>
                <h3>Systems and Computing Engineer</h3>
                <p>Passionate about the development of electrical and embedded systems. Background in biomedical engineering with experience working on medical devices and researching diagnostic technology.</p>
                <h4>Toronto, Canada</h4>
            </div>
        </div>
    )
}

export default Title