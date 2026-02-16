// function task1(callback) {
//     setTimeout(function () {
//         document.getElementById("output").innerText = "Task 1 Done";
//         callback();
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(function () {
//         document.getElementById("output").innerText += " → Task 2 Done";
//         callback();
//     }, 1000);
// }

// function task3(callback) {
//     setTimeout(function () {
//         document.getElementById("output").innerText += " → Task 3 Done";
//         callback();
//     }, 1000);
// }

// function startProcess() {
//     task1(function () {
//         task2(function () {
//             task3(function () {
//                 console.log("All tasks completed!");
//             });
//         });
//     });
// }

h1=document.querySelector("h1");

function changeColor(color,delay,nextchangeColor){
    setTimeout(() => {
        h1.style.color=color;
        if(nextchangeColor) nextchangeColor();
    }, delay);
}

changeColor("red",1000,()=>{
    changeColor("green",1000);
})
