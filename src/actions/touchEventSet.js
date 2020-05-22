/******************** ACTIONS FOR TOUCH EVENTS ********************/

// Indicator if touch screen event listeners are set
export const touchEventSet = (status) => {
    return {
        type: "TOUCH_EVENT_SET",
        payload: status
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