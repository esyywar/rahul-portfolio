import React from 'react'

import { CSSTransition } from 'react-transition-group'

import { useSelector } from 'react-redux'

import SideNav from './SideNav'

import Welcome from './Welcome'
import Professional from './Professional'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

import portfolioPages from '../content/portfolioPages.json'


import '../css/portfolio.css'


function PortfolioMain() {

  /* Components to map inside CSS Transition (NOTE: key must match 'Component' value in portfolioPages.json)*/
  const components = {
    Welcome: Welcome,
    Professional: Professional,
    Education: Education,
    Projects: Projects,
    Skills: Skills
  }


  /**************** STATE VARIABLES *********************/

  /* Set state of active component */
  const activeComp = useSelector(state => state.activeComp)


  const bgColour = portfolioPages[activeComp].bgColour


  return (
    <div className="grid-container" style={{backgroundColor: bgColour}}>

      {/* Render side nav and top nav bar */}
      <SideNav navLinks={portfolioPages} />

      {/* Display page-title for chosen component */}
      
      {/* Mapping components which change on state change */}
      {portfolioPages.map(({ id, Component, transitionClass }) => {
        return (
          <div key={id} className="resume-window">
            <CSSTransition 
              in={activeComp === id} 
              timeout={500} 
              classNames={transitionClass}
              unmountOnExit
            >
              {React.createElement(components[Component], {id: id})}
            </CSSTransition>
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioMain
