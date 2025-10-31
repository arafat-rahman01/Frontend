//Problem no 1

// let arr=[10,20,30,40,50];
// let ans=arr.every((el)=>{
//    el%2==0 
// });

//Problem -2 (find the min number)

// let arr=[1,2,6,4,5,3,-5];
// let ans=arr.reduce((min,el)=>{
//     if(el<min) return el;
//     else return min;
// });
// console.log(ans);

// function sum(...arg){
//     for(let i=0;i<arg.length;i++){
//         console.log(arg[i]);
//     }
// }
// sum(1,2,3,4);

let arr = [1, 2, 3, 4];

let sumOfSquares = () => arr.reduce((sum, num) => sum + num ** 2, 0);

let ans = sumOfSquares();
console.log("Sum of squares:", ans);
console.log("Average:", ans / arr.length);
