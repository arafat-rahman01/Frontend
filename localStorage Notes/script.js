const input = document.getElementById("note");
const list = document.getElementById("list");

let notes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

function render() {
  list.innerHTML = "";
  notes.forEach(n => {
    const li = document.createElement("li");
    li.innerText = n;
    list.appendChild(li);
  });
}

document.getElementById("save").onclick = () => {
  if (input.value === "") return;

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  render();
};

render();
