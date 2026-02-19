let inp=document.createElement("input");
inp.type="text";
inp.placeholder="Enter a character";
document.body.appendChild(inp);

let btn=document.createElement("button");
btn.innerText="Click me..";
document.body.appendChild(btn);

let h2=document.createElement("h2");
document.body.appendChild(h2);

btn.addEventListener("click",()=>{
    let char=inp.value;
    h2.innerHTML=`You type this <b> ${char} </b>`;
    inp.value="";
})
