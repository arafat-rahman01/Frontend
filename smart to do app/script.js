const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to LocalStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render Tasks
function renderTasks(filter = "all") {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (
            filter === "completed" && !task.completed ||
            filter === "pending" && task.completed
        ) {
            return;
        }

        const li = document.createElement("li");
        li.classList.toggle("completed", task.completed);

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(li);
    });
}

// Add Task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
});

// Toggle Complete
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Filter
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        renderTasks(btn.dataset.filter);
    });
});

// Initial Render
renderTasks();