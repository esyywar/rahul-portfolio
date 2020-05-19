import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setActiveComp } from '../actions/setActiveComp'


function Projects(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveComp(props.id))
    }, [props.id, dispatch])

    return (
        <h1 className="page-title">Projects</h1>
    )
}

export default Projects
