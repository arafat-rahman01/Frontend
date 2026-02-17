let myPromise = new Promise(function(resolve, reject) {
    
    let success = true;

    if(success){
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});

myPromise
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });


//Chain Promise
function task(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(message);
            resolve(message);
        }, 1000);
    });
}

task("Task 1")
    .then(() => {
        return task("Task 2");
    })
    .then(() => {
        return task("Task 3");
    })
    .then(() => {
        console.log("All Done!");
    })
    .catch(err => console.log(err));

//callBack hell -> Promise->await

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

//[2]
changeColor("red", 1000)
    .then(() => changeColor("green", 1000))
    .then(() => changeColor("blue", 1000))
    .then(() => console.log("Color change completed!"))
    .catch(err => console.log(err));

//[3] 
    async function changeColors() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);

        console.log("All colors changed!");
    } catch (error) {
        console.log("Error:", error);
    }
}
