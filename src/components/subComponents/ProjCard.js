import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProjCard(props) {
    const projItem = props.projItem

    /* If project is open-source, indicate with a tag linked to repo */
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


    return (
        <div id="proj-card">
            <div className="title-and-date">
                <h4 className="title">{projItem.title}</h4>
                <p className="date">{projItem.date}</p>
            </div>

            <div className="image-container">
                <img alt="final-product" src={require(`../../img/projects/${projItem.photo}`)} />
            </div>

            <div className="tags-and-prompt">
                <div className="prompt-container">
                    <p className="detail-prompt">Tap for more detail!</p>
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

            {/* For mobile, details show only on click */}
            <div className="details">
                
            </div>
            
        </div>
    )
}

export default ProjCard
