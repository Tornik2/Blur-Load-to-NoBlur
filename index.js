const loadText = document.querySelector('.load-text')
const bg = document.querySelector('.background')
let interval
let load = 0


document.body.addEventListener('click', () => {
    interval = setInterval(loading, 40)
    loading()
})

function loading() {
  
  load++
  
  if(load > 99) {
    clearInterval(interval)
  }
  bg.style.filter = `blur(${100 - load}px)`
  loadText.textContent = `${load}%`
  loadText.style.opacity = load < 100 ? 1.2 - (load/100) : 0
}


