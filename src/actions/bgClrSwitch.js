// changing active background colour
export const bgClrSwitch = (colour) => {
    return {
        type: "COLOUR_SWITCH",
        payload: colour
    }
}