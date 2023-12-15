document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    }
  });

  function addTask(text) {
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
  }
});
