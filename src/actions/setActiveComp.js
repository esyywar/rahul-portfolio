// chaging active component to next one
export const setActiveComp = (id) => {
    return {
        type: "SET_COMP",
        payload: id
    }
}