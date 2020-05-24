import React from 'react'


// Project tag items rendered in Projects.js
function ProjTag(props) {
    const textClr = (props.active) ? "white" : "red"

    return (
        <div className="tag-item" onClick={() => props.onClick(props.tag)}>
            <p style={{color: textClr}}>{props.tag}</p>
        </div>            
    )
}

export default ProjTag
