
// Получаем элементы
const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

// Получаем сохраненные задачи
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Функция добавления задачи
function addTask() {
  const task = {
    text: taskInput.value,
    time: taskTime.value,
    completed: false
  };

  tasks.push(task);

  // Очищаем поле ввода
  taskInput.value = "";
  taskTime.value = "";

  // Обновляем список задач
  updateTaskList();

  // Сохраняем задачи в localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция обновления списка задач
function updateTaskList() {
  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      toggleTaskCompleted(index);
    });

    const span = document.createElement("span");
    span.textContent = `${task.text} (${task.time})`;
    if (task.completed) {
      span.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", function() {
      deleteTask(index);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// Функция пометки задачи выполненной или невыполненной
function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;

  // Обновляем список задач
  updateTaskList();

  // Сохраняем задачи в localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция удаления задачи
function deleteTask(index) {
  tasks.splice(index, 1);

  // Обновляем список задач
  updateTaskList();

  // Сохраняем задачи в localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция удаления всех задач
function clearTasks() {
  tasks = [];

  // Обновляем список задач
  updateTaskList();

  // Сохраняем задачи в localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Обновляем список задач при загрузке страницы
updateTaskList();