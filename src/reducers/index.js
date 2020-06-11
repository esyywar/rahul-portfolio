import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import sideNavOpen from './sideNavOpen'
import isTouchEvListener from './isTouchEvListener'
import {swipeUpEv, swipeDownEv, swipeLeftEv, swipeRightEv} from './isSwipeEv'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    sideNavOpen,
    isTouchEvListener,
    swipeUpEv,
    swipeDownEv,
    swipeRightEv,
    swipeLeftEv
})

export default rootReducer