
/* 
Store a person's name in a variable, then print that person's name in lower case, uppercase and titlecase.
*/

const personName: string = "haniSiddiqui"

// lowercase
console.log(personName.toLowerCase());


// uppercase
console.log(personName.toUpperCase());


// titlecase

let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetters; 

console.log(titleCase);