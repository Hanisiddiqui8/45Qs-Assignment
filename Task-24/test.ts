/*
 More CondiƟonal Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the
following:
• Tests for equality and inequality with strings
• Tests using the lower case funcƟon
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

//Define variables

let justice: string=("justice == justice");
let upperCase = "CRIME";
let ten = 10;
let twenty = 20;
let collection = ["Pret", "unstitched", "Ethnic", "Western"];

//Test for equality and inequality using strings

console.log("Is justice equals to justice");
console.log(justice == justice);

console.log("Is justice not equals to justice");
console.log(justice != justice);

//Test using the lower case function

console.log("Is CRIME equals to crime after converting to lowercase?");
console.log(upperCase.toLowerCase()== "crime");

console.log("CRIME is not equals to crime after converting to crime");
console.log(upperCase.toLowerCase()!= "crime");

//Numerical Tests
//Equals to
console.log("IS ten equals to 10?");
console.log(ten == twenty);

 //Not equals to
console.log("Is ten not equals to twenty?");
console.log(ten != twenty);

//Greater than
console.log("Is ten greater than 0?");
console.log(ten > 0);

//Lesser than
console.log("Is ten lesser than 0?");
console.log(ten < 0);

//Greater than or equals to
console.log("Is ten greater than or equals to five?");
console.log(ten >= 5);

//Less than or equals to
console.log("Is twenty less than or equals to ten?");
console.log(20 <= 10);

//Tests using "and" & "or" operators
//Using "&&" (AND) operator
console.log("twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > ten );

console.log("twenty is not equals to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30 );

//Using "||" (OR) operator
console.log("twenty is greater than 50 OR twenty is equals to 20");
console.log(twenty > 50 || twenty == twenty);

console.log("twenty is greater than 50 OR twenty isnot  equals to 20");
console.log(twenty > 50 || twenty != twenty);

//Test whether the item is in the array
console.log("Is Pret included in the array?");
console.log(collection.includes("Pret"));

//Test whether the item is not in the array
console.log("Is Ethnic not included in the array?");
console.log(!collection.includes("Ethnic"));






