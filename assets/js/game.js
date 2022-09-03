window.addEventListener('load', () => {
  var score = 0
  const container = document.querySelector('#game')
  const boundaries = document.querySelectorAll('.boundary')
  const defaultHeaderText = document.querySelector('#status').innerText
  const status = document.querySelector('#status')
  const scoreContainer = document.querySelector('.example')
  const startButton = document.querySelector('#start')
  const lostMsg = 'You Lost!'
  const wonMsg = 'You Won :)'
  var isStartHovered = false
  var isBoundaryTouched = false
  var isOutsideHovered = true
  scoreContainer.style.textAlign = 'center'

  scoreContainer.innerHTML = score
  scoreContainer.style.color = '#000'

  //reset button -- to reset game settings
  startButton.addEventListener('click', () => {
    boundaries.forEach((boundary) => {
      boundary.style.backgroundColor = '#eeeeee'
    })
    reset()
  })

  function reset() {
    score = 0
    //reset score value
    changeText(scoreContainer, score)
    //change score color
    changeColor(scoreContainer, '#000')
    // reset header text
    changeText(status, defaultHeaderText)
    //change header color to black
    changeColor(status, '#000')
    // status.style.color = '#000'
  }

  function changeText(element, text) {
    element.innerHTML = text
  }

  function changeColor(element, color) {
    element.style.color = color
  }

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color
  }
  document.body.addEventListener('mouseover', (e) => {
    if (
      !e.target.matches('#game') &&
      !e.target.matches('#start') &&
      !e.target.matches('#end') &&
      !e.target.matches('.boundary')
    ) {
      isOutsideHovered = true
    } else {
      //   isOutsideHovered = false
      if (e.target.matches('#start')) {
        isStartHovered = true
        isBoundaryTouched = false
        isOutsideHovered = false
        boundaries.forEach((boundary) => {
          //change background color of the boundery
          changeBackgroundColor(boundary, '#eeeeee')
        })
        //change header text
        changeText(status, defaultHeaderText)
        //change header color to black
        changeColor(status, '#000')
        //change score text color to black
        changeColor(scoreContainer, '#000')
      } else if (e.target.matches('.boundary') && isStartHovered) {
        isBoundaryTouched = true
        boundaries.forEach((boundary) => {
          //change background color of the boundery
          changeBackgroundColor(boundary, '#ea0505')
        })
        score -= 10
        //change score value
        changeText(scoreContainer, score)
        //change score text color to white
        changeColor(scoreContainer, '#fff')
        //change message to "you lost"
        changeText(status, lostMsg)
        //change header color to red
        changeColor(status, '#ea0505')
      } else if (
        e.target.matches('#end') &&
        isStartHovered &&
        !isOutsideHovered &&
        !isBoundaryTouched
      ) {
        score += 5
        //change score value
        changeText(scoreContainer, score)
        //change score text color to black
        changeColor(scoreContainer, '#000')
        //change message to "you won"
        changeText(status, wonMsg)
        //change header color to green
        changeColor(status, '#08660e')
        isStartHovered = false
        isBoundaryTouched = false
        isOutsideHovered = true
      }
    }
  })
})
