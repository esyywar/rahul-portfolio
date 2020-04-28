export const navAppear = (isVisible) => {
    return {
        type: "NAV_TOGGLE",
        payload: isVisible
    }
}