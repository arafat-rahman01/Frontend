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
