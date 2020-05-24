import React from 'react'


// Project tag items rendered in Projects.js
function ProjTag(props) {
    const tagStyle = (props.active) ? "tag-active" : "tag-inactive"

    return (
        <div className={`tag-item ${tagStyle}`} onClick={() => props.onClick(props.tag)}>
            <p>{props.tag}</p>
        </div>            
    )
}

export default ProjTag
