//set active component
const activeComp = (state = 0, action) => {
    switch (action.type)
    {
        case "COMP_SWITCH":
            return action.payload
        default:
            return state
    }
}

export default activeComp