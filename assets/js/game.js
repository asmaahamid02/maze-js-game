window.addEventListener('load', () => {
  var score = 0
  const container = document.querySelector('#game')
  const boundaries = document.querySelectorAll('.boundary')
  const defaultHeaderText = document.querySelector('#status').innerText
  console.log(defaultHeaderText)
  const status = document.querySelector('#status')
  const scoreContainer = document.querySelector('.example')

  scoreContainer.innerHTML = score
  scoreContainer.style.color = '#000'
  scoreContainer.style.textAlign = 'center'

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
