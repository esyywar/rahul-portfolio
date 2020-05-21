const isTouchEvent = (state = false, action) => {
    switch (action.type)
    {
        case "TOUCH_TOGGLE":
            return action.payload
        default:
            return state
    }
}

export default isTouchEvent