/******************** ACTIONS FOR TOUCH EVENTS ********************/

// Indicator if touch screen event listeners are set
export const touchEventSet = (status) => {
    return {
        type: "TOUCH_EVENT_SET",
        payload: status
    }
}


/************** Setting up/down swipe flags ******************/

// Set flag for swipe right event
export const setSwipeU = () => {
    return {
        type: "SWIPE_U_SET"
    }
}

// Reset flag for swipe right event
export const setSwipeD = () => {
    return {
        type: "SWIPE_D_SET"
    }
}


/************** Setting left/right swipe flags ******************/

// Set flag for swipe right event
export const setSwipeR = () => {
    return {
        type: "SWIPE_R_SET"
    }
}

// Reset flag for swipe right event
export const setSwipeL = () => {
    return {
        type: "SWIPE_L_SET"
    }
}


/************* Resetting up/down swipe event flags *************/

// Set flag for swipe right event
export const resetSwipeU = () => {
    return {
        type: "SWIPE_U_RESET"
    }
}

// Reset flag for swipe right event
export const resetSwipeD = () => {
    return {
        type: "SWIPE_D_RESET"
    }
}


/************* Resetting left/right swipe event flags *************/

// Set flag for swipe right event
export const resetSwipeR = () => {
    return {
        type: "SWIPE_R_RESET"
    }
}

// Reset flag for swipe right event
export const resetSwipeL = () => {
    return {
        type: "SWIPE_L_RESET"
    }
}