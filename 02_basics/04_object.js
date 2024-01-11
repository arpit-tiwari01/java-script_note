// Singleton
const tinderUser = {
    id: "@arpit1232",
    name: "Arpit",
    isLoggesdIn: false
};

// Nested object
const regularUser = {
    email: "anotheruser@mail.com",
    fullname: {
        userfullname: {
            firstname: "Arpit",
            lastname: "Tiwari"
        }
    }
};

// Accessing nested object property
// console.log(regularUser.fullname.userfullname.firstname);

// Merging objects using spread operator
const target = { 1: "a", 2: "b" };
const source1 = { 3: "c", 4: "d" };
const source2 = { 5: "f", 6: "g" };

const newObj = { ...target, ...source1, ...source2 };
// console.log(newObj);

// Array of objects
const users = [
    { id: 1, email: "h@mail.com" },
    { id: 2, email: "rahul@mail.com" },
    { id: 3, email: "anil@mail.com" },
    { id: 4, email: "shub@mail.com" }
];

// Accessing property of an object in the array
console.log(users[1].email);

// Logging the Tinder user object
console.log(tinderUser);

// Object manipulation
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Checking if a property exists
console.log(tinderUser.hasOwnProperty('isLoggesdIn'));

// Destructuring an object
const student = {
    studentname: "Arpit",
    rollno: 1829,
    course: "cse"
};

// Accessing property using de-structuring
const { studentname } = student;
console.log(studentname);
