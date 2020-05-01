// to switch night mode on/off
export const isLight = (mode) => {
    return {
        type: "LIGHT_SWITCH",
        payload: mode
    }
}