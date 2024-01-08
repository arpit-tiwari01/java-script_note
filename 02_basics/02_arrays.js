// Defining arrays for Marvel and DC heroes
const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];



// Concatenating arrays using the concat method
const allMarvelHeroes = marvelHeroes.concat(dcHeroes);
console.log("Concatenated Array:", allMarvelHeroes);



// Using the spread operator for a cleaner way to concatenate arrays
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log("New Concatenated Array:", allNewHeroes);



// Nested array example
const anotherArray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
console.log("Nested Array:", anotherArray);



// Flattening the nested array using the flat method
const realAnotherArray = anotherArray.flat(Infinity);
console.log("Flattened Array:", realAnotherArray);



// Checking if a value is an array and converting strings/objects to arrays
console.log("Is 'Arpit' an Array:", Array.isArray("Arpit"));
console.log("Array from 'Arpit':", Array.from("Arpit"));
console.log("Array from an object:", Array.from({ name: "Rahul" }));



// Creating an array from individual values using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log("Array of Scores:", Array.of(score1, score2, score3));
