import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import bgColour from './bgColour'
import sideNavOpen from './sideNavOpen'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    bgColour,
    sideNavOpen
})

export default rootReducer