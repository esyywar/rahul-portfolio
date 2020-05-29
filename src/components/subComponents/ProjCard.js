import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProjCard(props) {

    const [mobileDescOpen, setMobileDesc] = useState(false)

    const projItem = props.projItem

    
    /*********************** CONDITIONAL RENDERING *********************/

    function openSrcLink(projItem) 
    {
        if (projItem.openSrc)
        {
            return (
                <a href={projItem.link} target="_blank" rel="noopener noreferrer" > 
                    <p className="proj-item-tag proj-git-link">
                        Open Source<FontAwesomeIcon style={{marginLeft: "5px"}} icon={["fab", "github"]} />
                    </p>
                </a>
            )
        }
    }

    function detailSection() {
        if (mobileDescOpen)
        {
            return (
                <div>Nonsense</div>
            )
        }
        else
        {
            return (
                <p className="detail-prompt" onClick={() => setMobileDesc(true)}>Tap for more detail!</p>
            )
        }
    }


    return (
        <div id="proj-card">
            <div className="title-and-date">
                <h4 className="title">{projItem.title}</h4>
                <p className="date">{projItem.date}</p>
            </div>

            <div className="image-container">
                <img alt="final-product" src={require(`../../img/projects/${projItem.photo}`)} />
            </div>

            <div className="tags-and-desc">
                {/* Close button for collapsing short-desc section on mobile */}
                {mobileDescOpen && <span className="desc-close-btn" onClick={() => setMobileDesc(false)}>✕</span>}
                

                <div className="proj-desc">
                    {/* TODO - Hold descriptions for project */}
                </div>

                {/* This prompt only shown for mobile platforms to expand details */}
                <div className="desc-container">
                    {detailSection()}
                </div>

                {/* List tags associated with active project item */}
                <div className="proj-card-tags">
                    {/* Render open source link if project is tagged as open-source */}
                    {openSrcLink(projItem)}

                    {projItem.tags.map((element, index) => {
                        return (
                            <p key={index} className="proj-item-tag">{element}</p>
                        )
                    })}
                </div>
            </div>            
        </div>
    )
}

export default ProjCard
