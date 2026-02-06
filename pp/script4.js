//1
let arr=[1,2,3,4,5,3,2,45,1,6,4,6,3,2];
let n=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==n) arr.splice(i,1);
}
console.log(arr);