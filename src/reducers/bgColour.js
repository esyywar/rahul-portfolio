//set background colour depending on active component (called by components on render)
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