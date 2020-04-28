import { combineReducers } from 'redux'

import nightMode from './nightMode'
import showNav from './showNav'

const rootReducer = combineReducers({
    nightMode,
    showNav
})

export default rootReducer