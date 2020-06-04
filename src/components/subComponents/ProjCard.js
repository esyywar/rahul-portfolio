import React from 'react'

import { isMobileDevice } from '../../util/mobileCheck'
import { getPreviewText } from '../../util/getProjPreview'


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

    function detailSection(projItem) {
        if (props.isMobileDesc)
        {
            return (
                <div className="proj-desc-full">{projItem.description}</div>
            )
        }
        else
        {
            return (
                <div className="proj-desc-preview">
                    <span className="prev-text">{getPreviewText(projItem.description)}</span>
                    <span className="detail-prompt">{(isMobileDevice()) ? "Tap" : "Click"}</span>
                </div>
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
                {/* Expandable section to show project details */}
                <div className="desc-container no-select" onClick={() => props.mobileDescTog()}>
                    {detailSection(projItem)}
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
