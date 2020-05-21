// Set active component
const activeComp = (state = 0, action) => {
    switch (action.type)
    {
        case "SET_COMP":
            return action.payload
        case "NEXT_COMP":
            return state + 1
        case "PREV_COMP":
            return state - 1
        default:
            return state
    }
}

export default activeComp