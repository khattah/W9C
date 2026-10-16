
"use strict";

// W9C - JavaScript Arrays Assignment

// Create three arrays with initial values.
let item_names = ["Laptop", "Mouse", "Keyboard"];
let item_prices = [900, 25, 50];
let in_stock = [true, false, true];

// Get the first item name and price.
// Array indexes start at 0.
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Add one new value to each array using push().
item_names.push("Monitor");
item_prices.push(200);
in_stock.push(true);

// Remove the last value from each array using pop().
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();

// Display the results in the browser console.
console.log("First item:", first_item_name);
console.log("First price:", first_item_price);

console.log("Last item:", last_item_name);
console.log("Last price:", last_item_price);
console.log("Last stock:", last_item_stock);

// Display the remaining arrays.
console.log(item_names);
console.log(item_prices);
console.log(in_stock);
