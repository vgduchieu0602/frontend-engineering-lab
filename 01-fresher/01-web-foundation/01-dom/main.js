const h1Element = document.querySelector('#title')
const pElement = document.querySelector('p')
const buttonElement = document.querySelector('#change-title-button')

console.log(h1Element)
console.log(pElement)
console.log(buttonElement)

buttonElement.addEventListener('click', () => {
    buttonElement.textContent = "DOM Updated"
})