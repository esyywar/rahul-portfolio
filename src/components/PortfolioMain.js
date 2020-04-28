import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Summary from './Summary'
import WorkExp from './WorkExp'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

import '../css/resume-window.css'


function PortfolioMain() {
    const routes = [
        {
          name: "Main Page",
          path: "/portfolio",
          isExact: true,
          component: Summary
        },
        {
          name: "Work Experience",
          path: "/portfolio/workexp",
          isExact: false,
          component: WorkExp
        },
        {
          name: "Projects",
          path: "/portfolio/projects",
          isExact: false,
          component: Projects
        },
        {
          name: "Education",
          path: "/portfolio/edu",
          isExact: false,
          component: Education
        },
        {
          name: "Skills",
          path: "/portfolio/techSkills",
          isExact: false,
          component: Skills
        }
      ]

    return (
        <Router>
            <div className="grid-container">
              <Nav />
              
              {routes.map(({ path, component : Component }, index, isExact) => {
                  return (
                  <Route key={index} path={path} exact={isExact}>
                      {Component}
                  </Route>
                  )
              })}
            </div>
        </Router>
    )
}

export default PortfolioMain
