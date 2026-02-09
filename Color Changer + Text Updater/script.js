const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.innerText = "Good Morning";
  title.classList.toggle("big");
});
