//set active component
// NOTE: Have to make initial value not that of screen originally rendered (Welcome.js) so envoke CSS entrance transition
const activeComp = (state = 1, action) => {
    switch (action.type)
    {
        case "COMP_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default activeComp