let arr=[2,4,3,5,6,7];
let arr2=[];
let num=4;
function a(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=num){
            arr2.push(arr[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i]);
    }
}
a();

let ar = [2,4,3,5,6,7];
let n = 4;

let ar2 = arr.filter(x => x >= n);
console.log(ar2);
