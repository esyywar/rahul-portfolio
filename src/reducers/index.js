import { combineReducers } from 'redux'

import isNightMode from './isNightMode'
import bgColour from './bgColour'

const rootReducer = combineReducers({
    isNightMode,
    bgColour
})

export default rootReducer