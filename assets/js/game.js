window.addEventListener('load', () => {
  var score = 0
  const container = document.querySelector('#game')
  const boundaries = document.querySelectorAll('.boundary')
  const defaultHeaderText = document.querySelector('#status').innerText
  const status = document.querySelector('#status')
  const scoreContainer = document.querySelector('.example')
  const startButton = document.querySelector('#start')
  const lostMsg = 'You Lost!'
  const wonMsg = 'You won :)'
  var isStartHovered = false
  var isBoundaryTouched = false
  var isOutsideHovered = false

  scoreContainer.innerHTML = score
  scoreContainer.style.color = '#000'
  scoreContainer.style.textAlign = 'center'

  //reset button -- to reset game settings
  startButton.addEventListener('click', () => {
    boundaries.forEach((boundary) => {
      boundary.style.backgroundColor = '#eeeeee'
    })
    score = 0
    scoreContainer.innerHTML = score
    scoreContainer.style.color = '#000'
    status.innerText = defaultHeaderText
    status.style.color = '#000'
  })

  document.body.addEventListener('mouseover', (body_event) => {
    if (
      !body_event.target.matches('#start') &&
      !body_event.target.matches('#end') &&
      !body_event.target.matches('.boundary')
    ) {
      isOutsideHovered = true
    } else {
      isOutsideHovered = false
    }
  })

  startButton.addEventListener('mouseover', () => {
    container.addEventListener('mouseover', (e) => {
      if (e.target.matches('.boundary') && isStartHovered) {
        isBoundaryTouched = true
        boundaries.forEach((boundary) => {
          boundary.style.backgroundColor = '#ea0505'
        })
        score -= 10
        scoreContainer.innerHTML = score
        scoreContainer.style.color = '#fff'
        status.innerText = lostMsg
        status.style.color = '#ea0505'
      } else if (e.target.matches('#start')) {
        isStartHovered = true
        boundaries.forEach((boundary) => {
          boundary.style.backgroundColor = '#eeeeee'
        })
        status.innerText = defaultHeaderText
        status.style.color = '#000'
        scoreContainer.style.color = '#000'
      } else if (e.target.matches('#end') && isStartHovered) {
        console.log('hovered')
        score += 5
        scoreContainer.innerHTML = score
        scoreContainer.style.color = '#fff'
        status.innerText = wonMsg
        status.style.color = '#08660e'
      }
    })
  })
})
