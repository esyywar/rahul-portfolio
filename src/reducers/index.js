import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import sideNavOpen from './sideNavOpen'
import isTouchEvent from './isTouchEvent'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    sideNavOpen,
    isTouchEvent
})

export default rootReducer