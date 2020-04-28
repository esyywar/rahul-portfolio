import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import PortfolioMain from './components/PortfolioMain'
import Title from './components/Title'


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Title />
        </Route>
        <Route path="/portfolio">
          <PortfolioMain />
        </Route>
      </Router>
    </div>
  )
}

export default App;
