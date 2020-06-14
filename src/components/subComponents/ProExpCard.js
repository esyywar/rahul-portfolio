import React from "react"

import { isMobileDevice } from "../../util/mobileCheck"
import { getPreviewText } from "../../util/getProjPreview"

function ProExpCard(props) {
  const proExpItem = props.proExpItem
  const image = props.img

  /* Description is an array of sentences to be mapped as html paragraphs */
  const description = window.screen.width < 768 || window.innerWidth < 768 ? proExpItem.shortDesc : proExpItem.fullDesc

  /******************* DATE DISPLAY ***********************/

  function dateDisplay(proExpItem) {
    if (proExpItem.current) {
      return <p style={{ color: "#08AF24" }}>{proExpItem.startDate + " - Present"}</p>
    } else {
      return <p style={{ color: "#084C61" }}>{proExpItem.startDate + " - " + proExpItem.endDate}</p>
    }
  }

  /*************** TOGGLING OF JOB EXPERIENCE DESCRIPTION SECTION ****************/

  function expandableDetail(proExpDesc, isOpen) {
    if (isOpen) {
      return (
        <div className='pro-exp-desc-full'>
          {proExpDesc.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      )
    } else {
      return (
        <div className='pro-exp-desc-preview'>
          {/* Display preview text from first sentence of description */}
          <span className='prev-text'>{getPreviewText(proExpDesc)}</span>
          <span className='detail-prompt'>{isMobileDevice() ? "Tap" : "Click"}</span>
        </div>
      )
    }
  }

  return (
    <div id='pro-content-card'>
      <div className='title-loc-and-company'>
        <div>
          <p className='employer'>{proExpItem.employer}</p>
          <p className='job-title'>{proExpItem.jobTitle}</p>
          <p className='location'>{`${proExpItem.city}, ${proExpItem.country}`}</p>
        </div>
      </div>

      <div className='image-container'>
        <img alt='office-building' src={image.src} />
      </div>

      <div id='date-and-description' className={props.isDescOpen ? "desc-open" : "desc-closed"}>
        <h4 className='date'>{dateDisplay(proExpItem)}</h4>

        {/* Expandable detail section is rendered here */}
        <div className='desc-container no-select' onClick={() => props.expandDescToggle()}>
          {expandableDetail(description, props.isDescOpen)}
        </div>
      </div>
    </div>
  )
}

export default ProExpCard
