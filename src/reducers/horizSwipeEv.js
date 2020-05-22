/********* HORIZONTAL SWIPE EVENT SET STATES ***************/

export const swipeRightEv = (state = false, action) => {
    switch(action.type)
    {
        case "SWIPE_R_SET":
            return true
        case "SWIPE_R_RESET":
            return false
        default:
            return state
    }
}

export const swipeLeftEv = (state = false, action) => {
    switch (action.type)
    {
        case "SWIPE_L_SET":
            return true
        case "SWIPE_L_RESET":
            return false
        default:
            return state
    }
}