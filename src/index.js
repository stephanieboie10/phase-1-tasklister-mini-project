document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
  // your code here
});

  // get the form and add the event listener

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target["new-task-description"].value
  // console.log(task)
  const priorityLevel = parseInt(e.target.priority.value)
  // console.log(priorityLevel)

  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks")
  // console.log(taskUl)
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " "
  // in the above code + " " adds a space between task and button
  // console.log(taskLi)
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  // console.log(e)
  e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel) {
  // console.log(priorityLevel)
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2) {
    return "blue"
  } else {
      return "green"
  }
}