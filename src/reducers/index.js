import { combineReducers } from 'redux'

import isTypeAnim from './isTypeAnim'
import activeComp from './activeComp'
import sideNavOpen from './sideNavOpen'
import isTouchEvListener from './isTouchEvListener'
import {swipeLeftEv, swipeRightEv} from './horizSwipeEv'

const rootReducer = combineReducers({
    isTypeAnim,
    activeComp,
    sideNavOpen,
    isTouchEvListener,
    swipeLeftEv,
    swipeRightEv
})

export default rootReducer