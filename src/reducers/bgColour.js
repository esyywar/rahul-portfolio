// Default state is the 'Welcome' window background colour
const bgColour = (state="FFFFFF", action) => {
    switch (action.type)
    {
        case "COLOUR_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default bgColour