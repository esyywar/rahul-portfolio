// Should sideNav be open or collapsed?
const sideNavOpen = (state = false, action) => {
    switch (action.type) 
    {
        case "NAV_TOGGLE":
            return !state
        case "NAV_SET":
            return action.payload
        default:
            return state
    }
}

export default sideNavOpen