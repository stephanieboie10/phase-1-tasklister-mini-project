document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
  // your code here
});

let taskObjArr = []

  // get the form and add the event listener

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target["new-task-description"].value
  // console.log(task)
  const priorityLevel = parseInt(e.target.priority.value)

  const taskObj = {task, priorityLevel}
  taskObjArr.push(taskObj)
  // console.log(taskObjArr)
  // console.log(priorityLevel)

  sortTasks()
  displayTasks()
}

function displayTasks(task, priorityLevel) {
  const taskUl = document.getElementById("tasks")
  // console.log(taskUl)
  taskUl.innerHTML = ""

  taskObjArr.forEach((task) => {
    const taskLi = document.createElement("li")
    const deleteBtn = document.createElement("button")

    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", (e) => deleteTask(e,task))

    taskLi.textContent = task.task + " "
    // in the above code + " " adds a space between task and button
    // console.log(taskLi)
    taskLi.style.color = getPriorityColor(task.priorityLevel)
    taskLi.appendChild(deleteBtn)
    taskUl.appendChild(taskLi)
  })
}

function deleteTask(e, task) {
  // console.log(e)
  taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
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

function sortTasks() {
console.log("in sortTasks")
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
    taskObjArr.sort((a,b) => a.priorityLevel - b.priorityLevel)
  } else {
      taskObjArr.sort((a,b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  displayTasks()
}