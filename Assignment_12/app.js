 // Prompt the user for their date of birth
let date = prompt("Enter your birth date (1-31):");
let month = prompt("Enter your birth month (1-12):");
let year = prompt("Enter your birth year (e.g., 1990):");

// Convert the inputs to numbers
date = parseInt(date);
month = parseInt(month) - 1; // JavaScript months are zero-indexed
year = parseInt(year);

// Create a new Date object for the date of birth
let birthDate = new Date(year, month, date);

// Array of weekday names
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day of the week
let birthDayOfWeek = daysOfWeek[birthDate.getDay()];

// Alert the user with the day of the week they were born
alert("You were born on a " + birthDayOfWeek + ".");
