export const isLight = (mode) => {
    return {
        type: "LIGHT_SWITCH",
        payload: mode
    }
}