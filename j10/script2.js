let i=document.querySelector("input");
i.addEventListener("keydown",
    function(event){
        event.preventDefault();
        console.log(event.key);
        console.log(event.code);
    }
);