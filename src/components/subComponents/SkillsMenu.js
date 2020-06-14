import React from "react"

import { MDBBtn } from "mdbreact"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "mdbreact/dist/css/mdb.css"

function SkillsMenu(props) {
  const skillComponents = props.comps

  return (
    <div className='menu-screen'>
      {/* Mapping buttons to skill components on menu screen */}
      {skillComponents.map(({ id, btnColour, faIcon, wndTitle }) => {
        return (
          <div key={id} className='btn-container'>
            <MDBBtn className='menu-btn' color={btnColour} onClick={() => props.onClick(id)}>
              <span>
                <FontAwesomeIcon icon={faIcon} size='lg' /> {wndTitle}
              </span>
            </MDBBtn>
          </div>
        )
      })}
    </div>
  )
}

export default SkillsMenu
