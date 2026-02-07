//1

// let arr=[2,4,3,5,6,7];
// let arr2=[];
// let num=4;
// function a(){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=num){
//             arr2.push(arr[i]);
//         }
//     }
//     for(let i=0;i<arr2.length;i++){
//         console.log(arr2[i]);
//     }
// }
// a();

// let ar = [2,4,3,5,6,7];
// let n = 4;

// let ar2 = arr.filter(x => x >= n);
// console.log(ar2);

//2
// let str="abcdabcdefgggh";
// str=str.split("").sort().join("");
// let ans="";
// function noDuplicateCharInString(){
//     for(let i=0;i<str.length-1;i++){
//         if(str[i]!=str[i+1])ans+=str[i];
//     }
//     console.log(ans);
// }
// noDuplicateCharInString();
// //Using set/Freq
// let s= "abcdabcdefgggh";
// let a = "";
// let freq = {};

// for (let i = 0; i < s.length; i++) {
//     if (!freq[str[i]]) {
//         a += s[i];
//         freq[s[i]] = true;
//     }
// }

// console.log(ans);

//3
let country=["Germany","Bangladesh","United States Of America"];

function longestLength(){
    let ans="";
    for(let i=0;i<country.length;i++){
        if(country[i].length>ans.length){
            ans=country[i];
        }
    }
    console.log(ans);
}
longestLength();
