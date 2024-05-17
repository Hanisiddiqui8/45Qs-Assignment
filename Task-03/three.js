/*
Store a person's name in a variable, then print that person's name in lower case, uppercase and titlecase.
*/
var personName = "haniSiddiqui";
// lowercase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
