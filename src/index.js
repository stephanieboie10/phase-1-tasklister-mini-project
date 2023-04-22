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

  displayTask(task)
}

function displayTask(task) {
  const taskUl = document.getElementById("tasks")
  // console.log(taskUl)
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " "
  // above code + " " adds a space between task and button
  // console.log(taskLi)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  // console.log(e)
  e.target.parentNode.remove()
}