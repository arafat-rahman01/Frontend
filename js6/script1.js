// s=0;
// function sum(n){
//     for(i=1;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }

// console.log(sum(5));

function concat(...str){
    return str.join(' ');
}
console.log(concat("hello","Hi","How are you"));