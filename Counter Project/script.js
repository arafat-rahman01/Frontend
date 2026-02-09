let count=0;
const display=document.getElementById("count");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");

plus.addEventListener("click",()=>{
    count++;
    display.innerText=count;
});

minus.addEventListener("click",()=>{
    count--;
    display.innerText=count;
});