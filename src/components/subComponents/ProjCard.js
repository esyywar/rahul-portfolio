import React from 'react'

import { isMobileDevice } from '../../util/mobileCheck'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProjCard(props) {

    const projItem = props.projItem

    
    /******************* CONDITIONAL RENDER OF OPEN SOURCE TAG *********************/

    function openSrcLink(projItem) 
    {
        if (projItem.openSrc)
        {
            return (
                <a className="proj-git-link" href={projItem.link} target="_blank" rel="noopener noreferrer" > 
                    <p className="proj-item-tag">
                        Open Source<FontAwesomeIcon style={{marginLeft: "5px"}} icon={["fab", "github"]} />
                    </p>
                </a>
            )
        }
    }


    /*************** TOGGLINE OF DESCRIPTION SECTION ****************/

    function detailSection() {
        if (props.isMobileDesc)
        {
            return (
                <div>Nonsense</div>
            )
        }
        else
        {
            return (
                <p className="detail-prompt">{(isMobileDevice()) ? "Tap" : "Click"} for more detail!</p>
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

            <div 
                id="tags-and-desc" 
                className={(props.isMobileDesc) ? "desc-open" : "desc-closed"} 
            >
                {/* Close button for collapsing short-desc section on mobile */}
                {props.isMobileDesc && <span className="desc-close-btn" onClick={() => props.mobileDescTog()}> ✕ </span>}

                <div className="proj-desc">
                    {/* TODO - Hold descriptions for project */}
                </div>

                {/* Expandable section to show project details */}
                <div className="desc-container" onClick={() => props.mobileDescTog()}>
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
