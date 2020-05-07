import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import { useSelector } from 'react-redux'

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
      id: 0,
      name: "Main Page",
      text: "Welcome",
      path: "/portfolio",
      isExact: true,
      Component: Summary,
      transitionClass: "summary-transition",
      divClass: "summary",
      bgColour: "#FD8536"
    },
    {
      id: 1,
      name: "Work Experience",
      text: "Professional Exp.",
      path: "/portfolio/workexp",
      isExact: false,
      Component: WorkExp,
      transitionClass: "workexp-transition",
      divClass: "workexp",
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
      divClass: "education",
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
      divClass: "projects",
      bgColour: "#74DE86"
    },
    {
      id: 4,
      name: "Skills",
      text: "Technical Skills",
      path: "/portfolio/techSkills",
      isExact: false,
      Component: Skills,
      transitionClass: "skills-transition",
      divClass: "skills",
      bgColour: "#C18AF8"
    }
  ]
  

  return (
      <Router>
        {/* Bg colour switched depending on active component */}
        <div className="grid-container" style={{backgroundColor: bgColour}}>

          {/* Render side nav and top nav bar */}
          <SideNav navLinks={routes} />

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
