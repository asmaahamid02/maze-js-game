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

  startButton.addEventListener('mouseover', () => {
    boundaries.forEach((boundary) => {
      boundary.style.backgroundColor = '#eeeeee'
    })
    status.innerText = defaultHeaderText
    status.style.color = '#000'
    scoreContainer.style.color = '#000'
  })

  container.addEventListener('mouseover', (e) => {
    if (e.target.matches('.boundary')) {
      boundaries.forEach((boundary) => {
        boundary.style.backgroundColor = '#ea0505'
      })
      status.innerText = 'You Lost!'
      status.style.color = '#ea0505'
      score -= 10
      scoreContainer.innerHTML = score
      scoreContainer.style.color = '#fff'
    }
  })
})
