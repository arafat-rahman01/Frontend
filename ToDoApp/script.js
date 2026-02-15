let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);  //inside item->dlt button

    ul.appendChild(item);   //inside ul->item(list)

    inp.value=""; 
});

//Event Deligation
//[2] creating button also be delete

ul.addEventListener("click",
    function(event){
        if(event.target.nodeName=="BUTTON"){
            let listItem=event.target.parentElement;
            listItem.remove();
        }
    }
);


//[1]  only work for inbuild step
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }