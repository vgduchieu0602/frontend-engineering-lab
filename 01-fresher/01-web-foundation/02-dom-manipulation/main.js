const taskList = document.querySelector('#task-list')

console.log(taskList)

const addButton = document.querySelector('#add-button')

addButton.addEventListener('click', () => {
    const task = document.createElement('p')

    task.textContent = "Learn Frontend"

    taskList.appendChild(task)

    task.addEventListener('click', () => {
        task.remove()
    })
})