const taskInput = document.getElementById('taskInput')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')
const h2 = document.getElementById('h2')

addTaskButton.addEventListener('click', function () {

    h2.textContent = 'Tasks:'
    h2.style.cssText = 'font-size: 1.5em; font-weight: bold; color: white;'

    const task = taskInput.value

    if (task) {
        const li = document.createElement('li')

        li.textContent = task
        li.addEventListener('click', function () {
            li.classList.toggle('Completed')
        })

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li)
        })
        
        deleteButton.addEventListener('mouseover', function(){
            deleteButton.style.backgroundColor = 'rgb(193,193,193)'
            deleteButton.style.color = 'black'

        })
        deleteButton.addEventListener('mouseout', function(){
            deleteButton.style.backgroundColor = 'rgb(252,89,64)'
            deleteButton.style.color = 'white'
        })

        li.appendChild(deleteButton)
        taskList.appendChild(li)
        taskInput.value = '';

        deleteButton.style.cssText = 'float: right; color: white; border-radius: 20px; border: 1px solid white; background-color: rgb(252, 89, 64); padding: 10px'
        li.style.cssText = 'margin: 5px; padding: 10px; height: 40px; list-style: inside; background-color: rgb(98,122,129); border-radius: 30px; width: auto'

    }


})


