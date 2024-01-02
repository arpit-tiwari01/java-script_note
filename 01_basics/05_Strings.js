const name = "Arpit"
const repoCount =50

// console.log(name + repoCount+"value");  ->not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Arpit-tiwari')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)  //also use - value
console.log(anotherString);

const newStringOne = "   Arpit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arpit.com/arpit%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('ramu')); //check the value

/*
Best resource ->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/