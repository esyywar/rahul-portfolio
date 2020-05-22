/************ ACTIONS FOR CHANGING ACTIVE COMPONENT RENDERED IN 'PortfolioMain.js' */

// chaging active component to next one
export const setActiveComp = (id) => {
    return {
        type: "SET_COMP",
        payload: id
    }
}

// chaging active component to next one
export const nextComp = () => {
    return {
        type: "NEXT_COMP"
    }
}

// changing active component to previous one
export const prevComp = () => {
    return {
        type: "PREV_COMP"
    }
}