import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import { useSelector, useDispatch } from 'react-redux'
import { bgClrSwitch } from '../actions/bgClrSwitch'

import Nav from './Nav'
import SideNav from './SideNav'

import Summary from './Summary'
import WorkExp from './WorkExp'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

import '../css/portfolio.css'


function PortfolioMain() {
  // Read background colour will be updated on click (changes with routes)
  const bgColour = useSelector(state => state.bgColour)

  // Routes to pages which will be mapped
  const routes = [
    {
      id: 1,
      name: "Main Page",
      path: "/portfolio",
      isExact: true,
      Component: Summary,
      transitionClass: "summary-transition",
      divClass: "summary",
      bgColour: "#5E6FDC"
    },
    {
      id: 2,
      name: "Work Experience",
      path: "/portfolio/workexp",
      isExact: false,
      Component: WorkExp,
      transitionClass: "workexp-transition",
      divClass: "workexp",
      bgColour: "#D59A66"
    },
    {
      id: 3,
      name: "Education",
      path: "/portfolio/edu",
      isExact: false,
      Component: Education,
      transitionClass: "education-transition",
      divClass: "education",
      bgColour: "#E9596A"
    },
    {
      id: 4,
      name: "Projects",
      path: "/portfolio/projects",
      isExact: false,
      Component: Projects,
      transitionClass: "projects-transition",
      divClass: "projects",
      bgColour: "#8BAB91"
    },
    {
      id: 5,
      name: "Skills",
      path: "/portfolio/techSkills",
      isExact: false,
      Component: Skills,
      transitionClass: "skills-transition",
      divClass: "skills",
      bgColour: "#A47EAF"
    }
  ]

  // Items passed to navigation bars to generate links
  const navLinks = [
    {
        id: 1,
        name: "Main Page",
        text: "Welcome",
        path: "/portfolio",
        bgColour: "#5E6FDC"
    },
    {
        id: 2,
        name: "Work Experience",
        text: "Professional",
        path: "/portfolio/workexp",
        bgColour: "#D59A66"
    },
    {
        id: 3,
        name: "Education",
        text: "Education",
        path: "/portfolio/edu",
        bgColour: "#E9596A"
    },
    {
        id: 4,
        name: "Projects",
        text: "Projects",
        path: "/portfolio/projects",
        bgColour: "#8BAB91"
    },
    {
        id: 5,
        name: "Skills",
        text: "Skills",
        path: "/portfolio/techskills",
        bgColour: "#A47EAF"
    }
  ]

  // This function will be called by navBars to change background colour (passed to nav elements as prop)
  const dispatch = useDispatch()
  function bgColourHandler(idClicked) {
    const newBg = navLinks[idClicked - 1].bgColour
    dispatch(bgClrSwitch(newBg))
  }

  return (
      <Router>
        {/* Bg colour switched depending on active component */}
        <div className="grid-container" style={{backgroundColor: bgColour}}>

          {/* Render side nav and top nav bar */}
          {/* <SideNav navLinks={navLinks}/> */}
          <Nav navLinks={navLinks} bgChangeHandler={bgColourHandler}/>

          {/* Mapping out components rendered by react rransitions group */}
          {routes.map(({ path, isExact, Component, transitionClass, divClass, bgColour }) => (
            <Route key={path} exact={isExact} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames={transitionClass}
                  unmountOnExit
                >
                  <div className={`resume-window ${divClass}`}>
                    <Component bgColour={bgColour}/>
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
