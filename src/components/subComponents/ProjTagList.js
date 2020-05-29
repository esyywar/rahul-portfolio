import React from 'react'

import ProjTag from './ProjTag'


function ProjTagList(props) {
    /* All project tags to show */
    const projTags = props.projTags

    /* Array of tags which are actively used to filter projects */
    const activeTags = props.activeTags

    /* Function to be called when tags are clicked */
    const tagToggle = props.tagToggleFunc

    return (
        <div className="tags-list">
            {projTags.map((element, index) => {
                return (
                    <ProjTag
                        key={index}
                        active={activeTags.includes(element)} 
                        tag={element} 
                        onClick={tagToggle}
                    />
                )
            })}
        </div>
    )
}

export default ProjTagList
