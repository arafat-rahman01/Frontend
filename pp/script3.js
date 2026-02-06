//1
let arr=[1,2,3,4,5,6,7];
let n=3;
console.log(arr.slice(0,n));
//2
console.log(arr.slice(arr.length-n));
//3
if(arr.length==0) console.log("Empty");
else console.log("Not empty");