import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import sideNavOpen from './sideNavOpen'
import isTouchEvent from './isTouchEvent'
import {swipeLeftEv, swipeRightEv} from './horizSwipeEv'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    sideNavOpen,
    isTouchEvent,
    swipeLeftEv,
    swipeRightEv
})

export default rootReducer