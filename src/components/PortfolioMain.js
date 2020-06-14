import React from "react"

import { CSSTransition } from "react-transition-group"

import { useSelector, useDispatch } from "react-redux"
import { resetSwipeU, resetSwipeD } from "../actions/touchEventSet"
import { nextComp, prevComp } from "../actions/setActiveComp"

import SideNav from "./SideNav"

import Welcome from "./Welcome"
import Professional from "./Professional"
import Education from "./Education"
import Projects from "./Projects"
import Skills from "./Skills"

import portfolioPages from "../content/portfolioPages.json"

import "../css/portfolio.css"

function PortfolioMain() {
  /* Components to map inside CSS Transition (NOTE: key value must match 'Component' property value in portfolioPages.json)*/
  const components = {
    Welcome: Welcome,
    Professional: Professional,
    Education: Education,
    Projects: Projects,
    Skills: Skills,
  }

  /**************** LOCAL STATE VARIABLES *********************/

  /* Set state of active component */
  const activeComp = useSelector((state) => state.activeComp)

  const bgColour = portfolioPages[activeComp].bgColour

  /********************* REDUX STATE *******************/

  const dispatch = useDispatch()

  const isSwipeUp = useSelector((state) => state.swipeUpEv)
  const isSwipeDown = useSelector((state) => state.swipeDownEv)

  /****************** SWIPE HANDLING ********************/

  /* Toggle active component on vertical swipes */
  if (isSwipeUp) {
    dispatch(resetSwipeU())
    if (activeComp > 0) {
      dispatch(prevComp())
    }
  }

  if (isSwipeDown) {
    dispatch(resetSwipeD())
    if (activeComp < portfolioPages.length - 1) {
      dispatch(nextComp())
    }
  }

  return (
    <div className='grid-container' style={{ backgroundColor: bgColour }}>
      {/* Render side nav and top nav bar */}
      <SideNav navLinks={portfolioPages} />

      {/* Display page-title for chosen component */}

      {/* Mapping components which change on state change */}
      {portfolioPages.map(({ id, Component, transitionClass }) => {
        return (
          <div key={id} className='resume-window'>
            <CSSTransition in={activeComp === id} timeout={500} classNames={transitionClass} unmountOnExit>
              {React.createElement(components[Component], { id: id })}
            </CSSTransition>
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioMain
