import React, { useEffect } from 'react'

import techSkills from '../../content/techSkills.json'


function CodeLangs() {

    /**************** SORTING PROG LANG DATA *****************/

    /* Read programming languages from contents JSON */
    const progLangs = techSkills.programmingLangs

    /* Sort into expert and work proficiency arrays */
    const expLangs = progLangs.filter(element => element.isExpert)
    const workProfLangs = progLangs.filter(element => !element.isExpert)


    /*************** CREATING PROG LANG ICON ELEMENT ****************/

    const textClrs = {
        embedded: "#AA0000",
        webDev: "#00008B",
        general: "#134D13"
    }

    function makeProgIcon(element, index) {
        return (
            <div 
                key={index} 
                className={`prog-icon-container ${element.isExpert ? "exp-lang" : "work-prof-lang"}`}
                style={{color: textClrs[element.field]}}
            >
                <img alt={element.language} src={require(`../../img/skills/${element.icon}`)} />
                <span>{element.language}</span>
            </div>
        )
    }


    /***************** ENTRANCE ANIMATIONS ******************/

    /* Apply animations on component mount */
    useEffect(() => {
        /* Expert langs fly from left */
        Array.from(document.getElementsByClassName("exp-lang")).forEach((element, index) => {
            element.style.animation = "slideFromLeft 300ms ease " + (index * 100 + 100) + "ms forwards"
        })

        /* Working proficiency langs fly from right */
        Array.from(document.getElementsByClassName("work-prof-lang")).forEach((element, index) => {
            element.style.animation = "slideFromRight 300ms ease " + (index * 100 + 100) + "ms forwards"
        })
    }, [progLangs])
    

    return (
        <div className="code-langs-table">
            <div className="expertise-column">
                <h3>Expertise</h3>
                {expLangs.map(makeProgIcon)}
            </div>

            <div className="working-prof-column">
                <h3>Working Proficiency</h3>
                {workProfLangs.map(makeProgIcon)}
            </div>
        </div>
    )
}

export default CodeLangs