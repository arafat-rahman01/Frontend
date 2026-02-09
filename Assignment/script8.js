//8.1
let arr=[1,2,3,4];
let ansSq=arr.map((el)=>(el*el));
let ansSum=arr.reduce((res,el)=>(res+el));
let avrg=ansSum/arr.length ;
console.log(ansSq);
console.log(ansSum);
console.log(avrg);

//8.2
let a=[1,2,3,4,5];
let ans=a.map((el)=>(el+5));
console.log(ans);

//8.3
let str=["arafat","sakib","hasib","rifat"];
let upCase=str.map((el)=>(el.toUpperCase()));
console.log(upCase);