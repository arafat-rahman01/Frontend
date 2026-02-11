let tasks = [];
let draggedId = null;

// Add card
function addCard(status) {
  const text = prompt("Task name?");
  if (!text) return;

  const task = {
    id: Date.now(),
    text,
    status
  };

  tasks.push(task);
  render();
}

// Render UI
function render() {
  document.getElementById("todo").innerHTML = "";
  document.getElementById("doing").innerHTML = "";
  document.getElementById("done").innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.dataset.id = task.id;
    card.innerHTML = `
      ${task.text}
      <button onclick="deleteCard(${task.id})">x</button>
    `;

    card.addEventListener("dragstart", dragStart);

    document.getElementById(task.status).appendChild(card);
  });
}

// Delete
function deleteCard(id) {
  tasks = tasks.filter(task => task.id !== id);
  render();
}

// Drag start
function dragStart(e) {
  draggedId = e.target.dataset.id;
}

// Drop logic
document.querySelectorAll(".list").forEach(list => {
  list.addEventListener("dragover", e => e.preventDefault());

  list.addEventListener("drop", e => {
    const status = e.target.id;

    tasks = tasks.map(task =>
      task.id == draggedId ? { ...task, status } : task
    );

    render();
  });
});
