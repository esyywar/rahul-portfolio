import React from 'react'

import techSkills from '../../content/techSkills.json'


function ProgramLangs() {
    // Read programming languages from contents JSON
    const progLangs = techSkills.programmingLangs

    return (
        <div className="prog-langs">
            <h3>Programming Languages</h3>

            <div className="proficiency-list">
                
            </div>
        </div>
    )
}

export default ProgramLangs