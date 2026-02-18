let btn = document.querySelector("#btn");
let factPara = document.querySelector("#fact");

btn.addEventListener("click", async function () {
    let fact = await getFact();
    factPara.innerText = fact;
});

async function getFact() {
    try {
        let res = await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    } catch (err) {
        return "Error";
    }
}

//[3]  sending header with API request
async function getData() {
    try {
        let res = await axios.get("https://catfact.ninja/fact", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_TOKEN_HERE"
            }
        });

        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}
