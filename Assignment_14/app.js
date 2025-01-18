function customSplice(array, start, deleteCount, ...items) {
    // Adjust start for negative values
    if (start < 0) {
        start = Math.max(array.length + start, 0);
    } else {
        start = Math.min(start, array.length);
    }

    // Handle deleteCount
    if (deleteCount === undefined) {
        deleteCount = array.length - start;
    } else {
        deleteCount = Math.min(deleteCount, array.length - start);
    }

    // Extract the deleted elements
    let removedElements = array.slice(start, start + deleteCount);

    // Perform the removal and addition
    let leftPart = array.slice(0, start);
    let rightPart = array.slice(start + deleteCount);
    array.length = 0; // Clear the array
    array.push(...leftPart, ...items, ...rightPart);

    return removedElements;
}

// Example usage
let originalArray = [1, 2, 3, 4, 5];
let removed = customSplice(originalArray, 2, 2, 9, 10);

console.log("Modified Array:", originalArray); // Output: [1, 2, 9, 10, 5]
console.log("Removed Elements:", removed);     // Output: [3, 4]
