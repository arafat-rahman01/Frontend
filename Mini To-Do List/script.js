const input=document.getElementById("task");
const btn=document.getElementById("add");
const list=document.getElementById("list");

btn.addEventListener("click",()=>{
    if(input.value==="") return;
    const li=document.createElement("li");
    li.innerText=input.value;

    li.addEventListener("click",()=>{
        li.remove();
    });

    list.appendChild(li);
    input.value="";
});