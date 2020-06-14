import React, { useState } from "react"

// Project tag items rendered in Projects.js
function ProjTag(props) {
  const [activeTag, setActiveTag] = useState(props.active)

  function handleClick() {
    setActiveTag(!activeTag)
    props.onClick(props.tag)
  }

  return (
    <div className={`tag-item ${activeTag ? "tag-active" : "tag-inactive"}`} onClick={handleClick}>
      <p>{props.tag}</p>
    </div>
  )
}

export default ProjTag
