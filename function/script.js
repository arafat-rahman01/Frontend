// function a(x,y){
//     return x+y;
// }
// console.log(a(10,5));

// let count = 1;
// let id = setInterval(() => {
//   console.log(count);
//   count++;

//   if (count > 10) {
//     clearInterval(id);
//   }
// }, 1000);


//print after 1.5 sec all
// console.log("Hello, Good Morning..!");
// let c=1;
// let id2=setTimeout(()=>{
//     console.log("..!");
//     console.log("You..!");
//     console.log("You are..!");
//     console.log("You are welcome..!");
//     c++;
// },1500);
// console.log("Age Must be 26+");

//Print after 1.5 one by one 
// console.log("Hello, Good Morning..!");
// let message=
//     ["..!",
//     "You..!",
//     "You are..!",
//     "You are welcome..!"
//     ]
// let i=0;
// let id=setInterval(()=>{
//     console.log(message[i]);
//     i++;
//     if(i===message.length){
//         clearInterval(id);
//     }
// },1500);
// console.log("Age Must be 26+");

// //This in arrow function
// const user = {
//   name: "Arafat",
//   sayName: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 3000);
//   }
// };

// user.sayName();


//Every Method
// let arr=[10,20,40,100];
// let ans=arr.every((el)=>(el%10==0));
// console.log(ans);

//Find min number of a array(Reduce mathod)
let arr=[-5,5,7,3,6,1];
let ans=arr.reduce((minVal,el)=>{
  if(minVal>el) return el;
  else return minVal;
});
console.log(ans);

