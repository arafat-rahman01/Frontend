let btn=document.querySelector(".btn");

let h1=document.createElement("h1");
let c=0;
btn.addEventListener("click",()=>{
    c=c+1;
    console.log(c);
    if(c>10){
       // btn.classList.add("bkc");
        document.body.classList.add("bkc");
       // document.body.style.backgroundColor="black";
    }
})