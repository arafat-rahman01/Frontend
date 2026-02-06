//1
let arr=[1,2,3,4,5,6,7];
let n=3;
console.log(arr.slice(0,n));
//2
console.log(arr.slice(arr.length-n));
//3
let str="Arafat Rahman";
if(str.length==0) console.log("Empty");
else console.log("Not empty");

//4
idx=4;
if(str[idx]==str[idx].toLowerCase()) console.log("Yes");
else console.log("Not");

//5
let st=prompt("Enter the string");
console.log(`Orginal String: ${st}.`);
console.log(`Now the string is: ${st.trim()}.`);
