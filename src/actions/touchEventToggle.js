// toggling of touch screen event listeners are set
export const touchEventToggle = (status) => {
    return {
        type: "TOUCH_TOGGLE",
        payload: status
    }
}