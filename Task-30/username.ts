/*
 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
wriƟng code that will print a greeƟng to each user
aŌer they log in to a website. Loop through the array, and print a greeƟng to each user:
• If the username is 'admin', print a special greeƟng, such as Hello admin, would you like to see a status
report?
• Otherwise, print a generic greeƟng, such as Hello Eric, thank you for logging in again.
*/

//Creating an array
let userNames = ["Usman", "Sara", "Alara", "Admin", "Muhammad"];

//Using forEach loop on Array
userNames.forEach(oneUser => {
    if (oneUser=== "Admin"){
        console.log(`Hello ${oneUser},would you like to see the status report?`)
    }else{
        console.log(`Hello ${oneUser} , thank you for logging in again.`)
    }
})