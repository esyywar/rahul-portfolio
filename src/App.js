import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Title from './components/Title'
import Portfolio from './components/Portfolio'
import WorkExp from './components/WorkExp'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

import './css/resume-window.css'


function App() {

  const routes = [
    {
      name: "Main Page",
      path: "/myresume",
      component: Portfolio
    },
    {
      name: "Work Experience",
      path: "/workexp",
      component: WorkExp
    },
    {
      name: "Projects",
      path: "/projects",
      component: Projects
    },
    {
      name: "Education",
      path: "/edu",
      component: Education
    },
    {
      name: "Skills",
      path: "/techSkills",
      component: Skills
    }
  ]

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Title numBars={14} />
        </Route>
        <div className="grid-container">
          <Nav />
          {routes.map(({ path, component : Component }, index) => {
            return (
              <Route key={index} path={path}>
                {Component}
              </Route>
            )
          })}
        </div>
      </Router>
    </div>
  )
}

export default App;
