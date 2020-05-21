import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import PortfolioMain from './components/PortfolioMain'
import Title from './components/Title'

// To build font-awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBook, faKeyboard, faPlug, faTools } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBook, faKeyboard, faPlug, faTools)


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Title />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioMain />
        </Route>
      </Router>
    </div>
  )
}

export default App;
