/*
5. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitaƟons. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program staƟng the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviƟng.
• Print a second set of invitaƟon messages, one for each person who is sƟll
in your list.
*/

let guestList = ["Hani", "Mariam", "Zain"];

let cantCome = guestList[0];

console.log(cantCome, "can't make it to the dinner");

guestList.splice(0, 1, "Kanza"); 

guestList.forEach(eachGuest => console.log(`Aoa ${eachGuest}, you are invited for the dinner`));