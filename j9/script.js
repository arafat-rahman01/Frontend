// [1]
let para=document.createElement("p");
para.innerText="Hi i'm Arafat...";
document.querySelector("body").appendChild(para);

para.classList.add('red');


// [2]
let h3=document.createElement("h3");
h3.innerText="Hi i'm blue h3...!";
document.querySelector("body").appendChild(h3);

h3.classList.add('blue');

//[3]
let div=document.createElement("div");
let h1=document.createElement("h1");

h1.innerText="I'm in div.....!";

h1.classList.add("h1");

div.appendChild(h1);

document.body.appendChild(div);

let p=document.createElement("p");
p.innerText="ME TOO...";
div.appendChild(p);
document.body.appendChild(div);