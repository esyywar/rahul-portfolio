// Toggle if type write animation should be applied on welcome item render (only used on initial render)
const isTypeAnim = (state = true, action) => {
    switch (action.type) 
    {
        case "TYPE_ANIM_SET":
            return action.payload
        default:
            return state
    }
}

export default isTypeAnim