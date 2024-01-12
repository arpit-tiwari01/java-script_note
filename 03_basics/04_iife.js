/*
IIFE in JavaScript is crucial for encapsulation, 
 preventing global pollution, avoiding variable hoisting issues,
 and facilitating the creation of modular, reusable code structures.
*/

// Regular function
function greeting(name) {
    console.log(`Hi ${name}, welcome to this website`);
  }
  greeting("Arpit");
  

  // IIFE with a regular function
  (function greeting(name) {
    console.log(`Hi ${name}, welcome to this website`);
  })("Sumit");
  

  
  // IIFE with an arrow function
  ((name) => console.log(`Hi ${name}, welcome to this website`))("Rahul");
  