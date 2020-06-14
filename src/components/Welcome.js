import React, { useLayoutEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { setTypeAnim } from "../actions/setTypeAnim"

import { nextComp } from "../actions/setActiveComp"
import { resetSwipeL, resetSwipeR } from "../actions/touchEventSet"
import { sideNavToggle } from "../actions/setSideNav"

import { isMobileScrWidth, isMobileDevice } from "../util/mobileCheck"

import "../css/welcome.css"

function Welcome(props) {
  /************* REDUX STORE MANAGEMENT *******************/

  const dispatch = useDispatch()

  const doTypeAnim = useSelector((state) => state.isTypeAnim)

  /* Is the side navigation open */
  const sideNavOpen = useSelector((state) => state.sideNavOpen)

  const isLeftSwipe = useSelector((state) => state.swipeLeftEv)
  const isRightSwipe = useSelector((state) => state.swipeRightEv)

  // Used in this component to show/remove swipe up arrow on component change
  const activeComp = useSelector((state) => state.activeComp)

  /********** TYPEWRITER ANIMATION CONTENT *******************/

  // Text to display with typewriter animation - Place all list items at start, paragraphs at end
  const typeWriteItems = [
    {
      id: 0,
      charDelay: 30,
      itemDelay: 300,
      text: "Test Engineer",
      htmlId: "type-target-1",
      listItem: true,
      color: "red",
    },
    {
      id: 1,
      charDelay: 30,
      itemDelay: 300,
      text: "Embedded Sytems Dev",
      htmlId: "type-target-2",
      listItem: true,
      color: "green",
    },
    {
      id: 3,
      charDelay: 30,
      itemDelay: 300,
      text: "Microsystems Researcher",
      htmlId: "type-target-3",
      listItem: true,
      color: "#140152",
    },
    {
      id: 4,
      charDelay: 30,
      itemDelay: 500,
      text: "Front End Web Dev",
      htmlId: "type-target-4",
      listItem: true,
      color: "#22007C",
    },
    {
      id: 5,
      charDelay: 45,
      itemDelay: 400,
      text: "Passionate about electrical and embedded systems engineering. I also dabble in web technologies!",
      htmlId: "type-target-5",
      listItem: false,
    },
    {
      id: 6,
      charDelay: 45,
      itemDelay: 200,
      text: "Have a look around to learn more about my projects and background.",
      htmlId: "type-target-6",
      listItem: false,
    },
  ]

  /*************** TYPEWRITER ANIMATION FUNCTIONS ****************/

  // Used to store and clear timeout functions for type write effect
  var timeoutIds = []

  // Apply the typewriter animation
  function typeWriteAnim(htmlId, text, charIdx, delay) {
    try {
      // Place character at the destination
      if (text.length > document.getElementById(htmlId).innerHTML.length) {
        document.getElementById(htmlId).innerHTML += text.charAt(charIdx)
      }

      // Increment charIdx and recurse if more characters to display
      if (++charIdx < text.length) {
        let id = setTimeout(() => typeWriteAnim(htmlId, text, charIdx, delay), delay)
        timeoutIds.push(id)
      }
    } catch {
      dispatch(setTypeAnim(false))
      for (let i = 0; i < timeoutIds.length; i++) {
        window.clearTimeout(timeoutIds[i])
      }
      return
    }
  }

  /* Call this function to drive the typeWriter animation performed by function above - Give callback as arguement */
  function typeAnimDriver(callback) {
    /* Initial delay which will accumulate */
    var typeWriteDelay = 800

    /* 2. Check that the html elements are rendered and animation request is set */
    if (document.getElementById(typeWriteItems[0].htmlId) != null && doTypeAnim) {
      /* 3. Check that html element is currently empty (otherwise this function has already been triggered) */
      if (document.getElementById(typeWriteItems[0].htmlId).innerHTML === "") {
        for (let i = 0; i < typeWriteItems.length; i++) {
          let element = typeWriteItems[i]
          let id = setTimeout(() => typeWriteAnim(element.htmlId, element.text, 0, element.charDelay), typeWriteDelay)
          timeoutIds.push(id)
          typeWriteDelay += element.text.length * element.charDelay + element.itemDelay
        }
      }

      /* 4. When all animations complete, fire callback (set animation request OFF in redux store) */
      setTimeout(() => callback(), typeWriteDelay)
    }
  }

  /* Call typewriter animation only after all elements rendered */
  useLayoutEffect(() => {
    if (doTypeAnim) {
      /* Call type write animation with dispatch as callback */
      typeAnimDriver(() => dispatch(setTypeAnim(false)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /************** MOBILE CHECK FUNCTION FOR SWIPE ARROW **********************/

  // Conditional render of swipe arrow depending on if mobile client platform
  function showSwipeArrow() {
    // Apply bounce animation after entrance animation time
    let id = setTimeout(() => {
      try {
        document.getElementById("swipe-arrow-container").style.animation =
          "swipeBounce 2s linear infinite alternate-reverse"
      } catch {
        clearTimeout(id)
      }
    }, 1000)

    return (
      <div id='swipe-arrow-container' onClick={() => dispatch(nextComp())}>
        <p>{isMobileDevice() ? "Swipe Up!" : "Click Here!"}</p>
        <div className='swipe-arrow'>&#10095;</div>
      </div>
    )
  }

  /*************************** TOGGLE NAV ON SIDE SWIPES ***************************/

  if (isLeftSwipe) {
    dispatch(resetSwipeL())
    if (sideNavOpen && isMobileScrWidth()) {
      dispatch(sideNavToggle())
    }
  }

  if (isRightSwipe) {
    dispatch(resetSwipeR())
    if (!sideNavOpen && isMobileScrWidth()) {
      dispatch(sideNavToggle())
    }
  }

  return (
    <div id='intro-page'>
      <div className='intro-container'>
        <h1 className='name-header'>RAHUL ESWAR</h1>
        <hr />

        {/* Typewriter animated list items */}
        <ul className='desc-list'>
          {typeWriteItems
            .filter((element) => {
              return element.listItem
            })
            .map((element) => {
              return (
                <li key={element.id} id={element.htmlId} style={{ color: element.color }}>
                  {!doTypeAnim && element.text}
                </li>
              )
            })}
        </ul>

        {/* Typewriter animated paragraph items */}
        <div className='desc-paras'>
          {typeWriteItems
            .filter((element) => {
              return !element.listItem
            })
            .map((element) => {
              return (
                <p
                  key={element.id}
                  id={element.htmlId}
                  className={element.listItem ? "intro-desc-list" : "intro-desc-para"}
                >
                  {!doTypeAnim && element.text}
                </p>
              )
            })}
        </div>

        {/* Swipe up arrow to display for mobile devices */}
        {activeComp === props.id && showSwipeArrow()}
      </div>
    </div>
  )
}

export default Welcome
