// Singleton

// Object literals
// Object.create

// Define a symbol for a unique key
const mySym = Symbol("key1");

// Create a JavaScript user object
const JsUser = {
    // Basic properties
    name: "Arpit",
    "full name": "Arpit Tiwari",
    [mySym]: "myKey1",
    age: 20,
    location: "Mumbai",
    email: "arpit@chaiorcode.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    // Modify property value
    setEmail: function (newEmail) {
        this.email = newEmail;
    },

    // Object freezing to prevent changes
    freezeObject: function () {
        Object.freeze(this);
    },

    // Method to greet the user
    greeting: function () {
        console.log(`Hello JS user, ${this.name}!`);
    },
};

// Accessing properties
// console.log(`Hello ${JsUser.name}`);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Modifying properties
JsUser.setEmail("arpit@google.com");

// Attempting to change a frozen object
// JsUser.freezeObject();
// JsUser.email = "new@mail.com"; // This line will not work

// Invoking the greeting method
// JsUser.greeting();

// Display the updated object
// console.log(JsUser);
