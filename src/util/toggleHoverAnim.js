/* This function adds class to the document body which allows hover effects 
*
* Class name is 'has-hover' as defined in hoverEffects.css
*
* Source: https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices
*/

export function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    let lastTouchTime = 0
  
    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('has-hover')
    }
  
    function disableHover() {
      document.body.classList.remove('has-hover')
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)
  
    enableHover()
  }