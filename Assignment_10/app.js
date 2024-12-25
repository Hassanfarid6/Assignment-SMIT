
var matriculationPercentage = parseFloat(prompt("Enter your Matriculation Percentage:"));
var entryTestPercentage = parseFloat(prompt("Enter your Entry Test Percentage:"));

if ((matriculationPercentage) && (entryTestPercentage)) {

    // Calculate average percentage
    let averagePercentage = (matriculationPercentage + entryTestPercentage) / 2;
    if (averagePercentage >= 70 && averagePercentage <= 100 ) {
        alert(`Your average percentage is ${averagePercentage}%. You are ELIGIBLE.`);
    } else {
        alert(`Your average percentage is ${averagePercentage}%. You are NOT eligible.`);
    }
} else {
    alert("Invalid input. Please enter numerical values for percentages.");

}
