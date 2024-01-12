// Organized and Improved Code

// Object with a user
const user = {
    username: "Arpit",
    price: 299,
    welcomMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

// Uncomment the lines below for testing

// user.welcomMessage();
// user.username = "ravi";
// user.welcomMessage();

// Console log "this" outside any function (in the global context)
// console.log(this);

// Function demonstrating "this" behavior
// function chai() {
//     console.log(this);
// }
// chai();

// Function with a local variable using "let" inside a function
// function chai() {
//     let username = "arpit";
//     console.log(this.username);
// }
// chai();

// Arrow function example
const chai = () => {
    let username = "arpit";
    console.log(this.username);
};
chai();

// Arrow function for adding two numbers
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// Simplified arrow function for adding two numbers
// const addTwo = (num1, num2) => num1 + num2;

// Another way to write arrow function for adding two numbers
// const addTwo = (num1, num2) => (num1 + num2);

// Arrow function returning an object
const addTwo = (num1, num2) => ({ username: "rahul" });

// Testing the addTwo function
console.log(addTwo(2, 3));
