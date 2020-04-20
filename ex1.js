console.log("hello");
//Write a function "checkArray" which receives an array of random numbers
// (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
//The function returs the sum of the numbers bigger than 5.

const giveMeRandom = function (n){

let x=0;
let arry1=[];
for (let i=0;i<=n;i++){
x=Math.floor((Math.random()*11)+0);
arry1.push(x);

}

return arry1;
}

console.log(giveMeRandom(5));



