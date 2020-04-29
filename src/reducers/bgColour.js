const bgColour = (state="#F0E2E7", action) => {
    switch (action.type)
    {
        case "COLOUR_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default bgColour