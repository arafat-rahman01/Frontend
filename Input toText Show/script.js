const input=document.getElementById("input");
const btn=document.getElementById("show");
const output=document.getElementById("output");

btn.addEventListener("click",()=>{
    output.innerText=input.value;
    input.value="";
});