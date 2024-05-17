/*
More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
Start with your program from Exercise
Add a print statement to the end of your program informing
people that you found a bigger dinner table
Add one new guest to the beginning of your array
Add one new guest to the middle of your array
Use append() to add one new guest to the end of your list
Print a new set of invitation messages, one for each person in your list
*/
// creating guest list Array
var guestList = ["Hani", "Mariam", "Zain"];
// making variable for the guest who can't make it to the dinner
var cantCome = guestList[0];
//print the name of the guest who can't make it to the dinner
console.log(cantCome, "can't make it to the dinner");
// Add & Remove guest names from the guest list Array
guestList.splice(0, 1, "Kanza");
//Printing a message about finding a bigger table for the dinner
console.log("Good news! We have found a bigger table for dinner");
//Adding a new guest name at the start of the index in the array 
guestList.unshift("Asad");
//Adding a new guest name at the end of the index in the array
guestList.push("Rubab");
//Getting the middle index of the guest list
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest name in the middle of the index in the array
guestList.splice(middleIndex, 0, "Nani");
//Printing message for the updated list of guests
console.log("updated list of our guests");
//Sending invitation to each guest by their names
guestList.forEach(function (oneguest) { return console.log("Aoa ".concat(oneguest, ", you're invited for the dinner tonight")); });
