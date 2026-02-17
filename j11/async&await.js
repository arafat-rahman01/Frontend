let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

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
