/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a funcƟon called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define array of magician names
var magician_names = ["Azura", "Blaze", "Castor", "Horus", "Merlin"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(great_magicians);
