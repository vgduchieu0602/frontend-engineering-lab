const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector("#search-button")
const result = document.querySelector('#result')

searchButton.addEventListener('click', (event) => {
    console.log(event)

    result.textContent = `Searching for: ${searchInput.value}`
})

searchInput.addEventListener('input', (e) => {
    console.log(e.target.value)
})