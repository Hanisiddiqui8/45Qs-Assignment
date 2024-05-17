/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in Ɵme for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a Ɵme unƟl only two names remain in your list. Each Ɵme you pop
a name from your list, print
a message to that person leƫng them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people sƟll on your list, leƫng them know they’re sƟll invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end
of your program.
*/

//Starting with exercise-16:

// creating guest list Array
let guestList = ["Hani", "Mariam", "Zain"];

// making variable for the guest who can't make it to the dinner
let cantCome = guestList [0];

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
let middleIndex: number = Math.floor(guestList.length /2);

//Adding a new guest name in the middle of the index in the array
guestList.splice(middleIndex, 0, "Nani");

//Printing message for the updated list of guests
console.log("updated list of our guests");

//Sending invitation to each guest by their names
guestList.forEach(oneguest => console.log(`Aoa ${oneguest}, you're invited for the dinner tonight`));

//Informing about that the dinner table won't arrive on time, so only two guest can be invited for the dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so I can invite only two guests for the dinner");

//Using while-loop to remove guests from the array till two guests are left in it
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log (`Sorry, ${removeGuest} I can't invite you to the dinner`);
}    
//Sending invitations for the dinner to the last two guests  
console.log("Invitations for the last 2 guests")
guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you're still invited for the dinner`));

//Removing the last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty list", guestList);
