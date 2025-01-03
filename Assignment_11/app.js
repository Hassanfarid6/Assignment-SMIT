// Ask the user for a number
let number = prompt("Enter a number to print its table:");

// Convert the input to a number
number = parseInt(number);

// Print the table using a for loop
console.log(`Table of ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
