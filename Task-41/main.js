/*
. Magicians: Make an array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
//Defining a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magician names
var magician_names = ["Azura", "Blaze", "Castor", "Horus", "Merlin"];
//Call the function to print each magician's name
show_magician(magician_names);
