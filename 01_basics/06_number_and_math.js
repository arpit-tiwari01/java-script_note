// -------------- Basic Numbers --------------

// Constant score
const score = 400;
console.log("Score:", score);

// Creating a Number object
const balance = new Number(100);
console.log("Balance:", balance);

// Converting Number object to string
console.log("Balance as String:", balance.toString());

// Rounding to one decimal place
console.log("Rounded Balance (1 decimal place):", balance.toFixed(1));

// Other number with precision
const otherNumber = 123.8966;
console.log("Other Number with Precision 4:", otherNumber.toPrecision(4));

// Formatting a large number with commas
const hundreds = 1000000;
console.log("Formatted Hundreds:", hundreds.toLocaleString('en-IN'));

// -------------- Math Operations --------------

// Math object
console.log("\n--- Math Operations ---");
console.log("Math Object:", Math);

// Absolute value
const absoluteValue = Math.abs(-4);
console.log("Absolute Value:", absoluteValue);

// Rounding
const roundedValue = Math.round(4.6);
console.log("Rounded Value:", roundedValue);

// Ceiling and floor
const ceiledValue = Math.ceil(4.2);
const flooredValue = Math.floor(4.2);
console.log("Ceiled Value:", ceiledValue);
console.log("Floored Value:", flooredValue);

// Min and Max from a set of numbers
const minNumber = Math.min(8, 5, 6, 4, 2, 1, 7);
const maxNumber = Math.max(8, 5, 6, 4, 2, 1, 7);
console.log("Minimum Value:", minNumber);
console.log("Maximum Value:", maxNumber);

// Random Numbers
console.log("\n--- Random Numbers ---");

// Random number between 0 and 1
console.log("Random Number between 0 and 1:", Math.random());

// Random number between 1 and 10
console.log("Random Number between 1 and 10:", Math.random() * 10 + 1);

// Random number between min and max (inclusive)
const minRange = 10;
const maxRange = 20;
const randomInRange = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
console.log("Random Number between", minRange, "and", maxRange, ":", randomInRange);
