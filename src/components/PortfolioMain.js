import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import { useSelector } from 'react-redux'

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
      path: "/portfolio",
      isExact: true,
      Component: Welcome,
      transitionClass: "summary-transition",
      bgColour: "#FD8536"
    },
    {
      id: 1,
      name: "Professional Experience",
      text: "Professional Exp.",
      path: "/portfolio/workexp",
      isExact: false,
      Component: Professional,
      transitionClass: "proexp-transition",
      bgColour: "#F16481"
    },
    {
      id: 2,
      name: "Education",
      text: "Education",
      path: "/portfolio/edu",
      isExact: false,
      Component: Education,
      transitionClass: "education-transition",
      bgColour: "#7BB2D9"
    },
    {
      id: 3,
      name: "Projects",
      text: "Projects",
      path: "/portfolio/projects",
      isExact: false,
      Component: Projects,
      transitionClass: "projects-transition",
      bgColour: "#5DB76B"
    },
    {
      id: 4,
      name: "Skills",
      text: "Technical Skills",
      path: "/portfolio/techSkills",
      isExact: false,
      Component: Skills,
      transitionClass: "skills-transition",
      bgColour: "#C18AF8"
    }
  ]


  /**************** DETECTING SWIPE EVENTS *****************/

  document.addEventListener("touchstart", handleTouchStart)
  document.addEventListener("touchend", handleTouchEnd)
  var startX, startY, startTime, moveX, moveY, deltaTime

  // Store starting touch position and time
  function handleTouchStart(event) {
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
    startTime = event.timeStamp

    // Add event listener for touch move
    document.addEventListener("touchmove", handleTouchMove)
  }

  // Track position of touch movement
  function handleTouchMove(event) {
    moveX = event.touches[0].clientX - startX
    moveY = event.touches[0].clientY - startY
    deltaTime = startTime - event.timeStamp
  }

  // Compare final position with start to determine if swipe occured
  function handleTouchEnd() {
    // Remove touch event listener
    document.removeEventListener("touchmove", handleTouchMove)

    // Check for swipe
    if (Math.abs(window.screen.width / moveX) > 4 && deltaTime < 1000)
    {
      vertSwipeHandle()
      return
    }
    else if (Math.abs(window.screen.height / moveY) > 4 && deltaTime < 1000)
    { 
      horizSwipeHandle()
    }
  }

  function horizSwipeHandle() {
    if (moveX > 0)
    {
      console.log("Swiped left")
    }
    else
    {
      console.log("Swiped right")
    }
  }

  // Called for up or down swipes
  function vertSwipeHandle() {
    if (moveY > 0) 
    {
      console.log("Swiped up")
    }
    else
    {
      console.log("Swiped down")
    }
  }
  

  /**************** STATE VARIABLES *********************/

  // Set state of active component (default -1)
  const activeComp = useSelector(state => state.activeComp)

  // Background colour (default white)
  const bgColour = (portfolioPages[activeComp]) ? (portfolioPages[activeComp].bgColour) : "FFFFFF"


  return (
      <Router>
        {/* Bg colour switched depending on active component */}
        <div className="grid-container" style={{backgroundColor: bgColour}}>

          {/* Render side nav and top nav bar */}
          <SideNav navLinks={portfolioPages} />

          {/* Mapping out components rendered by react rransitions group */}
          {portfolioPages.map(({ id, path, isExact, Component, transitionClass, bgColour }) => (
            <Route key={id} exact={isExact} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames={transitionClass}
                  unmountOnExit
                >
                  <div className="resume-window">
                    <Component id={id} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}

        </div>
      </Router>
  )
}

export default PortfolioMain
