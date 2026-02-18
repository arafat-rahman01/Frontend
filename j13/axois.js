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
