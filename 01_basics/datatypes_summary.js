// Covers primitive and non-primitive data types

// Primitive Datatypes
// 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
const score = 100; // Example of a numeric value
console.log(typeof score);  // Output: number

// Number with decimal
const scoreValue = 100.3; // Example of a numeric value with decimal
console.log(typeof scoreValue);  // Output: number

// Boolean
const isLoggedIn = false; // Example of a boolean value
console.log(typeof isLoggedIn);  // Output: boolean

// null
const outsideTemp = null; // Example of intentional absence of an object value
console.log(typeof outsideTemp);  // Output: object (quirk in JavaScript)

// undefined
let userEmail; // Example of an uninitialized variable
console.log(typeof userEmail);  // Output: undefined

// Symbol
const id = Symbol('123'); // Example of a unique and immutable value
const anotherId = Symbol('123');
console.log(id === anotherId); // Output: false

// Uncomment the following line to include BigInt
// const bigNumber = 54255666541256452n;

// Referance (Non-primitive)
// --> Array, Object, functions

// Array
const heroes = ["😄", "😢", "😇", "😠"]; // Example of a collection with numerical indices
console.log(typeof heroes);  // Output: object

// Object
let myObj = {
    name: 'arpit', 
    age: 20,
};

console.log(typeof myObj); // Output: object

// Function
const logHello = function () {
    console.log("Hello 😎");
};

console.log(typeof logHello); // Output: function

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
