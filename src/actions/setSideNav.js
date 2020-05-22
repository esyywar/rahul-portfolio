/******************* SIDE NAV STATE ACTIONS ******************/

// Set the sideNav open or close
export const sideNavSet = (status) => {
    return {
        type: "NAV_SET",
        payload: status
    }
}

// Toggle the side navigation
export const sideNavToggle = (isOpen) => {
    return {
        type: "NAV_TOGGLE"
    }
}