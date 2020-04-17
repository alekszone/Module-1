//ex1
//Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.

// const areaRectangle = function(l1,l2){
//      area = l1 * l2
//     return area;
// };
// console.log(areaRectangle(4,7));

//ex2
//Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.

// const crazySum = function(a,b){
// if (a===b){
//     sum = (a*b)+(a*b)+(a*b)
//     console.log("They are same");
//     return sum;
// }else {
//     return "Not the same";
// }
// }
// console.log(crazySum(4,4));

//ex3
//  Write a function "crazyDiff" that computes the 
// absolute difference between a given number and 19. 
// Returns triple their absolute difference if 
// the specified
// number is greater than 19.


// const crazyDiff = function(a){
// diff = Math.abs(a-19);
// if(diff >19){
//     console.log(diff);
//     console.log("Is biger than 19");
//     return diff * 3;
// }else{
//     console.log("Absolute diferene " ,diff);
//    return "its not bigger than 19";
// }
// }
// console.log(crazyDiff(25));


//ex4
//Write a function "boundary" which 
//accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
// const boundary = function(n){
//     if(n>20 && n<=100 || n===400){
//     console.log("It's true");
//         return true;
// }else{
//     return false;
// }
// }
// console.log(boundary(25));

//ex 5
//Write a function "strivify" which accepts a string S. Add to S "Strive"
// in front of a given string, if the given string begins with "Strive" then return the original string.

// const strivify = function(s){
//     let string = "Strive";
//     if(string === "Strive" ){
//         s = string;
//         console.log(s,string);
//         return  "They are same";
//     }else{
//         return "they are not same";
//     }
// }

// console.log(strivify());


//ex6
//Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
//HINT: Module Operator

// const check3and7 = function(x) {
//     if(x>0){
//   if (x % 3 == 0 || x % 7 == 0) 
//   {
//    console.log("Its multiple of 3 or 7");
//     return true;
//   } 
//   else {
//     return false;
//   }
// }else{
//     return "wrong number";
// }
// }
// console.log(check3and7(45))
// console.log(check3and7(65))
// console.log(check3and7(78))



//ex7
//Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
// const reverseString =function (s) {
//      let myStr= "";
//  for (var i = s.length - 1; i >= 0; i--) { 
//         myStr += s[i]; 
//     }
//    return myStr; 
// }
// console.log(reverseString("Strive"));


//ex8
//Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter


  
// const upperFirst =function (str) {
//     let splitStr = str.split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
// }
//   console.log(upperFirst("hello from there"));

//ex9
//Write a function "cutString" to create a new string without the first and last character of a given string
const cutString = function (string){
let splitString2 = string.split("");
const array1 =[splitString2];
 array1.shift();

return array1;
}

console.log(cutString("hello"))





