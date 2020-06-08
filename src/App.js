import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import PortfolioMain from './components/PortfolioMain'

import { useDispatch, useSelector } from 'react-redux'
import { nextComp, prevComp } from './actions/setActiveComp'
import { touchEventSet, setSwipeR, setSwipeL, resetSwipeR, resetSwipeL } from './actions/touchEventSet'

import { watchForHover } from './util/toggleHoverAnim'

import portfolioPages from './content/portfolioPages.json'

import './css/hoverEffects.css'

// To build font-awesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faBook, faKeyboard, faPlug, faTools } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faArrowRight, faBook, faKeyboard, faPlug, faTools)


function App() {

  /**************** TOGGLING HOVER EFFECTS FOR DEVICE PLATFORM ****************/

  useEffect(() => {
    watchForHover()
  }, [])

  /**************** STATE VARIABLES *********************/

  const dispatch = useDispatch()

  /* State indicating if touch event listeners are set */
  const isTouchEvListener = useSelector(state => state.isTouchEvListener)

  /* Set state of active component */
  const activeComp = useSelector(state => state.activeComp)


  /**************** DETECTING SWIPE EVENTS *****************/

  var startX, startY, startTime, moveX, moveY, deltaTime

  /* Minimum threshold for recording a swipe (in pixels) */
  const swipeThres = 90

  /* Store starting touch position and time */
  // eslint-disable-next-line
  function handleTouchStart(event) {
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
    startTime = event.timeStamp

    /* Reset movement trackers */
    moveX = 0
    moveY = 0

    /* Add event listener for touch move */
    document.addEventListener("touchmove", handleTouchMove)
  }

  /* Compare final position with start to determine if swipe occured */
  // eslint-disable-next-line
  function handleTouchEnd() {
    /* Remove touch event listener */
    document.removeEventListener("touchmove", handleTouchMove)

    /* Check for swipe - If detected, remove event listeners and call handler */
    if (deltaTime < 500)
    {
      if (Math.abs(moveY) > swipeThres)
      {
        vertSwipeHandle()
        return
      }
      else if (Math.abs(moveX) > swipeThres)
      { 
        horizSwipeHandle()
      }
    }
  }  

  /* Track position of touch movement */
  function handleTouchMove(event) {
    moveX = event.touches[0].clientX - startX
    moveY = event.touches[0].clientY - startY
    deltaTime = event.timeStamp - startTime
  }

  /* Touch event listeners attached */
  if (!isTouchEvListener)
  {
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)
    dispatch(touchEventSet(true))
  }


  /****************** SWIPE EVENT FLAGS TO BE HANDLED IN CHILDREN COMPONENTS ********************/

  /* Check if swiped left or right and handle event */
  function horizSwipeHandle() {
    if (moveX > 0)
    {
      dispatch(setSwipeR())
    }
    else if (moveX < 0)
    {
      dispatch(setSwipeL())
    }
  }

  /* Check if swiped up or down and handle event */
  function vertSwipeHandle() {
    /* Reset horizontal swipes before changing components */
    dispatch(resetSwipeL())
    dispatch(resetSwipeR())

    if (moveY > 0) 
    {
      if (activeComp > 0)
      {
        dispatch(prevComp())
      }
    }
    else if (moveY < 0)
    {
      if (activeComp < portfolioPages.length - 1)
      {
        dispatch(nextComp())
      }
    }
  }


  /********************* USE EFFECTS ********************/

  /* Update the event listeners when handler function environment changes (happens with activeComp state change) */
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchEnd])


  return (
    <div>
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioMain />
        </Route>
      </Router>
    </div>
  )
}

export default App;
