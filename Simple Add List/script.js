const input=document.getElementById("text");
const btn=document.getElementById("btn");
const list=document.getElementById("list");

// btn.addEventListener("click",()=>{
//     if(input.value==="") return;

//     const li=document.createElement("li");
//     li.innerText=input.value;

//     list.appendChild(li);
//     input.value="";
// });

btn.addEventListener("click",()=>{
    if(input.value==="") return;

    const li=document.createElement("li");
    li.innerText=input.value;

    list.appendChild(li);
    input.value="";
});