import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import sideNavOpen from './sideNavOpen'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    sideNavOpen
})

export default rootReducer