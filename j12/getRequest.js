//[1]
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.log("Error:", error);
  });

//[2]
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
