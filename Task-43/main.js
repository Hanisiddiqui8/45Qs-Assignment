/*
 Unchanged Magicians: Start with your work from Exercise 42. Call the
funcƟon make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//New function created to add great with the magicians' names by using .map and the array will be modified
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define array of magician names
var magician_names = ["Azura", "Blaze", "Castor", "Horus", "Merlin"];
//Making a copy of original array through slice() function
var copy_magician_names = magician_names.slice();
//Modify the copied array to add "The Great" to their names
var copy_great_magicians = make_great(copy_magician_names);
//Show both arrays Original & Copy
//Original array
console.log("original array\n");
show_magicians(magician_names);
//Copy array
console.log("copied array\n");
show_magicians(copy_great_magicians);
