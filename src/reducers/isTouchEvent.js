const isTouchEvent = (state = false, action) => {
    switch (action.type)
    {
        case "TOUCH_EVENT_SET":
            return action.payload
        default:
            return state
    }
}

export default isTouchEvent