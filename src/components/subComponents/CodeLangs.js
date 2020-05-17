import React, { useEffect } from 'react'

import techSkills from '../../content/techSkills.json'


function CodeLangs() {
    // Read programming languages from contents JSON
    const progLangs = techSkills.programmingLangs

    // Text colours for each programing language field - keys of this object are possible values from techSkills.JSON
    const textClrs = {
        embedded: "#AA0000",
        webDev: "#00008B",
        general: "#134D13"
    }

    // Apply animations on component mount
    useEffect(() => {
        // Make language items to fly from left
        Array.from(document.getElementsByClassName("lang-item")).forEach((element, index) => {
            element.style.animation = "slideFromLeft 300ms ease " + (index * 100 + 100) + "ms forwards"
        })

        // Skill bars to fly in from right
        Array.from(document.getElementsByClassName("empty-skill-bar")).forEach((element, index) => {
            element.style.animation = "slideFromRight 300ms ease " + (index * 100 + 100) + "ms forwards"
        })

        // Filling up the skill bar
        Array.from(document.getElementsByClassName("skill-bar-fill")).forEach((element, index) => {
            element.style.transition = "width 1s ease-out " + (index * 100 + 300) + "ms"
            element.style.width = progLangs[index].proficiency
        })
    }, [progLangs])
    

    return (
        <div className="code-langs-list">
            <div className="lang-column">
                {progLangs.map(({ id, language, field }) => {
                    return (
                        <div key={id} style={{color: textClrs[field]}} className="lang-item">{language}</div>
                    )
                })}
            </div>

            <div className="skill-bar-column">
                {progLangs.map(({ id }) => {
                    return (
                        <div key={id} className="empty-skill-bar">
                            <div className="skill-bar-fill"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CodeLangs