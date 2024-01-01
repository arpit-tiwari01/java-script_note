let score = "33abc" //try--> 33,string,boolean,undefinde

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber);

// "33"=>33 string
// "33abc"=>NaN (not a number) -number
// true=>1,false=>0

let isLoggedIn=true
let booleanIsloggedIn=Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);

let somename=33
let stringNumber=String(somename)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** Operations *********************

let value = 3
let negvalue = -3
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Coder's"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
//not good prectice
console.log("1"+2+2);   //122
console.log(1+2+"2");   //32
// code readability is important
console.log("1"+(2+2));

console.log(+true);   //->this is confusing code

let gameCounter = 100
++gameCounter
//gameCounter++  ->try this also 
console.log(gameCounter);

// note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment