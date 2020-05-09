import React, { useEffect } from 'react'

import techSkills from '../../content/techSkills.json'


function SWTools() {
    const swTools = techSkills.softwareTools

    // Choosing background colours for each of the 4 software tool packages
    const bgColours = ["#9859BE", "#230C33", "#724CF9", "#564592"]

    // Apply animation effect on sw-tool pack containers
    useEffect(() => {
        Array.from(document.getElementsByClassName("sw-tool-pack")).forEach((element, index) => {
            element.style.animation = "flipInHoriz 1s ease-out " + (index * 100) + "ms forwards"
        })
    }, [])

    return (
        <div className="sw-tools-grid">
            {/* Map each of the software tool packs into a container */}
            {swTools.map(({ id, title, items }, index) => {
                return (
                    <div key={id} className="sw-tool-pack" style={{backgroundColor: bgColours[index]}}>
                        <h3>{title}</h3>
                        {/* Each list of software tools mapped within each container */}
                        {items.map(element => {
                            return (
                                <p>{element}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default SWTools