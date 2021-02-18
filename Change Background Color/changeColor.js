const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['green', 'yellow', 'black', 'blue', 'violet', 'red']
body.style.backgroundColor = 'green'

button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex= parseInt(
        Math.random()*colors.length
    )
body.style.backgroundColor = colors[colorIndex]
}
