import React, { useLayoutEffect } from 'react'

import techSkills from '../../content/techSkills.json'


function HWTools() {
    // Import hardware knowledge from contents JSON
    const hwTools = techSkills.hardwareTools

    // Background colours for hardware tool containers
    const bgColours = ["#D2D7DF", "#CDFFF9", "#BDBBB0"]

    // Animate the hw-tool-packs on render
    useLayoutEffect(() => {
        Array.from(document.getElementsByClassName("hw-tool-pack")).forEach((element, index) => {
            element.style.animation = "growBig 300ms ease-in " + (index * 100) + "ms forwards"
        })
    })


    return (
        <div className="hardware-page">
            {hwTools.map(({ id, title, items}, index) => {
                return (
                    <div key={id} className="hw-tool-pack" style={{backgroundColor: bgColours[index]}}>
                        <h3>{title}</h3>
                        {items.map((element, index) => {
                            return (
                                <p key={index}>{element}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default HWTools