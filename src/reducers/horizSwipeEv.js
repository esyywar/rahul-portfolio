/********* VERTICAL SWIPE EVENT SET STATES ***************/

export const swipeUpEv = (state = false, action) => {
    switch(action.type)
    {
        case "SWIPE_U_SET":
            return true
        case "SWIPE_U_RESET":
            return false
        default:
            return state
    }
}

export const swipeDownEv = (state = false, action) => {
    switch (action.type)
    {
        case "SWIPE_D_SET":
            return true
        case "SWIPE_D_RESET":
            return false
        default:
            return state
    }
}

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