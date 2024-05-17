/*
 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var userNames = ["Usman", "Sarah", "Alara", "Admin", "Muhammad"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty, you need to find some users!");
}
else {
    //Using forEach loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see the status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, " , thank you for logging in again."));
        }
    });
}
