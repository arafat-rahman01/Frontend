//8.1
let arr=[1,2,3,4];
let ansSq=arr.map((el)=>(el*el));
let ansSum=arr.reduce((res,el)=>(res+el));
let avrg=ansSum/arr.length ;
console.log(ansSq);
console.log(ansSum);
console.log(avrg);