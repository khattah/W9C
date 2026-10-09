// Create three arrays with matching item information.
let item_names = ["Laptop", "Mouse", "Keyboard"];
let item_prices = [950, 25, 60];
let in_stock = [true, false, true];

// Read the first item using index 0.
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Add a fourth item to the end of each array using push().
item_names.push("Monitor");
item_prices.push(200);
in_stock.push(false);

// Remove the last item from each array using pop().
// Store each removed value in its own variable.
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();

// Display the first item's information.
console.log("First item name:", first_item_name);
console.log("First item price:", first_item_price);

// Display the values removed by pop().
console.log("Last item name:", last_item_name);
console.log("Last item price:", last_item_price);
console.log("Last item stock:", last_item_stock);

// Display the arrays after removing the fourth item.
console.log("Item names:", item_names);
console.log("Item prices:", item_prices);
console.log("In stock:", in_stock);