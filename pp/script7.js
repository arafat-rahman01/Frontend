//1
// const avrg=(a,b,c)=>{
//     return (a+b+c)/3;
// }
// console.log(avrg(10,5,25));

// //2
// const isEven=(num)=>{
//     if(num%2==0) console.log("Even");
//     else console.log("Odd");
// }
// isEven(10);
// isEven(5);

//3
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message);
//   }
// };
// setTimeout(object.logMessage.bind(object), 1000);
// setTimeout(() => object.logMessage(), 1000);
// setTimeout(object.logMessage, 1000); 


//4
let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2);
