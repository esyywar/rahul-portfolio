// toggling of touch screen event listeners are set
export const touchEventSet = (status) => {
    return {
        type: "TOUCH_EVENT_SET",
        payload: status
    }
}