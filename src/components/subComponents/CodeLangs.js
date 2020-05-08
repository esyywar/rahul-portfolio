import React from 'react'

import techSkills from '../../content/techSkills.json'


function CodeLangs() {
    // Read programming languages from contents JSON
    const progLangs = techSkills.programmingLangs


    return (
        <div className="code-langs-list">
            <div className="lang-column">
                {progLangs.map(({ id, language }) => {
                    return (
                        <div key={id} className="lang-item">{language}</div>
                    )
                })}
            </div>

            <div className="skill-bar-column">
                {progLangs.map(({ id, proficiency }) => {
                    return (
                        <div key={id} className="empty-skill-bar">
                            <div className="skill-bar-fill" style={{width: proficiency}}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CodeLangs