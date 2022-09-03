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

  //change score value
  changeText(scoreContainer, score)
  //change score text color
  changeColor(scoreContainer, '#000')

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
          //change background color of the boundery to light gray
          changeBackgroundColor(boundary, '#eeeeee')
        })
        //change score text and color, change status text and color
        changeScoreAndStatus('#000', defaultHeaderText, '#000')
      } else if (e.target.matches('.boundary') && isStartHovered) {
        isBoundaryTouched = true
        boundaries.forEach((boundary) => {
          //change background color of the boundery to red
          changeBackgroundColor(boundary, '#ea0505')
        })
        score -= 10
        //change score text and color, change status text and color
        changeScoreAndStatus('#fff', lostMsg, '#ea0505')
      } else if (
        e.target.matches('#end') &&
        isStartHovered &&
        !isOutsideHovered &&
        !isBoundaryTouched
      ) {
        score += 5
        //change score text and color, change status text and color
        changeScoreAndStatus('#000', wonMsg, '#08660e')
        isStartHovered = false
        isBoundaryTouched = false
        isOutsideHovered = true
      }
    }
  })
  //reset button -- to reset game settings
  startButton.addEventListener('click', () => {
    boundaries.forEach((boundary) => {
      //change background color of the boundery to light gray
      changeBackgroundColor(boundary, '#eee')
    })
    reset()
  })

  //function that reset variables to their initial values
  function reset() {
    score = 0
    //change score text and color, change status text and color
    changeScoreAndStatus('#000', defaultHeaderText, '#000')
  }

  //function that change the text of element
  function changeText(element, text) {
    element.innerHTML = text
  }

  //function that change the color of element
  function changeColor(element, color) {
    element.style.color = color
  }

  //function that change the background color of element
  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color
  }

  //function that change the text and color of score and header
  function changeScoreAndStatus(scoreColor, statusText, statusColor) {
    //change score value
    changeText(scoreContainer, score)
    //change score text color to black
    changeColor(scoreContainer, scoreColor)
    //change header text
    changeText(status, statusText)
    //change header color to black
    changeColor(status, statusColor)
  }
})
