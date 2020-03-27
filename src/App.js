import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Title from './components/Title'
import Portfolio from './components/Portfolio'


function App() {

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Title numBars={14} />
        </Route>
        <Route path="/myresume">
          <Portfolio />
        </Route>
      </Router>
    </div>
  )
}

export default App;
