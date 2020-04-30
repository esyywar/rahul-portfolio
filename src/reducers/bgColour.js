// Default state is the 'Welcome' window background colour
const bgColour = (state="#5E6FDC", action) => {
    switch (action.type)
    {
        case "COLOUR_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default bgColour