// changing active background colour
export const setActiveComp = (id) => {
    return {
        type: "COMP_SWITCH",
        payload: id
    }
}