const showNav = (state = false, action) => {
    switch (action.type) {
        case "NAV_TOGGLE":
            return action.payload
        default:
            return state;
    }
}

export default showNav
