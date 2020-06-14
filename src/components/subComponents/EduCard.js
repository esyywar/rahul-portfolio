import React from "react"

function EduCard(props) {
  const eduItem = props.eduItem
  const image = props.img

  /* To display date */
  function dateDisplay(eduItem) {
    if (eduItem.current) {
      return <p style={{ color: "#2cf54e" }}>{eduItem.startDate + " - Present"}</p>
    } else {
      return <p>{eduItem.startDate + " - " + eduItem.endDate}</p>
    }
  }

  /* To show degree field */
  function displayDegree(eduItem) {
    if (eduItem.abbrevDegree) {
      return <p>{eduItem.degree + " - " + eduItem.abbrevDegree}</p>
    } else {
      return <p>{eduItem.degree}</p>
    }
  }

  return (
    <div id='edu-card'>
      <div className='school-and-date'>
        <p>{eduItem.institution}</p>

        {/* Show date differently depending on if current or not */}
        {dateDisplay(eduItem)}
      </div>

      {/* Show image in center of the page */}
      <div className='image-container'>
        <img alt={eduItem.institution} src={image.src} />
      </div>

      {/* Show dates and major */}
      <div className='degree-and-major'>
        {displayDegree(eduItem)}
        {eduItem.major && <p>{eduItem.major}</p>}
        {eduItem.allocades && <p style={{ color: "orange" }}>{eduItem.allocades[0]}</p>}
      </div>
    </div>
  )
}

export default EduCard
