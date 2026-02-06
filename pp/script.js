//1
var number=100;
if(number%10===0){
    console.log("Good");
}else{
    console.log("Bad");
}

//2
// let userName =prompt("Please enter your name");
// let age =prompt("please enter your age");
// alert(`${userName} is ${age} years old.`);

//3
let quatar=4;
switch(quatar){
    case 1: console.log("J,F,M");break;
    case 2: console.log("A,M,J");break;
    case 3: console.log("J,A,S");break;
    case 4: console.log("O,N,D");break;
    default: console.log("Enter a valid quater");
}

//4
const s="Arafat";
var l=s.length;
if((s[0]=='A' || s[0]=='a') && l>5) console.log("Golden String");
else console.log("Not");

//Find largest 3 number
let arr=[1,4,5,2,6,9,8];
arr.sort();
console.log(arr[arr.length-1],arr[arr.length-2],arr[arr.length-3]);

