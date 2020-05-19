// Set active component
// NOTE: Must have initial value not that of screen originally rendered (Welcome.js) to envoke CSS entrance transition
const activeComp = (state = -1, action) => {
    switch (action.type)
    {
        case "COMP_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default activeComp