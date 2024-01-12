// Example of Global Scope
var globalVar = "I am global";

function globalScopeExample() {
    console.log("Inside globalScopeExample:");
    console.log(globalVar); // Accessing globalVar from within the function
}

globalScopeExample();
console.log("Outside globalScopeExample:");
console.log(globalVar); // Accessing globalVar outside the function

// Example of Local Scope
function localScopeExample() {
    var localVar = "I am local";
    console.log("Inside localScopeExample:");
    console.log(localVar); // Accessing localVar within the function
}

localScopeExample();
// console.log(localVar); // Uncommenting this line will result in an error as localVar is not accessible outside the function

// Example of Variable Hoisting
console.log("Variable Hoisting Example:");
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// Example of Function Hoisting
console.log("Function Hoisting Example:");
hoistedFunction(); // Output: "Hello, I am hoisted function!"
function hoistedFunction() {
    console.log("Hello, I am hoisted function!");
}

// Example of Block Scope with let
console.log("Block Scope Example:");
// console.log(blockVar); // Uncommenting this line will result in an error as blockVar is not hoisted
let blockVar = "I am block-scoped";
console.log(blockVar); // Output: I am block-scoped
