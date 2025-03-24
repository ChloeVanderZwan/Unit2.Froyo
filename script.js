// Prompt the visitor for froyo flavors input
let input = prompt("vanilla, strawberry, coffee, mango");

// Split the input into an array of flavors
let flavors = input.split(",");

// Create an object to count each flavor
let flavorCounts = {};

// Loop through the flavors and count them
flavors.forEach((flavor) => {
  flavor = flavor.trim(); // Remove extra spaces if any
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
});

// Display the flavor counts as a table in the console
console.table(flavorCounts);
