const body = document.querySelector('body')
const button = document.querySelector('button')
const value = document.querySelector('#hex-value')

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', changeHex)

function changeHex() {
    let hex = '#'

    for (let i=0; i<6; i++){ //this for loop is so as to produce 6 digits e.g #64b6ac
        const index = Math.floor(Math.random()*hexValues.length)
        hex+=hexValues[index] //the '#' will be added to the value of the index randomly created from above
    }
    value.textContent = hex
    body.style.backgroundColor = hex
}