let date = prompt("Enter your birth date (1-31):");
let month = prompt("Enter your birth month (1-12):");
let year = prompt("Enter your birth year:");

date = parseInt(date);
month = parseInt(month) - 1;  
year = parseInt(year);

let birthDate = new Date(year, month, date);

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let bithDay = daysOfWeek[birthDate.getDay()];


alert("You were born on a " + bithDay + ".");
