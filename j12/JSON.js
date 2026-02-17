//JSON.parse()
//JSON string ➜ JavaScript object

let data = '{"name":"Arafat","age":22}';

let obj = JSON.parse(data);

console.log(obj.name);
console.log(obj.age);

// JSON.stringify()
// JavaScript object ➜ JSON string

let user = {
    name: "Arafat",
    age: 22
};

let jsonData = JSON.stringify(user);

console.log(jsonData);
