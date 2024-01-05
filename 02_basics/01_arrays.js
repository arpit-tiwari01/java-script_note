// -------------- Arrays in JavaScript --------------

// Creating an array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log("Fruits Array:", fruits);

// Accessing elements in an array
const firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];
console.log("\n--- Accessing Elements ---");
console.log("First Fruit:", firstFruit);
console.log("Last Fruit:", lastFruit);

// Adding elements to the end of an array
fruits.push('Grapes', 'Pineapple');
console.log("\n--- Adding Elements ---");
console.log("Fruits after adding:", fruits);

// Removing elements from the end of an array
const removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("Fruits after removing:", fruits);

// Adding elements to the beginning of an array
fruits.unshift('Strawberry', 'Kiwi');
console.log("\n--- Adding Elements to the Beginning ---");
console.log("Fruits after adding to the beginning:", fruits);

// Removing elements from the beginning of an array
const shiftedFruit = fruits.shift();
console.log("Shifted Fruit:", shiftedFruit);
console.log("Fruits after shifting:", fruits);

// Finding the index of an element
const indexOfOrange = fruits.indexOf('Orange');
console.log("\n--- Finding Element Index ---");
console.log("Index of 'Orange':", indexOfOrange);

// Slicing an array
const slicedFruits = fruits.slice(1, 4); // Extract elements from index 1 to 3
console.log("\n--- Slicing an Array ---");
console.log("Sliced Fruits:", slicedFruits);

// Spreading elements into a new array
const moreFruits = ['Papaya', 'Cherry'];
const combinedFruits = [...fruits, ...moreFruits];
console.log("\n--- Combining Arrays ---");
console.log("Combined Fruits:", combinedFruits);

// Iterating through an array
console.log("\n--- Iterating Through Array ---");
combinedFruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Removing elements using splice
const removedElements = combinedFruits.splice(2, 3); // Removes 3 elements starting from index 2
console.log("\n--- Splice Method ---");
console.log("Removed Elements:", removedElements);
console.log("Array after Splice:", combinedFruits);

// Other important array methods
console.log("\n--- Other Important Array Methods ---");
console.log("Is it an Array?", Array.isArray(combinedFruits));
console.log("Array length:", combinedFruits.length);
console.log("Joining Array elements:", combinedFruits.join(', '));
console.log("Reversed Array:", combinedFruits.reverse());
console.log("Concatenated Array:", combinedFruits.concat(['Dragon Fruit', 'Guava']));
