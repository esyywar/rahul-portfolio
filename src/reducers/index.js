import { combineReducers } from 'redux'

import isNightMode from './isNightMode'
import bgColour from './bgColour'
import sideNavOpen from './sideNavOpen'

const rootReducer = combineReducers({
    isNightMode,
    bgColour,
    sideNavOpen
})

export default rootReducer