/*
Sandwiches: Write a function that accepts an array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/

//Define function using a rest parameter that accepts items arguments representating our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nLet's eat the Sandwich");
}

//Call the function 3 times with 3 different number of arguments

makeSandwich("Chicken", "Cheese", "Iceberg", "Mustard sauce");

makeSandwich("Jam", "Butter");

makeSandwich("Chicken", "Cheese","Lettuce", "Onion", "Tomato", "Suaces")