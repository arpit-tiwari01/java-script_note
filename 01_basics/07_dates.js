// -------------- Date and Time --------------

// Current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Get specific components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Note: Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log("\n--- Date Components ---");
console.log("Year:", year);
console.log("Month:", month + 1); // Adding 1 to display the actual month
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

// Creating a specific date
const customDate = new Date(2023, 5, 15, 12, 30, 0); // June 15, 2023, 12:30 PM
console.log("\nCustom Date:", customDate);

// Formatting date to a custom string
const formattedDate = customDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short'
});

console.log("Formatted Date:", formattedDate);

// Manipulating dates
const tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1);
console.log("\nTomorrow's Date:", tomorrow);

// Calculating the difference between two dates
const today = new Date();
const futureDate = new Date(2025, 0, 1); // January 1, 2025
const timeDifference = futureDate - today;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log("\nDays until January 1, 2025:", daysDifference);
