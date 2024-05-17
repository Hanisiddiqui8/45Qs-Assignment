/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a funcƟon called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log (name));
}

//New function created to add great with the magicians' names by using .map and the array will be modified
function make_great(magicians: string []){
   return magicians.map(name => `The Great ${name}`);
}

//Define array of magician names
let magician_names = ["Azura", "Blaze", "Castor", "Horus", "Merlin"]

//Callin the "make_great" fucntion to modify magicians' names
let great_magicians = make_great( magician_names);

console.log(great_magicians)

//Calling the "show_magicians" variable that will show the modified list of magicians' names 
show_magicians(great_magicians)