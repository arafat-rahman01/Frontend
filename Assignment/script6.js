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
// let country=["Germany","Bangladesh","United States Of America"];

// function longestLength(){
//     let ans="";
//     for(let i=0;i<country.length;i++){
//         if(country[i].length>ans.length){
//             ans=country[i];
//         }
//     }
//     console.log(ans);
// }
// longestLength();

//4
// let s="abcfgtiokliaaeeeeiiiioooooouuuu";
// let count=0;
// function countVowel(){
//     for(let i=0;i<s.length;i++){
//         if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u' ||
//             s[i]=='A' || s[i]=='E' || s[i]=='I' || s[i]=='O' || s[i]=='U'
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowel();

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels("United States of America"));

//5
let s=1;
let e=10;
let d=e-s;

function genRandom(){
    console.log(Math.floor(Math.random()*(e-s+1))+st);
}
 genRandom();

function randomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(randomInRange(5, 15));
