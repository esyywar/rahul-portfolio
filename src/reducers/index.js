import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import bgColour from './bgColour'
import sideNavOpen from './sideNavOpen'

const rootReducer = combineReducers({
    isTypeAnim,
    bgColour,
    sideNavOpen
})

export default rootReducer