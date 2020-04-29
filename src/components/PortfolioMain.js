import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import { useSelector } from 'react-redux'

import Nav from './Nav'

import Summary from './Summary'
import WorkExp from './WorkExp'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

import '../css/portfolio.css'


function PortfolioMain() {
  // Read background colour state from store
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
      name: "Projects",
      path: "/portfolio/projects",
      isExact: false,
      Component: Projects,
      transitionClass: "projects-transition",
      divClass: "projects",
      bgColour: "#8BAB91"
    },
    {
      id: 4,
      name: "Education",
      path: "/portfolio/edu",
      isExact: false,
      Component: Education,
      transitionClass: "education-transition",
      divClass: "education",
      bgColour: "#E9596A"
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
        name: "Main Page",
        text: "Welcome",
        path: "/portfolio"
    },
    {
        name: "Work Experience",
        text: "Professional",
        path: "/portfolio/workexp"
    },
    {
        name: "Education",
        text: "Education",
        path: "/portfolio/edu"
    },
    {
        name: "Projects",
        text: "Projects",
        path: "/portfolio/projects"
    },
    {
        name: "Skills",
        text: "Skills",
        path: "/portfolio/techskills"
    }
  ]

  return (
      <Router>
        {/* Bg colour switched depending on active component */}
        <div className="grid-container" style={{backgroundColor: bgColour}}>

          {/* Render side nav and top nav bar TODO */}
          <Nav navLinks={navLinks}/>

          {/* Mapping out components rendered by React Transitions Group */}
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
                    <Component bgColour={bgColour} />
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
