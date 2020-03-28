import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Title from './components/Title'
import Portfolio from './components/Portfolio'
import WorkExp from './components/WorkExp'
import Education from './components/Education'
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
      component: WorkExp
    },
    {
      name: "Education",
      path: "/education",
      component: Education
    },
    {
      name: "Skills",
      path: "/skills",
      component: Skills
    }
  ]

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Title numBars={14} />
        </Route>
        {routes.map(({ path, component : Component }, index) => {
          return (
            <Route key={index} path={path}>
              {Component}
            </Route>
          )
        })}
      </Router>
    </div>
  )
}

export default App;
