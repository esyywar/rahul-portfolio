const isNightMode = (state = false, action) => {
    switch (action.type) {
        case "LIGHT_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default isNightMode