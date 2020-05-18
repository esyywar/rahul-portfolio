// changing active background colour
export const activeComp = (id) => {
    return {
        type: "COMP_SWITCH",
        payload: id
    }
}