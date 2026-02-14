//[1]
// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
// })

//[2]   Mouse_Event
let log = document.querySelector("#log");
// document.addEventListener("click", logKey);

// function logKey(e) {
//   log.textContent = `The alt key is pressed: ${e.altKey}`;
// }

// document.addEventListener("click", function(e) {
//   console.log("Alt:", e.altKey);
//   log.textContent=`  The alt key is pressed: ${e.altKey}`;
//   console.log("Ctrl:", e.ctrlKey);
//   log.textContent+=` The ctrl key is pressed: ${e.ctrlKey}`;
//   console.log("Shift:", e.shiftKey);
//   log.textContent+=` The shift key is pressed: ${e.shiftKey}`;
// });

// document.addEventListener("click", function(e) {
//   log.textContent=`  The alt key is pressed: ${e.altKey}
//     The ctrl key is pressed: ${e.ctrlKey} The shift key is pressed: ${e.shiftKey}`;
// });

// 1 mouseout
let box = document.getElementById("box");

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "red";
  console.log("Mouse left the box");
});

// 2 keypress
let inp = document.getElementById("inp");
let count = document.getElementById("count");

inp.addEventListener("keypress", function () {
  count.innerText = inp.value.length + 1;
});

// 3 scroll
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "blue";
  } else {
    navbar.style.backgroundColor = "black";
  }
});

// 4 load
window.addEventListener("load", function () {
  alert("Page fully loaded!");
  console.log("Page loaded successfully");
});
