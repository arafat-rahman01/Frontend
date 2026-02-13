let input=document.createElement("input");
let button=document.createElement("button");
let h1=document.createElement("h1");
let p=document.createElement("p");

// input.placeholder="username";
// button.id="btn";

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

button.innerText="Click me!";
h1.innerHTML="<u>Dom Practice.</u>";
p.innerHTML="Apna College <b>Delta</b> Practice.";
h1.classList.add("h1");

document.querySelector("body").appendChild(input);
document.querySelector("body").appendChild(button);
document.querySelector("body").appendChild(h1);
document.querySelector("body").appendChild(p);