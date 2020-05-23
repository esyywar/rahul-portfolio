import React, { useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import { useDispatch, useSelector } from 'react-redux'
import { nextComp, prevComp } from '../actions/setActiveComp'
import { touchEventSet, setSwipeL, setSwipeR, resetSwipeL, resetSwipeR } from '../actions/touchEventSet'

import SideNav from './SideNav'

import Welcome from './Welcome'
import Professional from './Professional'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

import '../css/portfolio.css'


function PortfolioMain() {

  // Routes to pages which will be mapped
  const portfolioPages = [
    {
      id: 0,
      name: "Main Page",
      text: "Welcome",
      isExact: true,
      Component: Welcome,
      transitionClass: "summary-transition",
      bgColour: "#FD8536"
    },
    {
      id: 1,
      name: "Professional Experience",
      text: "Professional Exp.",
      isExact: false,
      Component: Professional,
      transitionClass: "proexp-transition",
      bgColour: "#F16481"
    },
    {
      id: 2,
      name: "Education",
      text: "Education",
      isExact: false,
      Component: Education,
      transitionClass: "education-transition",
      bgColour: "#7BB2D9"
    },
    {
      id: 3,
      name: "Projects",
      text: "Projects",
      isExact: false,
      Component: Projects,
      transitionClass: "projects-transition",
      bgColour: "#5DB76B"
    },
    {
      id: 4,
      name: "Skills",
      text: "Technical Skills",
      isExact: false,
      Component: Skills,
      transitionClass: "skills-transition",
      bgColour: "#C18AF8"
    }
  ]


  /**************** STATE VARIABLES *********************/

  const dispatch = useDispatch()

  // Set state of active component
  const activeComp = useSelector(state => state.activeComp)

  // State indicating if touch event listeners are set
  const isTouchEvent = useSelector(state => state.isTouchEvent)

  const bgColour = portfolioPages[activeComp] ? portfolioPages[activeComp].bgColour : "FFFFFF"


  /**************** DETECTING SWIPE EVENTS *****************/

  var startX, startY, startTime, moveX, moveY, deltaTime

  // Store starting touch position and time 
  // eslint-disable-next-line
  function handleTouchStart(event) {
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
    startTime = event.timeStamp

    // Reset movement trackers
    moveX = 0
    moveY = 0

    // Add event listener for touch move
    document.addEventListener("touchmove", handleTouchMove)
  }

  // Compare final position with start to determine if swipe occured 
  // eslint-disable-next-line
  function handleTouchEnd() {
    // Remove touch event listener
    document.removeEventListener("touchmove", handleTouchMove)

    // Check for swipe - If detected, remove event listeners and call handler
    if (deltaTime < 500)
    {
      if (Math.abs(window.screen.width / moveX) < 4)
      {
        horizSwipeHandle()
        return
      }
      else if (Math.abs(window.screen.height / moveY) < 6)
      { 
        vertSwipeHandle()
      }
    }
  }  

  // Track position of touch movement
  function handleTouchMove(event) {
    moveX = event.touches[0].clientX - startX
    moveY = event.touches[0].clientY - startY
    deltaTime = event.timeStamp - startTime
  }

  // Touch event listeners attached
  if (!isTouchEvent)
  {
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)
    dispatch(touchEventSet(true))
  }


  /****************** SWIPE EVENT HANDLERS ********************/

  // Check if swiped left or right and handle event
  function horizSwipeHandle() {
    if (moveX > 0)
    {
      dispatch(setSwipeR())
    }
    else if (moveX < 0)
    {
      dispatch(setSwipeL())
    }
  }

  // Check if swiped up or down and handle event
  function vertSwipeHandle() {
    if (moveY > 0) 
    {
      if (activeComp > 0)
      {
        dispatch(prevComp())
      }
    }
    else if (moveY < 0)
    {
      if (activeComp < portfolioPages.length - 1)
      {
        dispatch(nextComp())
      }
    }
  }


  /********************* USE EFFECTS ********************/

  // Error checking active comp
  useEffect(() => {
    // Rest horizontal swipe flags
    dispatch(resetSwipeL())
    dispatch(resetSwipeR())
  }, [activeComp, dispatch])

  // Update the event listeners when handler function environment changes (happens with activeComp state change)
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchEnd])


  return (
    <div className="grid-container" style={{backgroundColor: bgColour}}>

      {/* Render side nav and top nav bar */}
      <SideNav navLinks={portfolioPages} />
      
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
              <Component id={id} />
            </CSSTransition>
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioMain
