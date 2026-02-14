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

document.addEventListener("click", function(e) {
  console.log("Alt:", e.altKey);
  log.textContent=`  The alt key is pressed: ${e.altKey}`;
  console.log("Ctrl:", e.ctrlKey);
  log.textContent+=` The ctrl key is pressed: ${e.ctrlKey}`;
  console.log("Shift:", e.shiftKey);
  log.textContent+=` The shift key is pressed: ${e.shiftKey}`;
});

document.addEventListener("click", function(e) {
  log.textContent=`  The alt key is pressed: ${e.altKey}
    The ctrl key is pressed: ${e.ctrlKey} The shift key is pressed: ${e.shiftKey}`;
});
